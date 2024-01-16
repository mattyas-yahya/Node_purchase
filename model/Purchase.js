const DataTypes  = require('sequelize');
const sequelize = require('../config/database');

const Purchase = sequelize.define('Purchase', {
  id: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
        allowNull: false,
  },
  prcode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  requester: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  detail_request: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Purchase;
