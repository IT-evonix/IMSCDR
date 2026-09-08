const prisma = require('../config/db');

/**
 * Get All Categories (Supports search and type filters - Soft deleted excluded)
 * Handles GET /api/categories
 */
exports.getAllCategories = async (req, res, next) => {
  try {
    const { search, type } = req.query;

    const whereConditions = [{ deletedAt: null }];
    if (type && type !== 'All') {
      whereConditions.push({
        OR: [
          { type: { equals: type, mode: 'insensitive' } },
          { type: { equals: 'NewsEvent', mode: 'insensitive' } },
        ],
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

    const categories = await prisma.category.findMany({
      where,
      orderBy: { name: 'asc' },
    });

    // Count associated news/events for each category
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

    return res.status(200).json({
      status: 'success',
      totalItems: categoriesWithCount.length,
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
