const express = require('express');
const router = express.Router();
const counterpartyController = require('../controllers/counterpartiesController');

router.post('/', counterpartyController.create);
router.get('/', counterpartyController.getAll);
router.get('/:id', counterpartyController.getById);
router.head('/:id', counterpartyController.checkExists);
router.put('/:id', counterpartyController.update);
router.delete('/:id', counterpartyController.delete);

module.exports = router;