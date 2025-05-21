'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobApplications extends Model {
    static associate(models) {
      jobApplications.belongsTo(models.jobPosition, { foreignKey: 'job_id' });
    }
  }
  jobApplications.init({
    applicantName: DataTypes.STRING,
    applicantEmail: DataTypes.STRING,
    applicantPhoneNumber: DataTypes.STRING,
    applicantAddress: DataTypes.STRING,
    appliedDate: DataTypes.DATE,
    experience: DataTypes.STRING,
    resume: DataTypes.STRING,
    application_status: {
      type: DataTypes.ENUM,
      values: ['Pending', 'Shortlisted', 'Rejected', 'Hired']
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    profile_image: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'jobApplications',
    tableName: 'jobApplications',
    timestamps: true,
    paranoid: false,
  });
  return jobApplications;
};