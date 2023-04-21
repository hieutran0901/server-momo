'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departure: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      flightDate: {
        type: Sequelize.STRING
      },
      flightTime: {
        type: Sequelize.STRING
      },
      landTime: {
        type: Sequelize.STRING
      },
      airline: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tickets');
  }
};