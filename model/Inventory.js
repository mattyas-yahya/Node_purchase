const DataTypes  = require('sequelize');
const sequelize = require('../config/database');

const Inventory = sequelize.define('Inventory', {
  id: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
        allowNull: false,
  },
  item_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  product_reference: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Inventory;
