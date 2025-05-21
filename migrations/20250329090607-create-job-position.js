'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jobPosition', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postionName: {
        type: Sequelize.STRING
      },
      positionType: {
        type: Sequelize.STRING
      },
      positionStartDate: {
        type: Sequelize.DATE
      },
      positionEndDate: {
        type: Sequelize.DATE
      },
      positionStatus: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jobPosition');
  }
};