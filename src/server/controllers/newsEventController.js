const prisma = require('../config/db');
const { generateCsv } = require('../utils/exportHelper');

// Default Thumbnail (matches static newsData fallback image)
const DEFAULT_IMSCDR_LOGO = '/images/news-and-events/newsandevents.webp';

/**
 * Create New News / Event / Blog Entry
 * Handles POST /api/news-events
 */
exports.createNewsEvent = async (req, res, next) => {
  try {
    const {
      title,
      contentType = 'News',
      category = '',
      startDate,
      endDate,
      summary,
      contentFormat = 'description',
      contentHtml,
      pdfUrl,
      externalUrl,
      images = [],
      status = 'Published',
    } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        status: 'fail',
        message: 'Title / Heading is required.',
      });
    }

    if (contentFormat === 'description' && (!contentHtml || !contentHtml.replace(/<[^>]*>/g, '').trim())) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please type full details / description text.',
      });
    }

    if (contentFormat === 'pdf' && !pdfUrl) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please upload a PDF notice file.',
      });
    }

    if (contentFormat === 'link' && (!externalUrl || !externalUrl.trim())) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please enter a valid external website URL.',
      });
    }

    // Generate unique slug
    let baseSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');

    if (!baseSlug) {
      baseSlug = `post-${Date.now()}`;
    }

    let uniqueSlug = baseSlug;
    const existingSlug = await prisma.newsEvent.findUnique({
      where: { slug: uniqueSlug },
    });

    if (existingSlug) {
      uniqueSlug = `${baseSlug}-${Date.now()}`;
    }

    // Determine Thumbnail Image URL:
    // If user uploaded images, use the first image as thumbnail.
    // If NO image uploaded (images array is empty), fallback to default IMSCDR Logo!
    let thumbnailUrl = DEFAULT_IMSCDR_LOGO;
    if (Array.isArray(images) && images.length > 0 && images[0]) {
      thumbnailUrl = images[0];
    }

    // Create NewsEvent in PostgreSQL
    const newEntry = await prisma.newsEvent.create({
      data: {
        title: title.trim(),
        slug: uniqueSlug,
        contentType,
        category: category ? category.trim() : '',
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        summary: summary ? summary.trim() : null,
        contentFormat,
        contentHtml: contentFormat === 'description' ? contentHtml : null,
        pdfUrl: contentFormat === 'pdf' ? pdfUrl : null,
        externalUrl: contentFormat === 'link' ? externalUrl : null,
        thumbnailUrl,
        images: Array.isArray(images) ? images : [],
        status,
        adminId: req.user ? req.user.id : null,
      },
    });

    return res.status(201).json({
      status: 'success',
      message: 'Content created successfully!',
      data: newEntry,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get All News & Events (Soft Deleted records excluded)
 * Handles GET /api/news-events
 */
exports.getAllNewsEvents = async (req, res, next) => {
  try {
    const { category, contentType, type, search, status, startDate, endDate, page = 1, limit = 10 } = req.query;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const MAX_LIMIT = 100;
    const limitNum = Math.min(Math.max(1, parseInt(limit, 10) || 10), MAX_LIMIT);
    const skip = (pageNum - 1) * limitNum;

    // Filter active (non-soft-deleted) items
    const where = {
      deletedAt: null,
    };

    if (category && category !== 'All') {
      where.category = category;
    }

    const selectedType = contentType || type;
    if (selectedType && selectedType !== 'All') {
      where.contentType = { equals: selectedType, mode: 'insensitive' };
    }

    if (status && status !== 'All') {
      const dbStatus = status === 'Active' ? 'Published' : status === 'Inactive' ? 'Draft' : status;
      where.status = dbStatus;
    }

    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(endDate);
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { summary: { contains: search, mode: 'insensitive' } },
        { category: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [totalItems, items] = await Promise.all([
      prisma.newsEvent.count({ where }),
      prisma.newsEvent.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { createdAt: 'desc' },
        include: {
          admin: {
            select: { id: true, name: true, email: true },
          },
        },
      }),
    ]);

    const totalPages = Math.ceil(totalItems / limitNum) || 1;

    return res.status(200).json({
      status: 'success',
      page: pageNum,
      limit: limitNum,
      totalItems,
      totalPages,
      results: items.length,
      data: items,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get Single News / Event by ID or Slug (Soft Deleted excluded)
 * Handles GET /api/news-events/:id
 */
exports.getNewsEventById = async (req, res, next) => {
  try {
    const { id } = req.params;

    let item;
    if (!isNaN(Number(id))) {
      item = await prisma.newsEvent.findFirst({
        where: { id: Number(id), deletedAt: null },
        include: { admin: { select: { id: true, name: true, email: true } } },
      });
    } else {
      item = await prisma.newsEvent.findFirst({
        where: { slug: id, deletedAt: null },
        include: { admin: { select: { id: true, name: true, email: true } } },
      });
    }

    if (!item) {
      return res.status(404).json({
        status: 'fail',
        message: 'Content item not found.',
      });
    }

    return res.status(200).json({
      status: 'success',
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update News / Event by ID
 * Handles PUT /api/news-events/:id
 */
exports.updateNewsEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      contentType,
      category,
      startDate,
      endDate,
      summary,
      contentFormat,
      contentHtml,
      pdfUrl,
      externalUrl,
      images,
      status,
    } = req.body;

    const existing = await prisma.newsEvent.findFirst({
      where: { id: Number(id), deletedAt: null },
    });

    if (!existing) {
      return res.status(404).json({
        status: 'fail',
        message: 'Content item not found or already deleted.',
      });
    }

    // Determine Thumbnail URL
    let thumbnailUrl = existing.thumbnailUrl;
    if (Array.isArray(images)) {
      if (images.length > 0 && images[0]) {
        thumbnailUrl = images[0];
      } else {
        thumbnailUrl = DEFAULT_IMSCDR_LOGO;
      }
    }

    const updatedEntry = await prisma.newsEvent.update({
      where: { id: Number(id) },
      data: {
        title: title ? title.trim() : existing.title,
        contentType: contentType || existing.contentType,
        category: category !== undefined ? (category ? category.trim() : '') : existing.category,
        startDate: startDate !== undefined ? (startDate ? new Date(startDate) : null) : existing.startDate,
        endDate: endDate !== undefined ? (endDate ? new Date(endDate) : null) : existing.endDate,
        summary: summary !== undefined ? (summary ? summary.trim() : null) : existing.summary,
        contentFormat: contentFormat || existing.contentFormat,
        contentHtml: (contentFormat || existing.contentFormat) === 'description' ? (contentHtml !== undefined ? contentHtml : existing.contentHtml) : null,
        pdfUrl: (contentFormat || existing.contentFormat) === 'pdf' ? (pdfUrl || existing.pdfUrl) : null,
        externalUrl: (contentFormat || existing.contentFormat) === 'link' ? (externalUrl || existing.externalUrl) : null,
        thumbnailUrl,
        images: Array.isArray(images) ? images : existing.images,
        status: status || existing.status,
      },
    });

    return res.status(200).json({
      status: 'success',
      message: 'Content updated successfully!',
      data: updatedEntry,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Soft Delete News / Event by ID
 * Handles DELETE /api/news-events/:id
 * Sets deletedAt timestamp & status to 'Archived' (SOFT DELETE)
 */
exports.deleteNewsEvent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existing = await prisma.newsEvent.findFirst({
      where: { id: Number(id), deletedAt: null },
    });

    if (!existing) {
      return res.status(404).json({
        status: 'fail',
        message: 'Item not found or already deleted.',
      });
    }

    // Perform SOFT DELETE
    await prisma.newsEvent.update({
      where: { id: Number(id) },
      data: {
        deletedAt: new Date(),
        status: 'Archived',
      },
    });

    return res.status(200).json({
      status: 'success',
      message: 'Item soft deleted (archived) successfully.',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Export News & Events to CSV Format
 * Handles GET /api/news-events/export
 */
exports.exportNewsEvents = async (req, res, next) => {
  try {
    const { category, contentType, search, status } = req.query;

    const where = { deletedAt: null };

    if (category && category !== 'All') where.category = category;
    if (contentType && contentType !== 'All') where.contentType = { equals: contentType, mode: 'insensitive' };
    if (status && status !== 'All') where.status = status === 'Active' ? 'Published' : status === 'Inactive' ? 'Draft' : status;

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { summary: { contains: search, mode: 'insensitive' } },
        { category: { contains: search, mode: 'insensitive' } },
      ];
    }

    const items = await prisma.newsEvent.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    const columns = [
      { label: 'ID', key: 'id' },
      { label: 'Title', key: 'title' },
      { label: 'Slug', key: 'slug' },
      { label: 'Type', key: 'contentType' },
      { label: 'Category', key: 'category' },
      { label: 'Format', key: 'contentFormat' },
      { label: 'Status', key: 'status' },
      { label: 'Start Date', key: (r) => r.startDate ? new Date(r.startDate).toLocaleDateString() : '' },
      { label: 'End Date', key: (r) => r.endDate ? new Date(r.endDate).toLocaleDateString() : '' },
      { label: 'Created At', key: (r) => new Date(r.createdAt).toLocaleString() },
    ];

    const csv = generateCsv(items, columns);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=news_events_${Date.now()}.csv`);
    return res.status(200).send(csv);
  } catch (error) {
    next(error);
  }
};
