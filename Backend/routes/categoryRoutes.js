// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { validateCategory } = require('../middleware/validation');

router.get('/', categoryController.getAllCategories);

// Protected routes (add auth middleware in production)
router.post('/', validateCategory, categoryController.createCategory);
router.put('/:id', validateCategory, categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;