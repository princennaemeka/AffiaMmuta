var model = require('../Models/User');
var libraryService = require('../Services/LibraryService');
const Joi = require('joi');
const bcrypt = require('bcrypt');

//this should run after successful book(s) purchase
exports.addBookToLibrary = function(req, res){
    var data = {

    };
    //make call to library  service
}

exports.readBook = function(req, res){
    var book = req.params.book;
    //get book from book service
}

exports.viewLibrary = function(req, res){
    var user = req.session.user;
    return libraryService.getBooks(req, res, {user: user});
    //get library from library service
}

exports.clapForABook = function(req, res){
    var book = req.params.book;
    //make call to book service
}