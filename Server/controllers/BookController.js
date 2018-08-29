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
        comments: [],
        commentCount: 0,
        buyerCount: 0,
        ikenga: 0,
        category: req.body.category,
        description: req.body.description
    };

    //Use a promise based method to upload content before saving url to database
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
    try {
        var data = {_id: req.params.id};
        return service.deleteBook(req, res, data);
    } catch (exception){
        console.log("Error : "+exception);
    }
}

exports.updateBook = function (req, res){
    try {
        var id = req.params.id;
        var options = req.body;
        return service.updateBook(req, res, id, options);
    } catch (exception){
        console.log("Error : "+exception);
    }
}

exports.getBookById = function (req, res){
    try {
        var id = req.params.id;
        return service.getBookById(req, res, id);
    } catch (exception) {
        console.log("Error : "+exception);
    }
}

exports.getBooks = function (req, res,){
    try {
        return service.getAllBooks(req, res, {});
    } catch(exception) {
        console.log("Error : "+exception);
    }
}

exports.getBooksByCategory = function(req, res){
    try {
        return service.getAllBooks(req, res, {category: req.params.category});
    } catch (exception){
        console.log("Error : "+exception);
    }
}

exports.getBookByParam = function (req, res){
    try {
        var options = req.query;
        return service.getBookByParam(req, res, options);
    } catch (exception){
        console.log("Error : "+exception);
    }
}

exports.getLatestBooks = function(req, res){
    try {
        return service.getRecentBooks(req, res, Number.parseInt(req.query.count));   
    } catch (exception){
        console.log("Error : "+exception);
    }
}
