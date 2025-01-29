const { Sequelize, DataTypes, Model } = require('sequelize');
const events = require("../models/event")
const sequelize = require("../database/database")

class organizers extends Model { }

organizers.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'organizers', // We need to choose the model name,
    tableName: "organizers",
    timestamps: true
  },
);

organizers.hasMany(events, { foreignKey: "organizerId", as: "events" });
events.belongsTo(organizers, { foreignKey: "organizerId", as: "organizer" });
module.exports = organizers;