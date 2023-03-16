'use strict';
const {
  Model
} = require('sequelize');
const student_enroll = require('./student_enroll');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsToMany(models.Course, {
        through: 'student_enroll',
        as: 'courses',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Student.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
     },
    email: {
      type: DataTypes.STRING,
      allowNull: false
     }
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students',
  });
  return Student;
};