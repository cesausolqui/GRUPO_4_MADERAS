const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

// llamado al login
router.get('/login', usersController.login);

// llamado del registro

router.get('/register', usersController.register);
// router.post('/', usersController.register);

module.exports = router;