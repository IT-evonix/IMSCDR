const prisma = require('../config/db');

/**
 * Get Dynamic Category Types & Content Type Metadata
 * Handles GET /api/categories/types (100% Database-driven via ContentType model)
 */
exports.getCategoryTypes = async (req, res, next) => {
  try {
    // 1. Fetch active types directly from PostgreSQL content_types table
    const allDbTypes = await prisma.contentType.findMany({
      where: { isActive: true },
      orderBy: { id: 'asc' },
    });

    // Content types for posts (e.g. Notice, Circular, News, Event, Blog)
    const contentTypes = allDbTypes
      .filter((t) => t.module === 'news-events')
      .map((t) => t.name);

    // Formatted category target types for UI dropdowns
    const categoryTypes = allDbTypes.map((t) => ({
      value: t.name,
      label: t.label,
    }));

    return res.status(200).json({
      status: 'success',
      data: {
        contentTypes,
        categoryTypes,
        statuses: ['Active', 'Inactive'],
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get All Categories (Supports search and multi-type filters - Soft deleted excluded)
 * Handles GET /api/categories
 */
exports.getAllCategories = async (req, res, next) => {
  try {
    const { search, type, page, limit } = req.query;

    const whereConditions = [{ deletedAt: null }];
    if (type && type !== 'All') {
      const typeList = type
        .split(',')
        .map((t) => t.trim().toLowerCase())
        .filter(Boolean);

      const orConditions = [
        { type: { equals: 'All', mode: 'insensitive' } },
        { type: { equals: 'NewsEvent', mode: 'insensitive' } },
      ];

      typeList.forEach((t) => {
        orConditions.push({ type: { equals: t, mode: 'insensitive' } });
        orConditions.push({ type: { contains: t, mode: 'insensitive' } });
      });

      whereConditions.push({
        OR: orConditions,
      });
    }
    if (search && search.trim()) {
      whereConditions.push({
        OR: [
          { name: { contains: search.trim(), mode: 'insensitive' } },
          { slug: { contains: search.trim(), mode: 'insensitive' } },
        ],
      });
    }

    const where = { AND: whereConditions };

    const totalItems = await prisma.category.count({ where });

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const queryOptions = {
      where,
      orderBy: { name: 'asc' },
    };

    if (pageNum > 0 && limitNum > 0) {
      queryOptions.skip = (pageNum - 1) * limitNum;
      queryOptions.take = limitNum;
    }

    const categories = await prisma.category.findMany(queryOptions);

    // Count associated news/events/notices for each category
    const categoriesWithCount = await Promise.all(
      categories.map(async (cat) => {
        const count = await prisma.newsEvent.count({
          where: { category: cat.name, deletedAt: null },
        });
        return {
          ...cat,
          itemCount: count,
        };
      })
    );

    const totalPages = limitNum > 0 ? Math.ceil(totalItems / limitNum) : 1;

    return res.status(200).json({
      status: 'success',
      totalItems,
      totalPages,
      currentPage: pageNum || 1,
      data: categoriesWithCount,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create New Category
 * Handles POST /api/categories (Protected Route)
 */
exports.createCategory = async (req, res, next) => {
  try {
    const { name, type } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        status: 'fail',
        message: 'Category name is required.',
      });
    }

    const trimmedName = name.trim();
    const slug = trimmedName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Check if active category already exists
    const existing = await prisma.category.findFirst({
      where: {
        deletedAt: null,
        OR: [{ name: { equals: trimmedName, mode: 'insensitive' } }, { slug }],
      },
    });

    if (existing) {
      return res.status(400).json({
        status: 'fail',
        message: `Category "${trimmedName}" already exists.`,
      });
    }

    // Check if soft-deleted category exists with same name/slug to restore
    const softDeleted = await prisma.category.findFirst({
      where: {
        OR: [{ name: { equals: trimmedName, mode: 'insensitive' } }, { slug }],
      },
    });

    let newCategory;
    if (softDeleted) {
      newCategory = await prisma.category.update({
        where: { id: softDeleted.id },
        data: {
          name: trimmedName,
          slug,
          type: type || 'NewsEvent',
          deletedAt: null,
        },
      });
    } else {
      // Create Category in PostgreSQL
      newCategory = await prisma.category.create({
        data: {
          name: trimmedName,
          slug,
          type: type || 'NewsEvent',
        },
      });
    }

    return res.status(201).json({
      status: 'success',
      message: 'Category created successfully!',
      data: newCategory,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update Existing Category
 * Handles PUT /api/categories/:id (Protected Route)
 */
exports.updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, type } = req.body;

    const catId = parseInt(id, 10);
    if (isNaN(catId)) {
      return res.status(400).json({ status: 'fail', message: 'Invalid category ID.' });
    }

    const existingCat = await prisma.category.findFirst({
      where: { id: catId, deletedAt: null },
    });
    if (!existingCat) {
      return res.status(404).json({ status: 'fail', message: 'Category not found or deleted.' });
    }

    const updateData = {};
    if (type) updateData.type = type;

    if (name && name.trim()) {
      const trimmedName = name.trim();
      const newSlug = trimmedName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      // Check name uniqueness if changed
      if (trimmedName.toLowerCase() !== existingCat.name.toLowerCase()) {
        const nameDuplicate = await prisma.category.findFirst({
          where: {
            deletedAt: null,
            name: { equals: trimmedName, mode: 'insensitive' },
            id: { not: catId },
          },
        });
        if (nameDuplicate) {
          return res.status(400).json({
            status: 'fail',
            message: `Category "${trimmedName}" already exists.`,
          });
        }
      }

      updateData.name = trimmedName;
      updateData.slug = newSlug;

      // Also update existing NewsEvents using old category name to new category name
      await prisma.newsEvent.updateMany({
        where: { category: existingCat.name, deletedAt: null },
        data: { category: trimmedName },
      });
    }

    const updatedCategory = await prisma.category.update({
      where: { id: catId },
      data: updateData,
    });

    return res.status(200).json({
      status: 'success',
      message: 'Category updated successfully!',
      data: updatedCategory,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Soft Delete Category
 * Handles DELETE /api/categories/:id (Protected Route)
 */
exports.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const catId = parseInt(id, 10);

    if (isNaN(catId)) {
      return res.status(400).json({ status: 'fail', message: 'Invalid category ID.' });
    }

    const category = await prisma.category.findFirst({
      where: { id: catId, deletedAt: null },
    });
    if (!category) {
      return res.status(404).json({ status: 'fail', message: 'Category not found or already deleted.' });
    }

    // Perform SOFT DELETE (preserve data in database)
    await prisma.category.update({
      where: { id: catId },
      data: { deletedAt: new Date() },
    });

    return res.status(200).json({
      status: 'success',
      message: 'Category soft deleted successfully!',
    });
  } catch (error) {
    next(error);
  }
};
