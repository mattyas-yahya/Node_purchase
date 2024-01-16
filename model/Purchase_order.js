const DataTypes  = require('sequelize');
const sequelize = require('../config/database');

const Purchase_order = sequelize.define('Purchase_order', {
  id: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
        allowNull: false,
  },
  pocode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  prcode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vendor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ship_to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Purchase_order;
