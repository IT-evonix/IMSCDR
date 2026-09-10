const express = require('express');
const router = express.Router();
const grievanceController = require('../controllers/grievanceController');
const { protect } = require('../middleware/authMiddleware');

// Public Route: Submit Grievance Redressal Form (with reCAPTCHA verification)
router.post('/', grievanceController.submitGrievance);

// Protected Admin Routes
router.get('/', protect, grievanceController.getAllGrievances);
router.get('/export', protect, grievanceController.exportGrievancesCsv);
router.get('/:id', protect, grievanceController.getGrievanceById);
router.patch('/:id/status', protect, grievanceController.updateGrievanceStatus);
router.delete('/:id', protect, grievanceController.deleteGrievance);

module.exports = router;
