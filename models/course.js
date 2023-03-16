'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsToMany(models.Student, {
        through: 'student_enroll',
        as: 'student',
        foreignKey: 'course_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
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