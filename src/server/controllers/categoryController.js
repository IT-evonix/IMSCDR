const prisma = require('../config/db');

/**
 * Get All Categories (Supports search and type filters)
 * Handles GET /api/categories
 */
exports.getAllCategories = async (req, res, next) => {
  try {
    const { search, type } = req.query;

    const whereConditions = [];
    if (type && type !== 'All') {
      whereConditions.push({
        OR: [{ type: type }, { type: 'NewsEvent' }],
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

    const where = whereConditions.length > 0 ? { AND: whereConditions } : {};

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

    // Check if category already exists
    const existing = await prisma.category.findFirst({
      where: {
        OR: [{ name: { equals: trimmedName, mode: 'insensitive' } }, { slug }],
      },
    });

    if (existing) {
      return res.status(400).json({
        status: 'fail',
        message: `Category "${trimmedName}" already exists.`,
      });
    }

    // Create Category in PostgreSQL
    const newCategory = await prisma.category.create({
      data: {
        name: trimmedName,
        slug,
        type: type || 'NewsEvent',
      },
    });

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

    const existingCat = await prisma.category.findUnique({ where: { id: catId } });
    if (!existingCat) {
      return res.status(404).json({ status: 'fail', message: 'Category not found.' });
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
        where: { category: existingCat.name },
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
 * Delete Category
 * Handles DELETE /api/categories/:id (Protected Route)
 */
exports.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const catId = parseInt(id, 10);

    if (isNaN(catId)) {
      return res.status(400).json({ status: 'fail', message: 'Invalid category ID.' });
    }

    const category = await prisma.category.findUnique({ where: { id: catId } });
    if (!category) {
      return res.status(404).json({ status: 'fail', message: 'Category not found.' });
    }

    // Delete category from PostgreSQL database
    await prisma.category.delete({
      where: { id: catId },
    });

    return res.status(200).json({
      status: 'success',
      message: 'Category deleted successfully!',
    });
  } catch (error) {
    next(error);
  }
};
