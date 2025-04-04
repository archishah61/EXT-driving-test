// models/Question.js
module.exports = (sequelize, DataTypes) => {
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
  
    Question.associate = function(models) {
      Question.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category'
      });
      Question.hasMany(models.Answer, {
        foreignKey: 'question_id',
        as: 'answers'
      });
    };
  
    return Question;
  };