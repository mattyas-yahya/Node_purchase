const Sequelize  = require('sequelize');

const sequelize = new Sequelize('node_manufacture', 'root', 'root', {
  host: 'https://node-purchase.vercel.app',
  dialect: 'mysql',
});

module.exports = sequelize;
