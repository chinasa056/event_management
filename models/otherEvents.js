const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../database/database")

class otherEvents extends Model { }

otherEvents.init(
  {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      typeOfEvent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      typeOfServiceNeeded: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      goalForThisProject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfEvent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expectedBudget: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      anyOtherinformation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    
  },
  {
    
    sequelize 
    
  },
);


module.exports = otherEvents;