const express = require('express');
const router = express.Router();
const logins = require('../control/login_control');

router.get('/login', logins.createLogin);

module.exports = router;
