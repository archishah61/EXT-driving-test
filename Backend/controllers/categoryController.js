// controllers/categoryController.js
const {Answer } = require('../models');
const { Question } = require('../models');
const { Category } = require('../models');
const { Op } = require('sequelize');
const APIError = require('../utils/APIError');
const { sequelize } = require('../models');

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      where: { status: 'active' },
      order: [['name', 'ASC']]
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    
    const category = await Category.create({
      name,
      description,
      created_by: req.user?.id || null
    });

    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    
    const category = await Category.findByPk(id);
    if (!category) {
      throw new APIError('Category not found', 404);
    }

    category.name = name || category.name;
    category.description = description || category.description;
    category.updated_by = req.user?.id || null;
    await category.save();

    res.json(category);
  } catch (error) {
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const category = await Category.findByPk(id);
    if (!category) {
      throw new APIError('Category not found', 404);
    }

    // Check if category has questions
    const questionCount = await Question.count({
      where: { category_id: id, status: 'active' }
    });

    if (questionCount > 0) {
      throw new APIError('Cannot delete category with active questions', 400);
    }

    // Soft delete
    category.status = 'inactive';
    category.updated_by = req.user?.id || null;
    await category.save();

    res.json({ message: 'Category deactivated successfully' });
  } catch (error) {
    next(error);
  }
};