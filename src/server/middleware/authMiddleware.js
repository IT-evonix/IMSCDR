const { verifyAccessToken } = require('../utils/jwt');
const prisma = require('../config/db');

/**
 * Authentication & JWT Authorization Middleware
 * Protects private API routes
 */
const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'You are not logged in. Please provide a valid Bearer token.',
      });
    }

    // Verify access token
    const decoded = verifyAccessToken(token);

    // Check if admin still exists in DB
    const currentAdmin = await prisma.admin.findUnique({
      where: { id: decoded.id },
    });

    if (!currentAdmin) {
      return res.status(401).json({
        status: 'fail',
        message: 'The admin belonging to this token no longer exists.',
      });
    }

    // Grant access to protected route & attach user to request
    req.user = currentAdmin;
    next();
  } catch (error) {
    return res.status(401).json({
      status: 'fail',
      message: 'Invalid or expired token. Please log in again.',
    });
  }
};

module.exports = {
  protect,
};
