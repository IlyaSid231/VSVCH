const sequelize = require('../config/database');
const Counterparties = require('./Counterparties');
const Products = require('./Products');
const Orders = require('./Orders');
const OrderProducts = require('./OrderProducts');

// Ассоциации
Counterparties.hasMany(Orders, { foreignKey: 'counterparty_id', onDelete: 'CASCADE', });
Orders.belongsTo(Counterparties, { foreignKey: 'counterparty_id' });

Orders.hasMany(OrderProducts, { foreignKey: 'order_id', onDelete: 'CASCADE', });
OrderProducts.belongsTo(Orders, { foreignKey: 'order_id' });

Products.hasMany(OrderProducts, { foreignKey: 'product_id', onDelete: 'CASCADE', });
OrderProducts.belongsTo(Products, { foreignKey: 'product_id' });

module.exports = {
  sequelize,
  Counterparties,
  Products,
  Orders,
  OrderProducts,
};