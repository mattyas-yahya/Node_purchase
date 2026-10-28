const Sequelize  = require('sequelize');

const sequelize = new Sequelize('neondb', 'neondb_owner', 'npg_L5OtbAVHZP7R', {
  host: 'ep-frosty-recipe-a4t4af50-pooler.us-east-1.aws.neon.tech',
  dialect: 'postgresql',
});

module.exports = sequelize;
