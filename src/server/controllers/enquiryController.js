const prisma = require('../config/db');
const { generateCsv } = require('../utils/exportHelper');
const { verifyRecaptcha } = require('../utils/recaptchaHelper');

// --------------------------------------------------------------------------
// 1. Submit Admission Enquiry Form (Public API with reCAPTCHA)
// --------------------------------------------------------------------------
exports.submitEnquiry = async (req, res, next) => {
  try {
    const { name, email, phone, course, address, message, recaptchaToken } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Candidate Name is required.' });
    }
    if (!email || !email.trim() || !email.includes('@')) {
      return res.status(400).json({ status: 'fail', message: 'Valid Email Address is required.' });
    }
    if (!phone || !phone.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Contact / Phone Number is required.' });
    }
    if (!course || !course.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Please select a program / course.' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Enquiry message is required.' });
    }

    // Google reCAPTCHA Verification (if token is provided or enforced)
    if (recaptchaToken) {
      const isCaptchaValid = await verifyRecaptcha(recaptchaToken);
      if (!isCaptchaValid && process.env.NODE_ENV === 'production') {
        return res.status(400).json({
          status: 'fail',
          message: 'Google reCAPTCHA verification failed. Please try again.',
        });
      }
    }

    const savedData = await prisma.enquiry.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        course: course.trim(),
        address: address ? address.trim() : null,
        message: message.trim(),
      },
    });

    return res.status(201).json({
      status: 'success',
      message: 'Thank you! Your admission enquiry has been submitted successfully.',
      data: savedData,
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------
// 2. Get All Enquiries (Admin Protected — Clean & Simple, No Status)
// --------------------------------------------------------------------------
exports.getAllEnquiries = async (req, res, next) => {
  try {
    const { search, course, startDate, endDate, page = 1, limit = 10 } = req.query;

    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 10;
    const skip = (pageNum - 1) * limitNum;

    const where = {
      deletedAt: null,
    };

    if (course && course !== 'All') {
      where.course = course;
    }

    if (search && search.trim()) {
      const q = search.trim();
      where.OR = [
        { name: { contains: q, mode: 'insensitive' } },
        { email: { contains: q, mode: 'insensitive' } },
        { phone: { contains: q, mode: 'insensitive' } },
        { course: { contains: q, mode: 'insensitive' } },
        { address: { contains: q, mode: 'insensitive' } },
        { message: { contains: q, mode: 'insensitive' } },
      ];
    }

    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(`${endDate}T23:59:59.999Z`);
    }

    const [items, totalItems] = await Promise.all([
      prisma.enquiry.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limitNum,
      }),
      prisma.enquiry.count({ where }),
    ]);

    const totalPages = Math.ceil(totalItems / limitNum) || 1;

    return res.status(200).json({
      status: 'success',
      data: items,
      totalItems,
      totalPages,
      currentPage: pageNum,
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------
// 3. Soft Delete Enquiry (Admin Protected)
// --------------------------------------------------------------------------
exports.deleteEnquiry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const enquiryId = parseInt(id, 10);

    if (isNaN(enquiryId)) {
      return res.status(400).json({ status: 'fail', message: 'Invalid enquiry ID.' });
    }

    const existing = await prisma.enquiry.findFirst({
      where: { id: enquiryId, deletedAt: null },
    });

    if (!existing) {
      return res.status(404).json({
        status: 'fail',
        message: 'Enquiry record not found or already deleted.',
      });
    }

    await prisma.enquiry.update({
      where: { id: enquiryId },
      data: { deletedAt: new Date() },
    });

    return res.status(200).json({
      status: 'success',
      message: 'Enquiry record soft deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------
// 4. Export Enquiries as CSV (Admin Protected)
// --------------------------------------------------------------------------
exports.exportEnquiriesCsv = async (req, res, next) => {
  try {
    const { search, course } = req.query;

    const where = { deletedAt: null };

    if (course && course !== 'All') {
      where.course = course;
    }

    if (search && search.trim()) {
      const q = search.trim();
      where.OR = [
        { name: { contains: q, mode: 'insensitive' } },
        { email: { contains: q, mode: 'insensitive' } },
        { phone: { contains: q, mode: 'insensitive' } },
        { course: { contains: q, mode: 'insensitive' } },
        { address: { contains: q, mode: 'insensitive' } },
        { message: { contains: q, mode: 'insensitive' } },
      ];
    }

    const records = await prisma.enquiry.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    const columns = [
      { label: 'Sr.', key: (r) => r.id },
      { label: 'Candidate Name', key: 'name' },
      { label: 'Email Address', key: 'email' },
      { label: 'Phone Number', key: 'phone' },
      { label: 'Applied Course', key: 'course' },
      { label: 'Address / City', key: (r) => r.address || 'N/A' },
      { label: 'Enquiry Message', key: 'message' },
      {
        label: 'Received Date',
        key: (r) => new Date(r.createdAt).toLocaleString('en-US'),
      },
    ];

    const csvData = generateCsv(records, columns);
    const today = new Date().toISOString().split('T')[0];
    const filename = `IMSCDR_Admission_Enquiries_${today}.csv`;

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    return res.status(200).send(csvData);
  } catch (error) {
    next(error);
  }
};
