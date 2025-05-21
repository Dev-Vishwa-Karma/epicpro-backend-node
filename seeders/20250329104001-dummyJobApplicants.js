'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('jobApplications', [
      {
        applicantName: 'John Doe',
        applicantEmail: 'johndoe@example.com',
        applicantPhoneNumber: '1234567890',
        applicantAddress: '123 Main St, Cityville',
        appliedDate: new Date(),
        experience: "5 years",
        resume: 'resume_john_doe.pdf',
        application_status: 'Interview',
        job_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        applicantName: 'Jane Smith',
        applicantEmail: 'janesmith@example.com',
        applicantPhoneNumber: '0987654321',
        applicantAddress: '456 Side St, Townsville',
        appliedDate: new Date(),
        experience: "3 years",
        resume: 'resume_jane_smith.pdf',
        application_status: 'Interview',
        job_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        applicantName: 'Alice Johnson',
        applicantEmail: 'alicejohnson@example.com',
        applicantPhoneNumber: '1122334455',
        applicantAddress: '789 Market St, Metropolis',
        appliedDate: new Date(),
        experience: "7 years",
        resume: 'resume_alice_johnson.pdf',
        application_status: 'Interview',
        job_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jobApplications', null, {});
  }
};
