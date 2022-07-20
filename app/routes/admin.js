const express = require('express')

const router = express.Router();

const adminController = require('../controllers/admin') 

router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);
router.get('/edit-product', adminController.getEditProduct);
router.get('/product-list', adminController.getProducts);

module.exports = router;