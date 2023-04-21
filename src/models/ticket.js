'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ticket.init({
    departure: DataTypes.STRING,
    destination: DataTypes.STRING,
    flightDate: DataTypes.STRING,
    flightTime: DataTypes.STRING,
    landTime: DataTypes.STRING,
    airline: DataTypes.STRING,
    image: DataTypes.STRING,
    number: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};