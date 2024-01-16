const express = require('express');
const router = express.Router();
const inventory_control = require('../control/inventory_control');

router.get('/All', inventory_control.getAllInv);
router.post('/Save', inventory_control.createInventory);
router.post('/Delete', inventory_control.deleteAllInventory);

module.exports = router;
