'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      // Course.belongsTo(models.student, {
      //   foreignKey: 'user_id',
      //   as: 'user',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE'
      // })
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
    course_code: {
      type: DataTypes.STRING,
      allowNull: false
     },
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
  });
  return Course;
};