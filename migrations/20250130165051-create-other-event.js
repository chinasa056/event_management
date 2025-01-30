"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("otherEvents", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      typeOfEvent: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      typeOfServiceNeeded: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      goalForThisProject: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateOfEvent: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expectedBudget: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      anyOtherinformation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("otherEvents");
  },
};
