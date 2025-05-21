'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobPosition extends Model {
    static associate(models) {
      jobPosition.hasMany(models.jobApplications, { foreignKey: 'id' });
    }
  }
  jobPosition.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    postionName: DataTypes.STRING, 
    positionType: DataTypes.STRING,
    positionStartDate: DataTypes.DATE,
    positionEndDate: DataTypes.DATE,
    positionStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jobPosition',
    tableName: 'jobPosition',
    timestamps: true,
    paranoid: false,
  });
  return jobPosition;
};