const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Orders = sequelize.define('Orders', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  counterparty_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Counterparties',
      key: 'counterparties_id',
    },
  },
  order_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: {
        msg: 'Дата заказа должна быть корректной датой',
      },
    },
  },
  status: {
    type: DataTypes.ENUM('new', 'in_processing', 'cancelled'),
    allowNull: false,
    defaultValue: 'new',
    validate: {
      isIn: {
        args: [['new', 'in_processing', 'cancelled']],
        msg: 'Статус должен быть одним из: new, in_processing, cancelled',
      },
    },
  },
}, {
  tableName: 'Orders',
  timestamps: false,
});

module.exports = Orders;