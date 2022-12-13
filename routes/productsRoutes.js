const express = require('express');
const router = express.Router();

 productsController = require('../controllers/productsController');

router.get('./product/productDetail', productsController.productDetail);
// Route to get all products
router.get('/', productsController.getAllProducts);

// Route create a new product
router.get('/create', productsController.createProduct);
router.post('/', productsController.storeProduct);

//Route to get a product by id
router.get('/:id', productsController.getProductById); 


//Route edit a product
router.get('/edit/:id', productsController.editProduct);
router.put('/:id', productsController.updateProduct);

// Route to delet
//router.delete('/:id', productsController.deleteProduct);

module.exports = router;