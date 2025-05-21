'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('jobPosition', [
      {
        postionName: 'Software Engineer',
        positionType: 'Full-Time',
        positionStartDate: new Date('2025-04-01'),
        positionEndDate: new Date('2026-04-01'),
        positionStatus: 'Open',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postionName: 'Product Manager',
        positionType: 'Contract',
        positionStartDate: new Date('2025-06-01'),
        positionEndDate: new Date('2025-12-01'),
        positionStatus: 'Open',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postionName: 'Data Analyst',
        positionType: 'Part-Time',
        positionStartDate: new Date('2025-05-15'),
        positionEndDate: new Date('2025-11-15'),
        positionStatus: 'Closed',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jobPosition', null, {});
  }
};
