const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Products = sequelize.define('Products', {
  product_id: {
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
  quantity_in_package: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: {
        args: 1,
        msg: 'Количество в упаковке должно быть не меньше 1',
      },
    },
  },
  price_per_unit: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00,
    validate: {
      min: {
        args: 0,
        msg: 'Цена за единицу должна быть не менее 0',
      },
      isNumeric: {
        msg: 'Цена должна быть числом',
      },
    },
  },
}, {
  tableName: 'Products',
  timestamps: false,
});

module.exports = Products;