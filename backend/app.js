const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const counterpartiesRoutes = require('./routes/counterparties');
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');
const orderProductsRoutes = require('./routes/orderProducts');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('combined')); // Логи в формате combined (запрос, статус ответа, время обработки)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Для обработки данных форм

// Маршруты
app.use('/api/counterparties', counterpartiesRoutes);
app.use('/api/products',productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/order-products', orderProductsRoutes);

// Глобальная обработка ошибок (для 404 и SequelizeValidationError)
app.use((req, res, next) => {
  const error = new Error('Не найдено');
  error.status = 404;
  next(error);
});

app.use(errorHandler);

// Тест подключения к БД
sequelize.authenticate().then(() => console.log('БД подключена')).catch(console.error);

module.exports = app;