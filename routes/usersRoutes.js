const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
// llamado al login
router.get('/login', usersController.login);

// llamado del registro
router.get('/register', usersController.register);

// llamado del carro de producto
router.get('/productCart', usersController.productCart);

// llamado del carro detallado
router.get('/productDetail', usersController.productDetail);
module.exports = router;