// models/Answer.js
const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const {Question} = require('./Question'); // Adjust the path as necessary

const Answer = sequelize.define('Answer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Questions',
            key: 'id'
        }
    },
    answer_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    is_correct: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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
    tableName: 'Answers'
});

Question.hasMany(Answer, {
    foreignKey: 'question_id',
    as: 'answers'
});

Answer.belongsTo(Question, {
    foreignKey: 'question_id',
    as: 'question'
});


module.exports = Answer;