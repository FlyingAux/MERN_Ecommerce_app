const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');
const { getCategory, createCategory, deleteCategory, updateCategory } = require('../controllers/categoryController');

router.get('/',getCategory);

router.post('/', isLoggedIn, isAdmin, createCategory);

router.delete('/:id',isLoggedIn,isAdmin, deleteCategory);

router.put('/:id',isLoggedIn,isAdmin, updateCategory);


module.exports = router;