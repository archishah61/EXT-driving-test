// routes/index.js
const express = require('express');
const router = express.Router();
const questionRouter = require('./questionRoutes');
const quizRouter = require('./quizRoutes');
const categoryRouter = require('./categoryRoutes');
const testRouter = require('./testRoutes');

router.get('/', (req, res) => {
  res.json({ message: 'Driving Test Practice API' });
});

router.use('/questions', questionRouter);
router.use('/quiz', quizRouter);
router.use('/categories', categoryRouter);
router.use('/test', testRouter);

module.exports = router;