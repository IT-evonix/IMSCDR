const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Public Auth Endpoints
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

// Protected Auth Endpoints
router.get('/me', protect, authController.getMe);
router.put('/update-password', protect, authController.updatePassword);

module.exports = router;
