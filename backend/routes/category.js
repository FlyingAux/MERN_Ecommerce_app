const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');
const { getCategory, createCategory } = require('../controllers/categoryController');

router.get('/',getCategory)

router.post('/',[ isLoggedIn, isAdmin ],createCategory);

module.exports = router;