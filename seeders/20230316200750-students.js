'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let students = [
      {
        name: 'Gabrielle Davis',
        email: 'gabrielle.davis@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ryan Brown',
        email: 'ryan.brown@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sophia Garcia',
        email: 'sophia.garcia@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Isaac Patel',
        email: 'isaac.patel@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Olivia Smith',
        email: 'olivia.smith@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ethan Johnson',
        email: 'ethan.johnson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ava Rodriguez',
        email: 'ava.rodriguez@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Benjamin Lee',
        email: 'benjamin.lee@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mia Gonzalez',
        email: 'mia.gonzalez@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Noah Jackson',
        email: 'noah.jackson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emma Davis',
        email: 'emma.davis@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Michael Wilson',
        email: 'michael.wilson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samantha Lewis',
        email: 'samantha.lewis@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'William Martinez',
        email: 'william.martinez@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emily Anderson',
        email: 'emily.anderson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daniel Taylor',
        email: 'daniel.taylor@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Madison Green',
        email: 'madison.green@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'David Johnson',
        email: 'david.johnson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Elizabeth Davis',
        email: 'elizabeth.davis@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joshua Brown',
        email: 'joshua.brown@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chloe Wilson',
        email: 'chloe.wilson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Christopher Jackson',
        email: 'christopher.jackson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Avery Davis',
        email: 'avery.davis@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Isabella Lee',
        email: 'isabella.lee@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nathan Patel',
        email: 'nathan.patel@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Evelyn Rodriguez',
        email: 'evelyn.rodriguez@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Andrew Martinez',
        email: 'andrew.martinez@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Abigail Wilson',
        email: 'abigail.wilson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jacob Johnson',
        email: 'jacob.johnson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sofia Davis',
        email: 'sofia.davis@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alexander Anderson',
        email: 'alexander.anderson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Abigail Richards',
        email: 'abigailrichards@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bradley Cruz',
        email: 'bradley.cruz@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Carla Simpson',
        email: 'carla_simpson@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'David Peterson',
        email: 'davidpeterson@outlook.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emily Rivera',
        email: 'emilyrivera@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Franklin Higgins',
        email: 'franklin.higgins@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grace Long',
        email: 'grace_long@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Henry Kim',
        email: 'henry_kim@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Isabella Edwards',
        email: 'isabella_edwards@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Garcia',
        email: 'john_garcia@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Katherine Perez',
        email: 'katherine_perez@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Liam Carter',
        email: 'liam.carter@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Megan Patel',
        email: 'megan_patel@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nathan Collins',
        email: 'nathan.collins@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Olivia Wright',
        email: 'olivia_wright@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Peter Foster',
        email: 'peter.foster@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Quentin Ramirez',
        email: 'quentin.ramirez@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rachel Chen',
        email: 'rachel.chen@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samuel Anderson',
        email: 'samuel_anderson@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tiffany Lewis',
        email: 'tiffany_lewis@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Uma Patel',
        email: 'uma_patel@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vincent Flores',
        email: 'vincent_flores@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wendy Lee',
        email: 'wendy.lee@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Xander Lee',
        email: 'xander_lee@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yara Rodriguez',
        email: 'yara_rodriguez@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Zachary Adams',
        email: 'zachary_adams@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alice Chen',
        email: 'alice_chen@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Benjamin Yu',
        email: 'benjamin_yu@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Catherine Liu',
        email: 'catherine.liu@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daniel Park',
        email: 'daniel.park@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Evelyn Kim',
        email: 'evelyn_kim@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gabriella Rivera',
        email: 'gabriella.rivera@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jonathan Wong',
        email: 'jonathan.wong@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Olivia Patel',
        email: 'olivia.patel@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nicholas Anderson',
        email: 'nicholas.anderson@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Isabella Brown',
        email: 'isabella.brown@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ethan Ramirez',
        email: 'ethan.ramirez@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Avery Lee',
        email: 'avery.lee@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emma Kim',
        email: 'emma.kim@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caleb Garcia',
        email: 'caleb.garcia@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sophia Nguyen',
        email: 'sophia.nguyen@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aiden Robinson',
        email: 'aiden.robinson@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Charlotte Lewis',
        email: 'charlotte.lewis@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lucas Jackson',
        email: 'lucas.jackson@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chloe Davis',
        email: 'chloe.davis@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alexander Perez',
        email: 'alexander.perez@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grace Wilson',
        email: 'grace.wilson@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Benjamin Kim',
        email: 'benjamin.kim@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mia Lee',
        email: 'mia.lee@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'William Patel',
        email: 'william.patel@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ava Hernandez',
        email: 'ava.hernandez@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Michael Nguyen',
        email: 'michael.nguyen@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Harper Garcia',
        email: 'harper.garcia@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daniel Kim',
        email: 'daniel.kim@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Madison Rodriguez',
        email: 'madison.rodriguez@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'David Patel',
        email: 'david.patel@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sofia Hernandez',
        email: 'sofia.hernandez@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'James Lee',
        email: 'james.lee@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lily Nguyen',
        email: 'lily.nguyen@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Matthew Brown',
        email: 'matthew.brown@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emily Martinez',
        email: 'emily.martinez@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('students', students)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students')
  }
};
