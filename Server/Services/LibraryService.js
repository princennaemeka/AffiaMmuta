var repository = require ('../repositories/BookRepository');
var model = require('../models/Library');

exports.addBook = function (req, res, data){
    repository.add(data, function(err){
        if (err) {res.json ({err: err, message: 'error, book could not be added'});} else {
        res.json ({message: 'book created successfully'});}
    });
}

exports.getBooks = function(req, res, options){
    repository.getAll(options, function(err, userLibrary){
        if (err) {
            res.json({err: err, message: 'error, user library could not be fetched'});
        } else {
            res.json({library: userLibrary});
        }
    });
}