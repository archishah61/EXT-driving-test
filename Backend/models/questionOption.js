const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust path as necessary

const QuestionOption = sequelize.define(
    'QuestionOption',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        questionId: {
            type: DataTypes.UUID,
            references: {
                model: 'questions',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        optionText: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        isCorrect: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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
        tableName: 'question_options',
        timestamps: true,
    }
);

QuestionOption.associate = function (models) {
    QuestionOption.belongsTo(models.Question, {
        foreignKey: 'questionId',
        as: 'question',
    });
};

module.exports = QuestionOption;
