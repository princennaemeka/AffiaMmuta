var repository = require ('../repositories/BookRepository');
var model = require('../models/Book');
var fs = require('fs');

exports.addBook = function (req, res, data){
    repository.add(data, function(err){
        if (err) res.json ({err: err, message: 'error, book could not be added'});
        res.json ({message: 'book created successfully'});
    });
}

exports.deleteBook = function (req, res, id){
    repository.getById(id, function(err, data)
    {
        if (err){ res.json ({err: err, message: 'error, book could not be found'});
    } else {
        try {
            fs.unlink(data.bookImage, function(err){
                if (err) {
                    res.json ({err:'thumbnail could not be deleted'});
                    res.json ({message:'thumbnail uploaded succesfully'})
                }
                fs.unlink(data.bookContent, function(err){
                if (err) {
                    res.json({err: 'pdf could not be deleted'});
                } else {
                repository.delete(data, function(err){
                if(err)res.json({err: "book could not be deleted"});
                    res.json({message: "book deleted successfully"})
                })
            } 
        })
    })
        } catch (exception){
            console.log('Error: '+exception);
        }
    }        
});
}

exports.updateBook = function (req, res, id, options){
    repository.update(id, options, function (err){
        if (err) res.json ({err: err, message: 'error, book could not be updated'});
        res.json ({message: 'book updated successfully'});
    });
}

exports.getBookById = function (req, res, id){
    repository.getById(id, function (err, Book){
        if (err) res.json ({err: err, message: 'error, coulde not get book by id'});
        res.json (Book);
    });
}

exports.getBookByParam = function (req, res, options){
    repository.getAll(options, function (err){
        if (err) res.json ({err: err, message: 'error, could not not retrieve book record'});
    });
}

exports.getAllBooks = function(req, res){
    repository.getAll({}, '-__v', function(err, Books){
        if (err) res.json({err:err, message:'error, could not retrieve posts'});
        res.json (Books);
    });
}
