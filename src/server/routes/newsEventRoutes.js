const express = require('express');
const router = express.Router();
const newsEventController = require('../controllers/newsEventController');
const { protect } = require('../middleware/authMiddleware');

// Public Routes
router.get('/', newsEventController.getAllNewsEvents);
router.get('/export', protect, newsEventController.exportNewsEvents);
router.get('/:id', newsEventController.getNewsEventById);

// Protected Admin Routes
router.post('/', protect, newsEventController.createNewsEvent);
router.put('/:id', protect, newsEventController.updateNewsEvent);
router.delete('/:id', protect, newsEventController.deleteNewsEvent);

module.exports = router;
