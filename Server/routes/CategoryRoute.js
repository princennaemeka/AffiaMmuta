var express = require('express');
var router = express.Router();
var model = require('../models/Category');
var CategoryController = require ('../controllers/CategoryController');

/* GET CategoryRoute listing. */
router.post('/add', CategoryController.addCategory);

module.exports = router;