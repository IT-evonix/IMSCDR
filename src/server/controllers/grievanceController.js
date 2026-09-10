const prisma = require('../config/db');
const { generateCsv } = require('../utils/exportHelper');
const { verifyRecaptcha } = require('../utils/recaptchaHelper');

// --------------------------------------------------------------------------
// 1. Submit Grievance Form (Public API with reCAPTCHA)
// --------------------------------------------------------------------------
exports.submitGrievance = async (req, res, next) => {
  try {
    const {
      name,
      mobile,
      email,
      course,
      complaintShort,
      complaintDetail,
      recaptchaToken,
    } = req.body;

    // Field Validations
    if (!name || !name.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Name is required.' });
    }
    if (!mobile || !mobile.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Mobile Number is required.' });
    }
    if (!email || !email.trim() || !email.includes('@')) {
      return res.status(400).json({ status: 'fail', message: 'Valid Email Address is required.' });
    }
    if (!course || !course.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Course Name is required.' });
    }
    if (!complaintShort || !complaintShort.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Complaint in short is required.' });
    }
    if (!complaintDetail || !complaintDetail.trim()) {
      return res.status(400).json({ status: 'fail', message: 'Detailed complaint description is required.' });
    }

    // Google reCAPTCHA Verification (using shared helper)
    if (recaptchaToken) {
      const isCaptchaValid = await verifyRecaptcha(recaptchaToken);
      if (!isCaptchaValid && process.env.NODE_ENV === 'production') {
        return res.status(400).json({
          status: 'fail',
          message: 'Google reCAPTCHA verification failed. Please try again.',
        });
      }
    }

    // Save Grievance in Database
    const savedData = await prisma.grievance.create({
      data: {
        name: name.trim(),
        mobile: mobile.trim(),
        email: email.trim().toLowerCase(),
        course: course.trim(),
        complaintShort: complaintShort.trim(),
        complaintDetail: complaintDetail.trim(),
        status: 'Pending',
      },
    });

    return res.status(201).json({
      status: 'success',
      message: 'Your grievance has been submitted successfully. The Grievance Redressal Committee will review it soon.',
      data: savedData,
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------
// 2. Get All Grievances (Admin Protected with Filters & Pagination)
// --------------------------------------------------------------------------
exports.getAllGrievances = async (req, res, next) => {
  try {
    const {
      search,
      course,
      status,
      startDate,
      endDate,
      page = 1,
      limit = 10,
    } = req.query;

    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 10;
    const skip = (pageNum - 1) * limitNum;

    const where = {
      deletedAt: null,
    };

    if (course && course !== 'All') {
      where.course = course;
    }

    if (status && status !== 'All') {
      where.status = status;
    }

    if (search && search.trim()) {
      const q = search.trim();
      where.OR = [
        { name: { contains: q, mode: 'insensitive' } },
        { mobile: { contains: q, mode: 'insensitive' } },
        { email: { contains: q, mode: 'insensitive' } },
        { course: { contains: q, mode: 'insensitive' } },
        { complaintShort: { contains: q, mode: 'insensitive' } },
        { complaintDetail: { contains: q, mode: 'insensitive' } },
      ];
    }

    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(`${endDate}T23:59:59.999Z`);
    }

    const [items, totalItems] = await Promise.all([
      prisma.grievance.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limitNum,
      }),
      prisma.grievance.count({ where }),
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
// 3. Get Single Grievance by ID (Admin Protected)
// --------------------------------------------------------------------------
exports.getGrievanceById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const grievanceId = parseInt(id, 10);

    if (isNaN(grievanceId)) {
      return res.status(400).json({ status: 'fail', message: 'Invalid grievance ID.' });
    }

    const record = await prisma.grievance.findFirst({
      where: { id: grievanceId, deletedAt: null },
    });

    if (!record) {
      return res.status(404).json({ status: 'fail', message: 'Grievance record not found.' });
    }

    return res.status(200).json({
      status: 'success',
      data: record,
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------
// 4. Update Grievance Status & Remark (Admin Protected)
// --------------------------------------------------------------------------
exports.updateGrievanceStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, resolutionRemark } = req.body;
    const grievanceId = parseInt(id, 10);

    if (isNaN(grievanceId)) {
      return res.status(400).json({ status: 'fail', message: 'Invalid grievance ID.' });
    }

    const existing = await prisma.grievance.findFirst({
      where: { id: grievanceId, deletedAt: null },
    });

    if (!existing) {
      return res.status(404).json({ status: 'fail', message: 'Grievance record not found.' });
    }

    const updateData = {};
    if (status) updateData.status = status;
    if (resolutionRemark !== undefined) updateData.resolutionRemark = resolutionRemark;

    const updated = await prisma.grievance.update({
      where: { id: grievanceId },
      data: updateData,
    });

    return res.status(200).json({
      status: 'success',
      message: 'Grievance status updated successfully.',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------
// 5. Soft Delete Grievance (Admin Protected)
// --------------------------------------------------------------------------
exports.deleteGrievance = async (req, res, next) => {
  try {
    const { id } = req.params;
    const grievanceId = parseInt(id, 10);

    if (isNaN(grievanceId)) {
      return res.status(400).json({ status: 'fail', message: 'Invalid grievance ID.' });
    }

    const existing = await prisma.grievance.findFirst({
      where: { id: grievanceId, deletedAt: null },
    });

    if (!existing) {
      return res.status(404).json({
        status: 'fail',
        message: 'Grievance record not found or already deleted.',
      });
    }

    await prisma.grievance.update({
      where: { id: grievanceId },
      data: { deletedAt: new Date() },
    });

    return res.status(200).json({
      status: 'success',
      message: 'Grievance record soft deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------
// 6. Export Grievances as CSV (Admin Protected)
// --------------------------------------------------------------------------
exports.exportGrievancesCsv = async (req, res, next) => {
  try {
    const { search, course, status } = req.query;

    const where = { deletedAt: null };

    if (course && course !== 'All') {
      where.course = course;
    }

    if (status && status !== 'All') {
      where.status = status;
    }

    if (search && search.trim()) {
      const q = search.trim();
      where.OR = [
        { name: { contains: q, mode: 'insensitive' } },
        { mobile: { contains: q, mode: 'insensitive' } },
        { email: { contains: q, mode: 'insensitive' } },
        { course: { contains: q, mode: 'insensitive' } },
        { complaintShort: { contains: q, mode: 'insensitive' } },
        { complaintDetail: { contains: q, mode: 'insensitive' } },
      ];
    }

    const records = await prisma.grievance.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    const columns = [
      { label: 'Sr.', key: (r) => r.id },
      { label: 'Candidate Name', key: 'name' },
      { label: 'Mobile Number', key: 'mobile' },
      { label: 'Email Address', key: 'email' },
      { label: 'Course Name', key: 'course' },
      { label: 'Complaint in Short', key: 'complaintShort' },
      { label: 'Complaint in Detail', key: 'complaintDetail' },
      {
        label: 'Submitted Date',
        key: (r) => new Date(r.createdAt).toLocaleString('en-US'),
      },
    ];

    const csvData = generateCsv(records, columns);
    const today = new Date().toISOString().split('T')[0];
    const filename = `IMSCDR_Grievance_Complaints_${today}.csv`;

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    return res.status(200).send(csvData);
  } catch (error) {
    next(error);
  }
};
