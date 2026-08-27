const express = require('express');
const router = express.Router();
const { uploadPdfFile, uploadImageFile } = require('../controllers/uploadController');
const { protect } = require('../middleware/authMiddleware');

// POST /api/upload/pdf  — Upload a PDF, returns permanent URL
router.post('/pdf', protect, uploadPdfFile);

// POST /api/upload/image — Upload an image, returns permanent URL
router.post('/image', protect, uploadImageFile);

module.exports = router;
