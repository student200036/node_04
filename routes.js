const express = require('express');
const homeController = require('./controllers/HomeController');
const loginController = require('./controllers/LoginController');
const itemController = require('./controllers/ItemController');


const item = require('./models/item')
const router = express.Router();

router.get('/', homeController.index)
router.get('/profile', homeController.profile)

router.get('/login', loginController.index)
router.post('/auth', loginController.auth)

router.get('/item/:id', itemController.show)

module.exports = router;