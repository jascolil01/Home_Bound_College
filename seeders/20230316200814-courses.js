'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let courses = [
      {
        name: 'Introduction to Psychology',
        course_code: 'PSYC 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Calculus I',
        course_code: 'MATH 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Sociology',
        course_code: 'SOC 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Computer Science',
        course_code: 'CS 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'General Chemistry I',
        course_code: 'CHEM 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Microeconomics',
        course_code: 'ECON 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'English Composition',
        course_code: 'ENGL 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Ethics',
        course_code: 'PHIL 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Anthropology',
        course_code: 'ANTH 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Statistics',
        course_code: 'STAT 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'American History to 1865',
        course_code: 'HIST 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Principles of Biology I',
        course_code: 'BIOL 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Political Science',
        course_code: 'POLSC 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'World History to 1500',
        course_code: 'HIST 102',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Astronomy',
        course_code: 'ASTR 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Philosophy',
        course_code: 'PHIL 102',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to International Relations',
        course_code: 'IR 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Marketing',
        course_code: 'MKTG 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Creative Writing',
        course_code: 'CRWR 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Geology',
        course_code: 'GEOL 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Linguistics',
        course_code: 'LING 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Environmental Science',
        course_code: 'ENVS 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Women, Gender, and Sexuality Studies',
        course_code: 'WGSS 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Music Theory',
        course_code: 'MUSC 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Film Studies',
        course_code: 'FILM 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to African American Studies',
        course_code: 'AFAM 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Theatre',
        course_code: 'THTR 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Religious Studies',
        course_code: 'RELS 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Latin American Studies',
        course_code: 'LAST 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Journalism',
        course_code: 'JOUR 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Health Sciences',
        course_code: 'HLTH 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Data Science',
        course_code: 'DATA 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Principles of Macroeconomics',
        course_code: 'ECON 102',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Artificial Intelligence',
        course_code: 'CSAI 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'American Sign Language I',
        course_code: 'ASL 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Cognitive Science',
        course_code: 'COGS 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Forensic Science',
        course_code: 'FORS 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Social Work',
        course_code: 'SOCW 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Human Anatomy and Physiology',
        course_code: 'HAP 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Entrepreneurship',
        course_code: 'ENTR 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Digital Photography',
        course_code: 'PHOTO 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Neuroscience',
        course_code: 'NEURO 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Cybersecurity',
        course_code: 'CYBER 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Public Relations',
        course_code: 'PR 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Human-Computer Interaction',
        course_code: 'HCI 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Environmental Policy',
        course_code: 'ENVP 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Early Childhood Education',
        course_code: 'ECED 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Nutrition',
        course_code: 'NUTR 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Game Design',
        course_code: 'GAME 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Sports Management',
        course_code: 'SPM 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Art History',
        course_code: 'ARTH 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Biomedical Engineering',
        course_code: 'BME 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Organizational Behavior',
        course_code: 'OB 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Mass Communications',
        course_code: 'MASS 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Creative Coding',
        course_code: 'CODE 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Developmental Psychology',
        course_code: 'DEVP 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Geographical Information Systems',
        course_code: 'GIS 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Applied Linguistics',
        course_code: 'APPLING 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Graphic Design',
        course_code: 'GD 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to Human Rights',
        course_code: 'HUMRTS 101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to International Business',
        course_code: 'IB 101',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('courses', courses)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses')
  }
};
