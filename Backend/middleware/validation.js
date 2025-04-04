// middleware/validation.js
const { check, validationResult } = require('express-validator');

const validateQuestion = [
  check('question_text').notEmpty().withMessage('Question text is required'),
  check('explanation').notEmpty().withMessage('Explanation is required'),
  check('category_id').isInt().withMessage('Valid category ID is required'),
  check('answers').isArray({ min: 2 }).withMessage('At least 2 answers are required'),
  check('answers.*.text').notEmpty().withMessage('Answer text is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateCategory = [
  check('name').notEmpty().withMessage('Category name is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateQuestion, validateCategory };