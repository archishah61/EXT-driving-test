// controllers/quizController.js
const { QuizSession } = require('../models');
const {Answer } = require('../models');
const { Question } = require('../models');
const { Category } = require('../models');
const { Op } = require('sequelize');
const APIError = require('../utils/APIError');
const { sequelize } = require('../models');

exports.startQuiz = async (req, res, next) => {
    try {
      const sessionId = generateSessionId();
      const questions = await Question.findAll({
        where: { status: 'active' },
        order: sequelize.random(),
        limit: 15,
        include: [{
          model: Answer,
          as: 'answers', // This should match what you use below
          where: { status: 'active' },
          required: true
        }]
      });
  
      const quizSession = await QuizSession.create({
        session_id: sessionId,
        questions: questions.map(q => q.id),
        answers: {}
      });
  
      res.json({
        sessionId: quizSession.session_id,
        questions: questions.map(q => ({
          id: q.id,
          question_text: q.question_text,
          image_url: q.image_url,
          answers: q.answers.map(a => ({ // Changed from q.Answers to q.answers
            id: a.id,
            answer_text: a.answer_text
          }))
        }))
      });
    } catch (error) {
      next(error);
    }
  };

exports.submitAnswer = async (req, res, next) => {
  try {
    const { sessionId, questionId, answerId } = req.body;
    
    const quizSession = await QuizSession.findOne({
      where: { session_id: sessionId }
    });
    
    if (!quizSession) {
      throw new APIError('Quiz session not found', 404);
    }

    // Check if question is part of this quiz
    if (!quizSession.questions.includes(questionId)) {
      throw new APIError('Invalid question for this quiz session', 400);
    }

    // Get correct answer
    const correctAnswer = await Answer.findOne({
      where: {
        question_id: questionId,
        is_correct: true
      }
    });

    if (!correctAnswer) {
      throw new APIError('No correct answer found for this question', 500);
    }

    // Update session
    const updatedAnswers = {
      ...quizSession.answers,
      [questionId]: answerId
    };

    const isCorrect = answerId === correctAnswer.id;
    const score = isCorrect ? (quizSession.score || 0) + 1 : quizSession.score || 0;

    await quizSession.update({
      answers: updatedAnswers,
      score
    });

    res.json({
      correct: isCorrect,
      correctAnswerId: correctAnswer.id,
      explanation: correctAnswer.explanation,
      currentScore: score,
      totalQuestions: quizSession.questions.length
    });
  } catch (error) {
    next(error);
  }
};

exports.completeQuiz = async (req, res, next) => {
  try {
    const { sessionId } = req.body;
    
    const quizSession = await QuizSession.findOne({
      where: { session_id: sessionId }
    });
    
    if (!quizSession) {
      throw new APIError('Quiz session not found', 404);
    }

    await quizSession.update({
      is_completed: true
    });

    const percentage = Math.round((quizSession.score / quizSession.questions.length) * 100);
    const passed = percentage >= 80 && 
                  (quizSession.questions.length - quizSession.score) <= 3;

    res.json({
      score: quizSession.score,
      total: quizSession.questions.length,
      percentage,
      passed,
      answers: quizSession.answers
    });
  } catch (error) {
    next(error);
  }
};

function generateSessionId() {
  return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, () => {
    return Math.floor(Math.random() * 16).toString(16);
  });
}