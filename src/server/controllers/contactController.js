const prisma = require('../config/db');
const { generateCsv } = require('../utils/exportHelper');
const contactExcelService = require('../services/contactExcelService');

// Submit Contact Us Form (Public API for website visitors)
exports.submitContactForm = async (req, res, next) => {
  try {
    const { firstName, lastName, email, mobile, subject, message } = req.body;

    if (!firstName || !firstName.trim()) {
      return res.status(400).json({ status: 'fail', message: 'First Name is required.' });
    }
    if (!lastName || !lastName.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Last Name is required.' });
    }
    if (!email || !email.trim() || !email.includes('@')) {
      return res.status(400).json({ status: 'fail', message: 'Valid Email Address is required.' });
    }
    if (!mobile || !mobile.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Mobile Number is required.' });
    }
    if (!subject || !subject.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Subject is required.' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Message content is required.' });
    }

    const storageMode = process.env.CONTACT_STORAGE_MODE || 'excel';
    let savedData;

    if (storageMode === 'database') {
      try {
        savedData = await prisma.contactMessage.create({
          data: {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim().toLowerCase(),
            mobile: mobile.trim(),
            subject: subject.trim(),
            message: message.trim(),
            status: 'Unread',
          },
        });
      } catch (dbErr) {
        console.warn('Database unreachable. Falling back to Excel storage:', dbErr.message);
        savedData = contactExcelService.appendContactToExcel({
          firstName,
          lastName,
          email,
          mobile,
          subject,
          message,
        });
      }
    } else {
      // Excel Storage Mode (Default when PostgreSQL is not ready)
      savedData = contactExcelService.appendContactToExcel({
        firstName,
        lastName,
        email,
        mobile,
        subject,
        message,
      });
    }

    return res.status(201).json({
      status: 'success',
      message: 'Your message has been submitted successfully. Our team will contact you soon!',
      data: savedData,
    });
  } catch (error) {
    next(error);
  }
};

// Download Contact Enquiries File
exports.downloadContactsCsv = (req, res, next) => {
  try {
    const csvData = contactExcelService.getContactsAsCsv();
    const today = new Date().toISOString().split('T')[0];
    const filename = `IMSCDR_Contact_Enquiries_${today}.csv`;

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    return res.status(200).send(csvData);
  } catch (error) {
    next(error);
  }
};

// Get All Contact Messages (Admin Protected Route)
exports.getAllContactMessages = async (req, res, next) => {
  try {
    const { search, status, startDate, endDate, page = 1, limit = 10 } = req.query;

    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 10;
    const skip = (pageNum - 1) * limitNum;

    const where = {};

    if (status && status !== 'All') {
      where.status = status;
    }

    if (search && search.trim()) {
      const q = search.trim();
      where.OR = [
        { firstName: { contains: q, mode: 'insensitive' } },
        { lastName: { contains: q, mode: 'insensitive' } },
        { email: { contains: q, mode: 'insensitive' } },
        { mobile: { contains: q, mode: 'insensitive' } },
        { subject: { contains: q, mode: 'insensitive' } },
        { message: { contains: q, mode: 'insensitive' } },
      ];
    }

    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(`${endDate}T23:59:59.999Z`);
    }

    const [items, totalItems, unreadCount] = await Promise.all([
      prisma.contactMessage.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limitNum,
      }),
      prisma.contactMessage.count({ where }),
      prisma.contactMessage.count({ where: { status: 'Unread' } }),
    ]);

    const totalPages = Math.ceil(totalItems / limitNum) || 1;

    return res.status(200).json({
      status: 'success',
      data: items,
      totalItems,
      totalPages,
      currentPage: pageNum,
      unreadCount,
    });
  } catch (error) {
    next(error);
  }
};

// Update Contact Message Status (Admin Protected Route)
exports.updateContactStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['Unread', 'Read', 'Replied'];
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({
        status: 'fail',
        message: `Invalid status. Allowed values: ${validStatuses.join(', ')}`,
      });
    }

    const updated = await prisma.contactMessage.update({
      where: { id: parseInt(id, 10) },
      data: { status },
    });

    return res.status(200).json({
      status: 'success',
      message: `Message status updated to ${status}`,
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Contact Message (Admin Protected Route)
exports.deleteContactMessage = async (req, res, next) => {
  try {
    const { id } = req.params;

    await prisma.contactMessage.delete({
      where: { id: parseInt(id, 10) },
    });

    return res.status(200).json({
      status: 'success',
      message: 'Contact message deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};

// Export Contact Messages to CSV/Excel Format (Admin Protected Route)
exports.exportContactMessages = async (req, res, next) => {
  try {
    const { search, startDate, endDate } = req.query;

    const where = {};

    if (search && search.trim()) {
      const q = search.trim();
      where.OR = [
        { firstName: { contains: q, mode: 'insensitive' } },
        { lastName: { contains: q, mode: 'insensitive' } },
        { email: { contains: q, mode: 'insensitive' } },
        { mobile: { contains: q, mode: 'insensitive' } },
        { subject: { contains: q, mode: 'insensitive' } },
        { message: { contains: q, mode: 'insensitive' } },
      ];
    }

    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(`${endDate}T23:59:59.999Z`);
    }

    const messages = await prisma.contactMessage.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    const columns = [
      { label: 'ID', key: 'id' },
      { label: 'First Name', key: 'firstName' },
      { label: 'Last Name', key: 'lastName' },
      { label: 'Email', key: 'email' },
      { label: 'Mobile', key: 'mobile' },
      { label: 'Subject', key: 'subject' },
      { label: 'Message', key: 'message' },
      { label: 'Received Date', key: (row) => new Date(row.createdAt).toLocaleString() },
    ];

    const csv = generateCsv(messages, columns);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=contact_enquiries_${Date.now()}.csv`);
    return res.status(200).send(csv);
  } catch (error) {
    next(error);
  }
};
