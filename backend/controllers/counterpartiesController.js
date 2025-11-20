const { Seq } = require('sequelize');
const Counterparties = require('../models/Counterparties');

//POST /counterparties
exports.create = async (req, res) => {
  try {
    const counterparty = await Counterparties.create(req.body);
    res.status(201).json(counterparty);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ error: error.message });
  }
};

// GET /counterparties с пагинацией, сортировкой, фильтрацией, поиском
exports.getAll = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy, filter = {}, search } = req.query;

    const offset = (page - 1) * limit; //Пропуск записей

    const order = sortBy ? 
    sortBy.split(',').map(s => s.split(':')).map(([field, dir = 'ASC']) => [field, dir.toUpperCase()]) 
    : [['counterparties_id', 'ASC']];

    // Фильтрация (Например filter[name]=value)
    const where = {};
    Object.keys(filter).forEach(key => {
      where[key] = { [Seq.eq]: filter[key] };
    });

    // Поиск по name, email
    if (search) {
      where[Seq.or] = [
        { name: { [Seq.iLike]: `%${search}%` } },
        { email: { [Seq.iLike]: `%${search}%` } },
      ];
    }

    const { count, rows } = await Counterparties.findAndCountAll({
      where,
      order,
      offset,
      limit: parseInt(limit),
    });

    res.json({
      data: rows,
      pagination: { page: parseInt(page), limit: parseInt(limit), total: count, pages: Math.ceil(count / limit) },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /counterparties/:id
exports.getById = async (req, res) => {
  try {
    const counterparty = await Counterparties.findByPk(req.params.id);
    if (!counterparty) {
      return res.status(404).json({ error: 'Запись не найдена' });
    }
    res.json(counterparty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// HEAD /counterparties/:id
exports.checkExists = async (req, res) => {
  try {
    const exists = await Counterparties.findByPk(req.params.id);
    res.status(exists ? 200 : 404).send();
  } catch (error) {
    res.status(500).send();
  }
};

// PUT /counterparties/:id
exports.update = async (req, res) => {
  try {
    const counterparty = await Counterparties.findByPk(req.params.id);
    if (!counterparty) {
      return res.status(404).json({ error: 'Запись не найдена' });
    }
    await counterparty.update(req.body);
    res.json(counterparty);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ error: error.message });
  }
};

// DELETE /counterparties/:id
exports.delete = async (req, res) => {
  try {
    const counterparty = await Counterparties.findByPk(req.params.id);
    if (!counterparty) {
      return res.status(404).json({ error: 'Запись не найдена' });
    }
    await counterparty.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};