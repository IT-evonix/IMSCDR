const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const newsEventRoutes = require('./newsEventRoutes');
const uploadRoutes = require('./uploadRoutes');
const categoryRoutes = require('./categoryRoutes');
const contactRoutes = require('./contactRoutes');

// Auth API Routes (/api/auth)
router.use('/auth', authRoutes);

// News & Events API Routes (/api/news-events)
router.use('/news-events', newsEventRoutes);

// File Upload Routes (/api/upload)
router.use('/upload', uploadRoutes);

// Category API Routes (/api/categories)
router.use('/categories', categoryRoutes);

// Contact Messages API Routes (/api/contact)
router.use('/contact', contactRoutes);

// Health Check API Route
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'IMSCDR Node.js Express API is running successfully',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
