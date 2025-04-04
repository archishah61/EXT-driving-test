// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const upload = require('../config/multerConfig');
const { validateQuestion } = require('../middleware/validation');

router.get('/', questionController.getAllQuestions);
router.get('/random', questionController.getRandomQuestions);

// Protected routes (add auth middleware in production)
router.post('/', upload.single('image'), validateQuestion, questionController.createQuestion);
router.put('/:id', upload.single('image'), validateQuestion, questionController.updateQuestion);
router.delete('/:id', questionController.deleteQuestion);

module.exports = router;