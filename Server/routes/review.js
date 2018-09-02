var express = require('express');
var router = express.Router();
var ReviewController = require('../../Server/Controllers/ReviewController');

/* GET users listing. */
router.get('/', ReviewController.viewReviews);
router.post('/add', ReviewController.addBookToLibrary);

module.exports = router;