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
    // Preserve the original filename, sanitizing invalid filesystem characters
    const parsed = path.parse(file.originalname);
    const cleanBaseName = parsed.name
      .replace(/[\\/:*?"<>|]/g, '')
      .trim() || 'document';
    const ext = (parsed.ext || '.pdf').toLowerCase();

    const dir = path.join(process.cwd(), 'public', 'uploads', 'pdfs');
    let finalName = `${cleanBaseName}${ext}`;

    // If file with exact same name exists, append counter e.g. Notice_1.pdf
    if (fs.existsSync(path.join(dir, finalName))) {
      let counter = 1;
      while (fs.existsSync(path.join(dir, `${cleanBaseName}_${counter}${ext}`))) {
        counter++;
      }
      finalName = `${cleanBaseName}_${counter}${ext}`;
    }

    cb(null, finalName);
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
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `img-${uniqueSuffix}${ext}`);
  },
});

const uploadPdf = multer({
  storage: pdfStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Strictly 10 MB limit
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const mime = (file.mimetype || '').toLowerCase();
    const isPdfMime = mime === 'application/pdf' || mime === 'application/x-pdf' || mime === 'application/octet-stream' || !mime;
    if (ext === '.pdf' && isPdfMime) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files (.pdf) are allowed.'));
    }
  },
}).single('file');

const uploadImage = multer({
  storage: imageStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Strictly 5 MB limit
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const mime = (file.mimetype || '').toLowerCase();
    const allowed = ['.png', '.jpg', '.jpeg', '.webp'];
    const allowedMimes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

    // 1. Strict extension check: MUST be .png, .jpg, .jpeg, or .webp (rejects .jfif, .svg, .gif, etc.)
    if (!allowed.includes(ext)) {
      return cb(
        new Error(
          `Only image files (.png, .jpg, .jpeg, .webp) are allowed. Format "${ext || 'unknown'}" is not supported.`
        )
      );
    }

    // 2. Strict MIME check: MIME type (if present) must match allowed formats
    if (mime && !allowedMimes.includes(mime) && mime !== 'application/octet-stream') {
      return cb(
        new Error(
          `Invalid image type (${mime}). Only PNG, JPG, JPEG, and WEBP formats are allowed.`
        )
      );
    }

    cb(null, true);
  },
}).single('file');

/* ─── Upload PDF Controller ──────────────── */
exports.uploadPdfFile = (req, res) => {
  uploadPdf(req, res, (err) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          status: 'fail',
          message: 'The selected PDF exceeds the maximum allowed size limit of 10MB. Please select a smaller PDF file.',
        });
      }
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
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          status: 'fail',
          message: 'The image exceeds the maximum allowed size limit of 5MB. Please choose a smaller image.',
        });
      }
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
