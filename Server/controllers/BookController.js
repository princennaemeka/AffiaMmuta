var model = require ('../models/Book');
var service = require ('../services/BookService');
var cloud = require('../Services/CloudinaryService');

exports.addBook = function (req, res){
    var data = {
        author: req.body.author,
        title: req.body.title,
        price: req.body.price,
        bookImage: req.files[0].path,
        bookImageID: '',
        bookContent: req.files[1].path,
        bookContentID: '',
        comments: req.body.comments,
        commentCount: req.body.commentCount,
        buyerCount: req.body.buyerCount,
        ikenga: req.body.ikenga,
    };

    //Use a promise based method to upload content before adding url to database
    try {
        cloud.uploadToCloud(data.bookImage).then((result)=>{
            data.bookImage = result.url;
            data.bookImageID = result.ID;
            cloud.uploadToCloud(data.bookContent).then((result)=>{
                data.bookContent = result.url;
                data.bookContentID = result.ID;
                return service.addBook(req, res, data);
        });
    });
    } catch (exception){
        console.log("Error while adding book -> " + exception);
    }
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