const sequelize = require('../config/database');
const Counterparties = require('./Counterparties');
const Products = require('./Products');
const Orders = require('./Orders');
const OrderProducts = require('./OrderProducts');

// Ассоциации
Counterparties.hasMany(Orders, { foreignKey: 'counterparty_id' });
Orders.belongsTo(Counterparties, { foreignKey: 'counterparty_id' });

Orders.hasMany(OrderProducts, { foreignKey: 'order_id' });
OrderProducts.belongsTo(Orders, { foreignKey: 'order_id' });

Products.hasMany(OrderProducts, { foreignKey: 'product_id' });
OrderProducts.belongsTo(Products, { foreignKey: 'product_id' });

module.exports = {
  sequelize,
  Counterparties,
  Products,
  Orders,
  OrderProducts,
};