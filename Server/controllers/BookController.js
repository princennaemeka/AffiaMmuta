var model = require ('../models/Book');
var service = require ('../services/BookService');

exports.addBook = function (req, res){
    var data = {
        author: req.body.author,
        title: req.body.title,
        price: req.body.price,
        bookImage: req.files[0].path,
        bookContent: req.files[1].path,
        comments: req.body.comments,
        commentCount: req.body.commentCount,
        buyerCount: req.body.buyerCount,
        ikenga: req.body.ikenga,
    };
    return service.addBook(req, res, data);
}

exports.deleteBook = function (req, res){
    var data = {_id: req.params.id};
    return service.deleteBook(req, res, data);
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

exports.getBooks = function (req, res,){
return service.getAllBooks(req, res);
}

exports.getBookByParam = function (req, res){
     var options = req.query;
     return service.getBookByParam(req, res, options);
}