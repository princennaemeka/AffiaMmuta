var express = require('express');
var router = express.Router();
var model = require('../models/Book');
var BookController = require ('../controllers/BookController');
var uploadService = require('../services/uploadService');
var CommentController = require('../Controllers/CommentController');

/* GET BookRoute listing. */
router.get('/', BookController.getBooks);
router.get('/delete/:id', BookController.deleteBook);
router.get('/search', BookController.getBookByParam);
router.get('/book/:id', BookController.getBookById);
router.post('/update/:id', BookController.updateBook);
router.post('/addBook', uploadService.upload.any(), BookController.addBook);
router.get('/latest', BookController.getLatestBooks);
router.get('/:category', BookController.getBooksByCategory);
<<<<<<< HEAD
router.get('/search/:title',BookController.searchBooks);
=======
router.get('/book/:id/comments', CommentController.getComments);
router.post('/book/:id/create', CommentController.addComment);
>>>>>>> 21757cfdd5dcfcf4677301a53dac7676ce30556a

module.exports = router;