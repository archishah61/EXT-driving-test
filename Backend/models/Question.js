// models/Question.js
const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const { Category } = require('./Category'); // Adjust the path as necessary
const { Answer } = require('./Answer'); // Adjust the path as necessary

const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    question_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'id'
        }
    },
    explanation: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active'
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false,
    tableName: 'Questions'
});


Category.hasMany(Question, {
    foreignKey: 'category_id',
    as: 'questions'
});

Question.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
});

Question.hasMany(Answer, {
    foreignKey: 'question_id',
    as: 'answers'
});

Answer.belongsTo(Question, {
    foreignKey: 'question_id',
    as: 'question'
});

module.exports = Question;