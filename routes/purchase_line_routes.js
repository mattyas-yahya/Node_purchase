const express = require('express');
const router = express.Router();
const purchase_line_control = require('../control/purchase_line_control');

router.get('/All', purchase_line_control.getAllPurchase_line);
router.post('/Save', purchase_line_control.createPurchase_line);
router.post('/Delete', purchase_line_control.deleteAllPurchase_line);

module.exports = router;
