const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('simple_domochay_requests', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;