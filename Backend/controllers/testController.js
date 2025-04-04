const { Test } = require('../models');
const APIError = require('../utils/APIError');

// Create a Test
exports.createTest = async (req, res, next) => {
  try {
    const newTest = await Test.create(req.body);
    res.status(201).json(newTest);
  } catch (error) {
    next(error);
  }
};

// Get all Tests
exports.getAllTests = async (req, res, next) => {
  try {
    const tests = await Test.findAll();
    res.json(tests);
  } catch (error) {
    next(error);
  }
};

// Get Test by ID
exports.getTestById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const test = await Test.findByPk(id);

    if (!test) {
      throw new APIError('Test not found', 404);
    }

    res.json(test);
  } catch (error) {
    next(error);
  }
};

// Update Test by ID
exports.updateTestById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const test = await Test.findByPk(id);

    if (!test) {
      throw new APIError('Test not found', 404);
    }

    await test.update(req.body);
    res.json(test);
  } catch (error) {
    next(error);
  }
};

// Delete Test by ID
exports.deleteTestById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const test = await Test.findByPk(id);

    if (!test) {
      throw new APIError('Test not found', 404);
    }

    await test.destroy();
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
