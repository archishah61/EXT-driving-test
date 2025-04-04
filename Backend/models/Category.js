// models/Category.js
const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const { Question } = require('./Question'); // Adjust the path as necessary

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
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
    tableName: 'Categories'
});


Category.hasMany(Question, {
    foreignKey: 'category_id',
    as: 'questions'
});


// In Question model

Question.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
});

module.exports = Category;