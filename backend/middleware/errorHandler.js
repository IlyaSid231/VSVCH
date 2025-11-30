const errorHandler = (error, req, res, next) => {
    console.error('Ошибка:', error);

  if (error.name === 'SequelizeValidationError') {
    return res.status(400).json({
      error: 'Валидация не пройдена',
      details: error.errors.map(e => ({ field: e.path, message: e.message })),
    });
  }

  if (error.status === 404) {
    return res.status(404).json({ error: 'Ресурс не найден' });
  }

  res.status(error.status || 500).json({
    error: process.env.NODE_ENV === 'production' ? 'Внутренняя ошибка сервера' : error.message,
  });
};

module.exports = errorHandler;