var model = require ('../models/Book');
var model = require ('../services/BookService');

exports.addBook = function (req, res){
    var data = {
        author: req.body.author,
        title: req.body.title,
        price: req.body.price,
        bookurl: req.body.bookurl,
        comments: req.body.comments,
        commentCount: req.body.commentCount,
        buyerCount: req.body.buyerCount,
        ikenga: req.body.ikenga
    };
    return service.addBook(req, res, data);
}

exports.deleteBook = function (req, res){
    var data = {_id: req.params.id};
    return service.deleteBook(req, res, deleteBook);
}

exports.updateBook = function (req, res){
    var id = req.params.id;
    var options = req.body;
    return service.updateBook(req, res, id, options);
}

exports.getBookById = function (req, res){
    var id = req.params.id;
    return service.getBookById(req, res, id);
}

exports.getAllBooks = function (req, res){
return service.getAllBooks(req, res);
}

exports.getBookByParam = function (req, res){
     var options = req.query;
     return service.getBookByParam(req, res, options);
}