const express = require('express');
const router = express.Router();

//const controllers = require('../controllers'); //1- Funcion normal
const { ProductsControllers } = require('../controllers'); //2- Destructurando


//router.get('/', controllers.UserControllers.getUsers); //1- Normal
router.get('/', ProductsControllers.getProducts); // 2- Destructurando

router.post('/', ProductsControllers.createProducts);

router.put('/:id', ProductsControllers.putProducts);

router.patch('/:id', ProductsControllers.udapteProducts);

router.delete('/:id', ProductsControllers.deleteProducts);

module.exports = router;