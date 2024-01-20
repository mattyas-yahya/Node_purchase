const DataTypes  = require('sequelize');
const sequelize = require('../config/database');

const Sales = sequelize.define('Sales', {
  id: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
        allowNull: false,
  },
  date_transaction: {
    type: DataTypes.DATE,
    allowNull: false,
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
  qty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  selling_price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Sales;
