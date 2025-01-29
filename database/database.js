const Sequelize = require ("sequelize")

const sequelize = new Sequelize('event_planner', 'root', 'Acha105#', {
    host: 'localhost',
    dialect: "mysql"
  });

  module.exports = sequelize