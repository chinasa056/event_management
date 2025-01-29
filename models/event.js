const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../database/database");
const organizers = require('./organizer');

class events extends Model { }

events.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    organizerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'organizers',
        key: 'id'
      }
    },
    eventName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scheduleDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    guests: {
      type: DataTypes.JSON,
      defaultValue:[],
      allowNull: true
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
  },
);

module.exports = events;