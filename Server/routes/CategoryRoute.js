var express = require('express');
var router = express.Router();
var model = require('../Models/Category');
var CategoryController = require('../Controllers/CategoryController');

/* GET CategoryRoute listing. */
router.post('/', CategoryController.addCategory);
router.get('/', CategoryController.getCategory);
router.get('/delete/:id', CategoryController.deleteCategory);


module.exports = router;