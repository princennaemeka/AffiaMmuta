var express = require('express');
var router = express.Router();
var model = require('../models/Category');
var CategoryController = require('../controllers/CategoryController');

/* GET CategoryRoute listing. */
router.post('/', CategoryController.addCategory);
router.get('/', CategoryController.getCategory);
router.get('/delete/:id', CategoryController.deleteCategory);
//router.get('/delete/:id', CategoryController.deleteCategory);

module.exports = router;