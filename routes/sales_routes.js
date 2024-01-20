const express = require('express');
const router = express.Router();
const sales_control = require('../control/sales_control');

router.get('/All', sales_control.getAllSales);
router.post('/Save', sales_control.createSales);
router.post('/Delete', sales_control.deleteAllSales);

module.exports = router;
