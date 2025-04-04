const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust path as necessary

const Test = sequelize.define(
    'Test',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        type: {
            type: DataTypes.ENUM('car', 'bike'),
            allowNull: false,
        },
        level: {
            type: DataTypes.ENUM('easy', 'medium', 'hard'),
            allowNull: false,
        },
        totalQuestions: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mistakesAllowed: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdBy: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        updatedBy: {
            type: DataTypes.UUID,
            allowNull: true,
        },
    },
    {
        tableName: 'tests',
        timestamps: true,
    }
);

Test.associate = function (models) {
    Test.hasMany(models.Question, {
        foreignKey: 'testId',
        as: 'questions',
        onDelete: 'CASCADE',
    });
};

module.exports = Test;
