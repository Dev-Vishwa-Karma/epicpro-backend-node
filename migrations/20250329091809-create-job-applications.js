'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jobApplications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      applicantName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      applicantEmail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      applicantPhoneNumber: {
        allowNull: false, 
        type: Sequelize.STRING
      },
      applicantAddress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      appliedDate: {
        type: Sequelize.DATE
      },
      experience: { // Corrected typo from 'experince' to 'experience'
        allowNull: true,
        type: Sequelize.STRING
      },
      resume: {
        allowNull: false,
        type: Sequelize.STRING
      },
      application_status: {
        type: Sequelize.ENUM,
        values: ['Interview', 'Interviewed', 'Cancel'],
        defaultValue: 'Interview'
      },
      job_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'jobPosition', // Pluralized table name
          key: 'id' // Correct primary key
        }
      },
    profile_image: {
      type: Sequelize.STRING,
      allowNull: true
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
    await queryInterface.dropTable('jobApplications');
  }
};