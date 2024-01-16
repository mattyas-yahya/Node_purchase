const Sequelize  = require('sequelize');

const sequelize = new Sequelize('node_manufacture', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
