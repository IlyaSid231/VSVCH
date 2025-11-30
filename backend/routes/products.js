const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.post('/', productsController.createProduct);
router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProductById);
router.head('/:id', productsController.checkExists);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;