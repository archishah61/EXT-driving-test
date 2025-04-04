const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');
const { validateTest } = require('../middleware/validation'); // Optional if you implement this

// Public route
router.get('/', testController.getAllTests);
router.get('/:id', testController.getTestById);

// Protected routes (add auth middleware as needed)
router.post('/', validateTest, testController.createTest);
router.put('/:id', validateTest, testController.updateTestById);
router.delete('/:id', testController.deleteTestById);

module.exports = router;
