const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust path as necessary

const Question = sequelize.define(
    'Question',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        testId: {
            type: DataTypes.UUID,
            references: {
                model: 'tests',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        questionText: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        questionImg: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
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
        tableName: 'questions',
        timestamps: true,
    }
);

Question.associate = function (models) {
    Question.belongsTo(models.Test, {
        foreignKey: 'testId',
        as: 'test',
    });

    Question.hasMany(models.QuestionOption, {
        foreignKey: 'questionId',
        as: 'options',
        onDelete: 'CASCADE',
    });
};

module.exports = Question;
