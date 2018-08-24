var bookRepository = require('../repositories/BookRepository');
var repository = require('../repositories/CommentRepository');
var bookController = require('../controllers/BookController');

exports.addComment = function (req, res, data){
    repository.add(data, function(err, comment){
   bookRepository.getById(data.book, function(err, book){
        book.comments.push(comment._id);
        book.commentCount++;
            book.save();
            if (err) res.json({err: err, message: 'error, comment could not be added'});
            res.json ({message: 'comment created successfully'});
        })
     });
}

exports.deleteComment = function (req, res, data){
    repository.delete(data, function(err){
        if (err) res.json({err: err, message: 'error, comment could not be deleted'});
        res.json ({message: 'comment deleted successfully'});
    });
}

exports.getCommentByParam = function (req, res, options){
    repository.get(options, function(err){
        if (err) res.json({err: err, message: 'error, comment could not be retrieved'});
        res.json (comments);
    });
}

exports.getCommentById = function (req, res, id){
    repository.getById(id, function(err, comment){
        if (err) res.json({err: err, message: 'error, comment could not be retrieved'});
        res.json (comment);
    });
}

exports.getAllComments = function(req, res){
    repository.getWithPopulate({},'-__v',  {path:'book',select:'-__v -comments'},'', function(err, comments){
        if (err) res.json({err:err, message:'error, could not retrieve comments'});
        res.json(comments);
    });
}
