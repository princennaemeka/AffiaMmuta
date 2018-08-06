var model = require ('../models/Book');

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
}

exports.deleteBook = function (req, res){
    var data = {_id: req.params.id};
}

exports.updateBook = function (req, res){
    var id = req.params.id;
    var options = req.body;
}

exports.getBookById = function (req, res){
    var id = req.params.id;
}

exports.getAllBooks = function (req, res){

}

exports.getBookByParam = function (req, res){
     var options = req.query;
}