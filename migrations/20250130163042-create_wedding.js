"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("weddingInfo", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      typeOfEvent: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brideName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      groomName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weddingDate: {
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
      phoneNo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contactMethod: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      peopleExpected: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      foodToBeDeliverdToEvent: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      likeUsToSupplyCake: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      likeUsToGetDecorations: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      likeUsToGetPhotographer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      otherInfomation: {
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
    await queryInterface.dropTable("weddingInfo");
  },
};
