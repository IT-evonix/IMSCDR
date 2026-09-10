const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');
const { protect } = require('../middleware/authMiddleware');

// Public Route: Submit Admission Enquiry (with reCAPTCHA verification)
router.post('/', enquiryController.submitEnquiry);

// Protected Admin Routes (Clean & simple, no status)
router.get('/', protect, enquiryController.getAllEnquiries);
router.get('/export', protect, enquiryController.exportEnquiriesCsv);
router.delete('/:id', protect, enquiryController.deleteEnquiry);

module.exports = router;
