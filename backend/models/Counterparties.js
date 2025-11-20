const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Counterparties = sequelize.define('Counterparties', {
  counterparties_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notNull: { msg: 'Название обязательно' },
      len: { args: [1, 255], msg: 'Название должно быть от 1 до 255 символов' },
    },
  },
  inn: {
    type: DataTypes.STRING(12),
    unique: true,
    allowNull: false,
    validate: {
      notNull: { msg: 'ИНН обязателен' }
    },
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
    validate: {
      notNull: { msg: 'Email обязателен' },
      isEmail: { msg: 'Неверный формат email' },
      len: { args: [1, 255], msg: 'Email от 1 до 255 символов' },
    },
  },
}, {
  tableName: 'Counterparties',
  timestamps: false,
});

module.exports = Counterparties;