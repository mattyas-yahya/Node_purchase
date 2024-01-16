const DataTypes  = require('sequelize');
const sequelize = require('../config/database');

const Purchase_line = sequelize.define('Purchase_line', {
  id: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
        allowNull: false,

  },
  prcode: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  item_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Purchase_line;
