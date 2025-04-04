// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    if (err instanceof multer.MulterError) {
      return res.status(400).json({
        error: 'File upload error',
        message: err.message
      });
    }
  
    const statusCode = err.statusCode || 500;
    const message = err.isOperational ? err.message : 'An unexpected error occurred';
  
    res.status(statusCode).json({
      error: message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
  };
  
  module.exports = errorHandler;