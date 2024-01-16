const express = require('express');
const router = express.Router();
const purchaseController = require('../control/purchase_control');

router.get('/All', purchaseController.getAllPurchases);
router.post('/Save', purchaseController.createPurchase);
router.post('/Delete', purchaseController.deleteAllPurchase);
router.put('/:prcode', purchaseController.updatePurchase);
router.delete('/:prcode', purchaseController.deletePurchase);

module.exports = router;
