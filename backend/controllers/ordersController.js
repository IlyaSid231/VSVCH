const { Orders, Counterparties, OrderProducts, Products } = require('../models');
const { Op } = require('sequelize');

exports.getAllOrders = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, order_date_min, order_date_max } = req.query;
    
    const offset = (page - 1) * limit;
    
    const where = {};
    const include = [
      { model: Counterparties,
        attributes: ['name', 'phone']
       }
    ];

    // Фильтрация по статусу
    if (status) {
      where.status = status;
    }

    // Фильтрация по дате
    if (order_date_min || order_date_max) {
      where.order_date = {};
      if (order_date_min) {
        where.order_date[Op.gte] = new Date(order_date_min);
      }
      if (order_date_max) {
        where.order_date[Op.lte] = new Date(order_date_max);
      }
    }

    const { count, rows } = await Orders.findAndCountAll({
      where,
      include,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
    });

  res.json({
      data: rows,
      pagination: { 
        page: parseInt(page), 
        limit: parseInt(limit), 
        total: count, 
        pages: Math.ceil(count / limit)
      },
  });
  } catch (error) {
    console.error('Ошибка получения данных заявок', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Orders.findByPk(req.params.id, {
      include: [
        { model: Counterparties },
        { model: OrderProducts, include: [Products] },
      ],
    });
    
    if (!order) {
      return res.status(404).send('Заявка не найдена');
    }
    res.json(order);
  } catch (error) {
    console.error('Ошибка получения данных заявки:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
};

exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Orders.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Ошибка при создании объекта:', error);
    res.status(400).send('Неправильный запрос: ' + error.message);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const [updated] = await Orders.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).send('Заявка не найдена');
    }
    const updatedOrder = await Orders.findByPk(req.params.id, {
      include: [
        { model: Counterparties },
        { model: OrderProducts, include: [Products] },
      ],
    });
    res.json(updatedOrder);
  } catch (error) {
    console.error('Ошибка обновления данных: ', error);
    res.status(400).send('Некорректный запрос: ' + error.message);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deleted = await Orders.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).send('Заявка не найдена');
    }
    res.status(204).send();
  } catch (error) {
    console.error('Ошибка удаления заявки:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
};

exports.checkOrderExists = async (req, res) => {
  try {
    const exists = await Orders.findByPk(req.params.id);
    res.status(exists ? 200 : 404).send();
  } catch (error) {
    console.error('Ошибка проверки существования:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
};