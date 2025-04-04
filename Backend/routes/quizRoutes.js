// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.post('/start', quizController.startQuiz);
router.post('/answer', quizController.submitAnswer);
router.post('/complete', quizController.completeQuiz);

module.exports = router;