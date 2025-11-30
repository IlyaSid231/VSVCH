const express = require('express');
const router = express.Router();
const orderProductsController = require('../controllers/orderProductsController');

router.post('/', orderProductsController.createOrderProduct);
router.get('/', orderProductsController.getAllOrderProducts);
router.get('/:id', orderProductsController.getOrderProductById);
router.head('/:id', orderProductsController.checkOrderProductExists);
router.put('/:id', orderProductsController.updateOrderProduct);
router.delete('/:id', orderProductsController.deleteOrderProduct);

module.exports = router;