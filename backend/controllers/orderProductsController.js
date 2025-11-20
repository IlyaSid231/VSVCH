const { OrderProducts, Orders, Products } = require('../models');
const { Seq } = require('sequelize');

// Проверка на существование order_id и product_id
const checkReferences = async (orderId, productId) => {
  const orderExists = await Orders.findByPk(orderId);
  const productExists = await Products.findByPk(productId);

  if (!orderExists) {
    throw new Error('Заказ не существует');
  }
  
  if (!productExists) {
    throw new Error('Товар не сущетсвует');
  }
};

exports.getAllOrderProducts = async (req, res) => {
  try {
    const {page = 1, limit = 10, search, quantity_min, quantity_max, SortOrder} = req.query;

    const offset = (page - 1) * limit;

    const where = {};
    
    // Фильтрация по количеству
    if (quantity_min || quantity_max) {
      where.quantity = {};
      if (quantity_min) {
        where.quantity[Seq.gte] = parseInt(quantity_min, 10);
      }
      if (quantity_max) {
        where.quantity[Seq.lte] = parseInt(quantity_max, 10);
      }
    }

    // Поиск по названию продукта
    if (search) {
      const productIds = await Products.findAll({
        where: {
          name: { [Seq.iLike]: `%${search}%` } 
        },
        attributes: ['id'], 
      }).then(products => products.map(product => product.id)); // Получаем массив ID

      if (productIds.length) {
        where.product_id = { [Seq.in]: productIds };
      } else {
        where.product_id = null;
      }
    }

    // Сортировка
    // const order = [];
    const sort = SortOrder === 'desc' ? 'DESC' : 'ASC';
    const order = [['price_per_unit', sort]];

    const orderProducts = await OrderProducts.findAndCountAll({
      where,
      include: [{ model: Orders }, { model: Products }],
      order,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
    });

    res.json({
      total: orderProducts.count,
      pages: Math.ceil(orderProducts.count / limit),
      data: orderProducts.rows,
    });
  } catch (error) {
    console.error('Ошибка получения товаров в заявках:', error);
    res.status(500).send('Внутрення ошибка сервера');
  }
};

exports.getOrderProductById = async (req, res) => {
  try {
    const orderProduct = await OrderProducts.findByPk(req.params.id, {
      include: [{ model: Orders }, { model: Products }],
    });
    
    if (!orderProduct) {
      return res.status(404).send('Заявка-товар не найден');
    }
    res.json(orderProduct);
  } catch (error) {
    console.error('Ошибка получения заявки-товара:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
};

exports.createOrderProduct = async (req, res) => {
  try {
    const { order_id, product_id } = req.body;

    await checkReferences(order_id, product_id);

    const newOrderProduct = await OrderProducts.create(req.body);
    res.status(201).json(newOrderProduct);
  } catch (error) {
    console.error('Ошибка создания заявки-товара:', error);
    res.status(400).send('Некорректный запрос: ' + error.message);
  }
};

exports.updateOrderProduct = async (req, res) => {
  try {
    const { order_id, product_id } = req.body;

    await checkReferences(order_id, product_id);

    const [updated] = await OrderProducts.update(req.body, {
      where: { id: req.params.id },
    });
    
    if (!updated) {
      return res.status(404).send('Заявка-товар не найден');
    }
    
    const updatedOrderProduct = await OrderProducts.findByPk(req.params.id, {
      include: [{ model: Orders }, { model: Products }],
    });
    
    res.json(updatedOrderProduct);
  } catch (error) {
    console.error('Ошибка обновления заявки-товара:', error);
    res.status(400).send('Некорректный запрос: ' + error.message);
  }
};

exports.deleteOrderProduct = async (req, res) => {
  try {
    const deleted = await OrderProducts.destroy({
      where: { id: req.params.id },
    });
    
    if (!deleted) {
      return res.status(404).send('Заявка-товар не найден');
    }
    
    res.status(204).send(); 
  } catch (error) {
    console.error('Ошибка удаления заявки-товара: ', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
};

exports.checkOrderProductExists = async (req, res) => {
  try {
    const exists = await OrderProducts.findByPk(req.params.id);
    res.status(exists ? 200 : 404).send();
  } catch (error) {
    console.error('Ошибка проверки существования: ', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
};