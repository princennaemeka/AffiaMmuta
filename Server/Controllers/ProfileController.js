var model = require('../Models/User');
var libraryService = require('../Services/LibraryService');
var bookService = require('../services/BookService');

//this should run after successful book(s) purchase
exports.addBookToLibrary = function(req, res){
    var data = {
        user: req.body.user,
        books: req.body.books
    };
    try {
        return libraryService.addBookToLibrary(req, res, data);
    } catch (exception){
        console.log("Error : "+exception);
    }
}

exports.readBook = function(req, res){
    try {
        var book = req.query.book;
        return bookService.getBookById(req, res, book);
    } catch (exception){
        console.log("Error : "+exception);
    }
}

exports.viewLibrary = function(req, res){
    try {
        var user = req.query.user;
        return libraryService.getBooksFromLibrary(req, res, {user: user});
    } catch(exception){
        console.log("Error : "+exception);
    }
}

exports.clapForABook = function(req, res){
    try {
        return bookService.increaseClap(req, res, req.query.book, Number.parseInt(req.query.ikenga));
    } catch (exception){
        console.log("Error : "+exception);
    }
}