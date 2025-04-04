const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

// Public route
router.get('/', testController.getAllTests);
router.get('/:id', testController.getTestById);

// Protected routes (add auth middleware as needed)
router.post('/',  testController.createTest);
router.put('/:id', testController.updateTestById);
router.delete('/:id', testController.deleteTestById);

module.exports = router;
