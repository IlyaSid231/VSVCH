const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

// Маршруты
router.post('/', ordersController.createOrder);
router.get('/', ordersController.getAllOrders);
router.get('/:id', ordersController.getOrderById);
router.head('/:id', ordersController.checkOrderExists);
router.put('/:id', ordersController.updateOrder);
router.delete('/:id', ordersController.deleteOrder);

module.exports = router;