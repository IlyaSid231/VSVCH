const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrderProducts = sequelize.define('OrderProducts', {
  order_product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Orders',
      key: 'order_id',
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Products',
      key: 'product_id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: {
        args: 1, msg: 'Количество должно быть не менее 1'
      },
      isNumeric: {
        msg: 'Количество должно быть числом',
      },
    },
  },
}, {
  tableName: 'Order_Products',
  timestamps: false,
});

module.exports = OrderProducts;