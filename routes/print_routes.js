const express = require('express');
const router = express.Router();
const print_control = require('../control/print_control');

router.get('/print', print_control.getPrint);


module.exports = router;
