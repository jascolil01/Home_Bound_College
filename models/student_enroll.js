'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student_enroll extends Model {
    static associate(models) {
    }
  }
  Student_enroll.init({
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false
     },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false
     },
     grade: {
      type: DataTypes.INTEGER,
      allowNull: false
     },
  }, {
    sequelize,
    modelName: 'Student_enroll',
    tableName: 'student_enrolls',
  });
  return Student_enroll;
};