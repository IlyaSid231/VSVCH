const { Products } = require('../models'); // 
const { Op } = require('sequelize');

exports.getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10, SortOrder, filter = {}, search } = req.query;
    
    const offset = (page - 1) * limit;

    const order = [];

    const sort = SortOrder === 'desc' ? 'DESC' : 'ASC';
    order.push(['price_per_unit', sort]);
  
    const where = {};
    if (search) {
      where.name = { [Op.iLike]: `%${search}%` };
    }

    if (filter.price_min || filter.price_max) {
      where.price_per_unit = {};
      
      // Минимальная цена
      if (filter.price_min) {
        where.price_per_unit[Op.gte] = parseFloat(filter.price_min);
      }

      // Максимальная цена
      if (filter.price_max) {
        where.price_per_unit[Op.lte] = parseFloat(filter.price_max);
      }
    }

    const { count, rows } = await Products.findAndCountAll({
        where,
        order,
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
    console.error('Ошибка при извлечении продуктов:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Products.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send('Продукт не найден');
    }
    res.json(product);
  } catch (error) {
    console.error('Ошибка получения продукта', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Products.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Ошибка создания продукта:', error);
    res.status(400).send('Некорректный запрос: ' + error.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const [updated] = await Products.update(req.body, 
    {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).send('Product not found');
    }
    const updatedProduct = await Products.findByPk(req.params.id);
    res.json(updatedProduct);
  } catch (error) {
    console.error('Ошибка обновления продукта! ', error);
    res.status(400).send('Некорректный запрос: ' + error.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Products.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).send('Продукт не найден');
    }
    res.status(204).send(); 
  } catch (error) {
    console.error('Ошибка удаления данных:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
};

exports.checkExists = async (req, res) => {
  try {
    const exists = await Products.findByPk(req.params.id);
    res.status(exists ? 200 : 404).send();
  } catch (error) {
    console.error('Ошибка проверки существования: ', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
};