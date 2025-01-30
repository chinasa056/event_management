const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../database/database");

class weddingInfo extends Model { }

weddingInfo.init(
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
      brideName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      groomName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weddingDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactMethod: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      peopleExpected: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      foodToBeDeliverdToEvent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likeUsToSupplyCake: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likeUsToGetDecorations: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likeUsToGetPhotographer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      otherInfomation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    tableName: "weddingInfo"
  },
);

module.exports = weddingInfo;