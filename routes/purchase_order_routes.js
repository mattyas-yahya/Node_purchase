const express = require('express');
const router = express.Router();
const purchase_order_control = require('../control/purchase_order_control');

router.get('/All', purchase_order_control.getAllPurchasesOrder);
router.post('/Save', purchase_order_control.createPurchase_order);
router.post('/Delete', purchase_order_control.deleteAllPurchase);
router.put('/:pocode', purchase_order_control.updatePurchasesOrder);
router.delete('/:pocode', purchase_order_control.deletePurchase);

module.exports = router;
