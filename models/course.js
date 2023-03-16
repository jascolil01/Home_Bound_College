'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      // Course.belongsTo(models.Meal, {
      //   foreignKey: 'meal_id',
      //   as: 'courses',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE'
      // })
    }
  }
  Course.init({
    name: {
     type: DataTypes.STRING,
     allowNull: false
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false
     },
  }, {
    sequelize,
    modelName: 'Course',
    modelName: 'courses',
  });
  return Course;
};