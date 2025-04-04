// models/QuizSession.js
const sequelize = require("../config/db"); // Adjust path as needed
const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const QuizSession = sequelize.define('QuizSession', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    session_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    questions: {
        type: DataTypes.JSON,
        allowNull: false
    },
    answers: {
        type: DataTypes.JSON,
        allowNull: true
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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
    tableName: 'QuizSessions'
});

return QuizSession;
}
