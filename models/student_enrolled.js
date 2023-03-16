'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student_enrolled extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_enrolled.init({
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
    modelName: 'Student_enrolled',
    tableName: 'student_enroll',
  });
  return Student_enrolled;
};