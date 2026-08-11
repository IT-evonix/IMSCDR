const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

// Public Route: Submit Contact Us Enquiry
router.post('/', contactController.submitContactForm);

// Protected Admin Routes
router.get('/', protect, contactController.getAllContactMessages);
router.get('/export', protect, contactController.exportContactMessages);
router.patch('/:id/status', protect, contactController.updateContactStatus);
router.delete('/:id', protect, contactController.deleteContactMessage);

module.exports = router;
