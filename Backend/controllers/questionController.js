// controllers/questionController.js
const {Answer } = require('../models');
const { Question } = require('../models');
const { Category } = require('../models');
const { Op } = require('sequelize');
const { sequelize } = require('../models');
const APIError = require('../utils/APIError');

exports.getAllQuestions = async (req, res, next) => {
  try {
    const questions = await Question.findAll({
      where: { status: 'active' },
      include: [
        { model: Answer, where: { status: 'active' }, required: false , as: 'answers' },
        { model: Category , as: 'category'}
      ],
      order: [['created_at', 'DESC']]
    });
    res.json(questions);
  } catch (error) {
    next(error);
  }
};

exports.getRandomQuestions = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 15;
    const categoryId = req.query.categoryId;

    const whereClause = { status: 'active' };
    if (categoryId) whereClause.category_id = categoryId;

    const questions = await Question.findAll({
      where: whereClause,
      order: sequelize.random(),
      limit: limit,
      include: [
        { 
          model: Answer,
          where: { status: 'active' },
          required: true,
          as: 'answers'
        },
        { model: Category , as: 'category' }
      ]
    });

    if (!questions.length) {
      throw new APIError('No questions found', 404);
    }

    res.json(questions);
  } catch (error) {
    next(error);
  }
};

exports.createQuestion = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const { question_text, explanation, category_id, answers } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;

    const question = await Question.create({
      question_text,
      explanation,
      category_id,
      image_url,
      created_by: req.user?.id || null
    }, { transaction });

    // Create answers
    const answerPromises = answers.map(answer => {
      return Answer.create({
        question_id: question.id,
        answer_text: answer.text,
        is_correct: answer.is_correct,
        created_by: req.user?.id || null
      }, { transaction });
    });

    await Promise.all(answerPromises);
    await transaction.commit();

    const newQuestion = await Question.findByPk(question.id, {
      include: [Answer, Category]
    });

    res.status(201).json(newQuestion);
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
};

exports.updateQuestion = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const { id } = req.params;
    const { question_text, explanation, category_id, answers } = req.body;
    
    const question = await Question.findByPk(id, { transaction });
    if (!question) {
      throw new APIError('Question not found', 404);
    }

    if (req.file) {
      question.image_url = `/uploads/${req.file.filename}`;
    }

    question.question_text = question_text || question.question_text;
    question.explanation = explanation || question.explanation;
    question.category_id = category_id || question.category_id;
    question.updated_by = req.user?.id || null;

    await question.save({ transaction });

    // Update answers
    if (answers && Array.isArray(answers)) {
      await Answer.destroy({ where: { question_id: id }, transaction });
      
      const answerPromises = answers.map(answer => {
        return Answer.create({
          question_id: id,
          answer_text: answer.text,
          is_correct: answer.is_correct,
          created_by: req.user?.id || null
        }, { transaction });
      });

      await Promise.all(answerPromises);
    }

    await transaction.commit();

    const updatedQuestion = await Question.findByPk(id, {
      include: [Answer, Category]
    });

    res.json(updatedQuestion);
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
};

exports.deleteQuestion = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const question = await Question.findByPk(id);
    if (!question) {
      throw new APIError('Question not found', 404);
    }

    // Soft delete
    question.status = 'inactive';
    question.updated_by = req.user?.id || null;
    await question.save();

    res.json({ message: 'Question deactivated successfully' });
  } catch (error) {
    next(error);
  }
};