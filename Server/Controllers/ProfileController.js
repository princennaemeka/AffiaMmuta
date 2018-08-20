var model = require('../Models/User');
var libraryService = require('../Services/LibraryService');
var bookService = require('../Services/BookService');
const Joi = require('joi');
const bcrypt = require('bcrypt');

//this should run after successful book(s) purchase
exports.addBookToLibrary = function(req, res){
    var data = {
        user: req.body.user,
        books: req.body.books
    };
    return libraryService.addBookToLibrary(req, res, data);
    //make call to library service
}

exports.readBook = function(req, res){
    var book = req.query.book;
    return bookService.getBookById(req, res, book);
    //get book from book service
}

exports.viewLibrary = function(req, res){
    var user = req.query.user;
    return libraryService.getBooksFromLibrary(req, res, {user: user});
    //get library from library service
}

exports.clapForABook = function(req, res){
    return bookService.increaseClap(req, res, req.query.book, Number.parseInt(req.query.ikenga));
    //make call to book service
}