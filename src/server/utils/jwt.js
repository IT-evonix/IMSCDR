const jwt = require('jsonwebtoken');

const JWT_ACCESS_SECRET = process.env.JWT_SECRET || 'imscdr_prod_sec_key_9f83a21b8c4d7e6f501a2b3c4d5e6f7a8b9c0d1e2f';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'imscdr_prod_refresh_sec_key_7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b';

const ACCESS_TOKEN_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';
const REFRESH_TOKEN_EXPIRES_DAYS = 7;

/**
 * Generate Access Token (Short-lived / 24h admin session)
 */
const generateAccessToken = (payload) => {
  return jwt.sign(payload, JWT_ACCESS_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });
};

/**
 * Generate Refresh Token (Long-lived / 7d)
 */
const generateRefreshToken = (payload) => {
  return jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: `${REFRESH_TOKEN_EXPIRES_DAYS}d`,
  });
};

/**
 * Verify Access Token
 */
const verifyAccessToken = (token) => {
  return jwt.verify(token, JWT_ACCESS_SECRET);
};

/**
 * Verify Refresh Token
 */
const verifyRefreshToken = (token) => {
  return jwt.verify(token, JWT_REFRESH_SECRET);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  REFRESH_TOKEN_EXPIRES_DAYS,
};
