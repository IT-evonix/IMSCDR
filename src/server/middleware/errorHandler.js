// Centralized Global Error Handling Middleware for Express
module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';
  const message = err.message || 'Internal Server Error';

  if (process.env.NODE_ENV !== 'production' || statusCode === 500) {
    console.error(`[API Error ${statusCode}]:`, err.stack || err);
  }

  return res.status(statusCode).json({
    status,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
