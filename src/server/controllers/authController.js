const prisma = require('../config/db');
const bcrypt = require('bcryptjs');
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  REFRESH_TOKEN_EXPIRES_DAYS,
} = require('../utils/jwt');

/**
 * Admin Login Controller with PostgreSQL Database Refresh Token Storage
 * Handles POST /api/auth/login
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide both email address and password',
      });
    }

    // Dynamic Database Query via Prisma Admin Model
    const admin = await prisma.admin.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!admin) {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid email address or password',
      });
    }

    // Verify Hashed Password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid email address or password',
      });
    }

    // Generate Access Token & Refresh Token
    const accessToken = generateAccessToken({ id: admin.id, email: admin.email, role: admin.role });
    const refreshToken = generateRefreshToken({ id: admin.id });

    // Calculate expiry date for Refresh Token
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + REFRESH_TOKEN_EXPIRES_DAYS);

    // Delete existing old refresh tokens for this admin (Prevent stale tokens)
    await prisma.refreshToken.deleteMany({
      where: { adminId: admin.id },
    });

    // Store New Refresh Token in PostgreSQL Database
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        adminId: admin.id,
        expiresAt,
      },
    });

    // Return Tokens & Admin payload
    return res.status(200).json({
      status: 'success',
      message: 'Login successful',
      accessToken,
      refreshToken,
      user: {
        id: admin.id,
        name: admin.name || 'Administrator',
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Refresh Access Token Controller
 * Handles POST /api/auth/refresh-token
 */
exports.refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        status: 'fail',
        message: 'Refresh token is required',
      });
    }

    // Check if Refresh Token exists in PostgreSQL Database
    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      include: { admin: true },
    });

    if (!storedToken) {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid or revoked refresh token. Please login again.',
      });
    }

    // Check if Refresh Token has expired
    if (new Date() > storedToken.expiresAt) {
      await prisma.refreshToken.delete({ where: { id: storedToken.id } });
      return res.status(401).json({
        status: 'fail',
        message: 'Refresh token has expired. Please login again.',
      });
    }

    // Verify JWT Signature
    let decoded;
    try {
      decoded = verifyRefreshToken(refreshToken);
    } catch (err) {
      await prisma.refreshToken.delete({ where: { id: storedToken.id } });
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid token signature',
      });
    }

    const admin = storedToken.admin;

    // Generate new Access Token & new Refresh Token (Token Rotation)
    const newAccessToken = generateAccessToken({ id: admin.id, email: admin.email, role: admin.role });
    const newRefreshToken = generateRefreshToken({ id: admin.id });

    const newExpiresAt = new Date();
    newExpiresAt.setDate(newExpiresAt.getDate() + REFRESH_TOKEN_EXPIRES_DAYS);

    // Delete old token and insert new rotated refresh token
    await prisma.$transaction([
      prisma.refreshToken.delete({ where: { id: storedToken.id } }),
      prisma.refreshToken.create({
        data: {
          token: newRefreshToken,
          adminId: admin.id,
          expiresAt: newExpiresAt,
        },
      }),
    ]);

    return res.status(200).json({
      status: 'success',
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Logout Controller (Revoke Refresh Token from Database)
 * Handles POST /api/auth/logout
 */
exports.logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (refreshToken) {
      await prisma.refreshToken.deleteMany({
        where: { token: refreshToken },
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Logged out successfully. Token revoked.',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get Current Logged-in User Profile Controller
 * Handles GET /api/auth/me (Protected Route)
 */
exports.getMe = async (req, res, next) => {
  try {
    return res.status(200).json({
      status: 'success',
      user: {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        createdAt: req.user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update Admin Password Controller
 * Handles PUT /api/auth/update-password (Protected Route)
 */
exports.updatePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide both current old password and new password.',
      });
    }

    if (oldPassword === newPassword) {
      return res.status(400).json({
        status: 'fail',
        message: 'New password cannot be the same as your current old password.',
      });
    }

    // Fetch logged in admin from DB
    const admin = await prisma.admin.findUnique({
      where: { id: req.user.id },
    });

    if (!admin) {
      return res.status(404).json({
        status: 'fail',
        message: 'Admin account not found.',
      });
    }

    // Verify current old password
    const isOldPasswordCorrect = await bcrypt.compare(oldPassword, admin.password);
    if (!isOldPasswordCorrect) {
      return res.status(400).json({
        status: 'fail',
        message: 'Current old password is incorrect. Please try again.',
      });
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update password in PostgreSQL DB
    await prisma.admin.update({
      where: { id: admin.id },
      data: { password: hashedNewPassword },
    });

    return res.status(200).json({
      status: 'success',
      message: 'Admin password updated successfully!',
    });
  } catch (error) {
    next(error);
  }
};
