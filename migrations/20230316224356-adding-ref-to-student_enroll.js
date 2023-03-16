'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('student_enrolls', 'course_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'courses',
        key: 'id'
      }
    })
    await queryInterface.changeColumn('student_enrolls', 'student_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'students',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('student_enrolls', 'course_id', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
    await queryInterface.changeColumn('student_enrolls', 'student_id', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  }
};