const multer = require('multer');
const path = require('path');
const fs = require('fs');

/* ─── Storage Config ─────────────────────── */
const pdfStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(process.cwd(), 'public', 'uploads', 'pdfs');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    const ext = path.extname(file.originalname);
    cb(null, `pdf-${uniqueSuffix}${ext}`);
  },
});

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(process.cwd(), 'public', 'uploads', 'images');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    const ext = path.extname(file.originalname);
    cb(null, `img-${uniqueSuffix}${ext}`);
  },
});

const uploadPdf = multer({
  storage: pdfStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed.'));
    }
  },
}).single('file');

const uploadImage = multer({
  storage: imageStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed.'));
    }
  },
}).single('file');

/* ─── Upload PDF Controller ──────────────── */
exports.uploadPdfFile = (req, res) => {
  uploadPdf(req, res, (err) => {
    if (err) {
      return res.status(400).json({ status: 'fail', message: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ status: 'fail', message: 'No PDF file provided.' });
    }

    const fileUrl = `/uploads/pdfs/${req.file.filename}`;
    return res.status(200).json({
      status: 'success',
      url: fileUrl,
      filename: req.file.originalname,
      size: req.file.size,
    });
  });
};

/* ─── Upload Image Controller ────────────── */
exports.uploadImageFile = (req, res) => {
  uploadImage(req, res, (err) => {
    if (err) {
      return res.status(400).json({ status: 'fail', message: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ status: 'fail', message: 'No image file provided.' });
    }

    const fileUrl = `/uploads/images/${req.file.filename}`;
    return res.status(200).json({
      status: 'success',
      url: fileUrl,
      filename: req.file.originalname,
      size: req.file.size,
    });
  });
};
