var express = require('express');
var router = express.Router();
var model = require('../models/Comment')
var CommentController = require('../controllers/CommentController');

/*GET Comment listing. */
router.post('/create', CommentController.addComment);

router.get('/', CommentController.getComments);

router.get('/comment/:id', CommentController.getCommentById);

router.get('/delete/:id', CommentController.deleteComment);

router.post('/update/:id', CommentController.updateComment);

module.exports = router;
