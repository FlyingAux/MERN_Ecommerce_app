const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');
const { getProduct, createProducts, deleteProducts, updateProducts } = require('../controllers/productController');


router.get('/', getProduct);

router.post('/', createProducts);

router.delete('/:id', deleteProducts);

router.put('/:id', updateProducts);

module.exports = router;