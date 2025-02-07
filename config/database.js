const Sequelize  = require('sequelize');

const sequelize = new Sequelize('neondb', 'neondb_owner', 'npg_L5OtbAVHZP7R', {
  host: 'https://node-purchase.vercel.app',
  dialect: 'postgresql',
});

module.exports = sequelize;
