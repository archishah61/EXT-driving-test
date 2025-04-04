// routes/index.js
const express = require('express');
const router = express.Router();
const testRouter = require('./testRoutes');

router.get('/', (req, res) => {
  res.json({ message: 'Driving Test Practice API' });
});

router.use('/test', testRouter);

module.exports = router;