var repository = require ('../repositories/BookRepository');
var model = require('../models/Book');
var cloud = require('../Services/CloudinaryService');

exports.addBook = function (req, res, data){
    repository.add(data, function(err){
        if (err) {res.json ({err: err, message: 'error, book could not be added'});} else {
        res.json ({message: 'book created successfully'});}
    });
}

exports.deleteBook = function (req, res, id){
    repository.getById(id, function(err, data)
    {
       try {
           if (data !== null){
               cloud.deleteFromCloud(data.bookImageID).then(()=>{
                   cloud.deleteFromCloud(data.bookContentID).then(()=>{
                       repository.delete(id, function(err){
                            res.json({message: "book deleted successfully"});   
                       });
                   });
               });
           } else {
               res.json({message: "Book not found, delete not successful"});
           }
       } catch(exception){

       }
    })        
};

exports.updateBook = function (req, res, id, options){
    repository.update(id, options, function (err){
        if (err) res.json ({err: err, message: 'error, book could not be updated'});
        res.json ({message: 'book updated successfully'});
    });
}

exports.getBookById = function (req, res, id){
    repository.getById(id, function (err, Book){
        if (err) res.json ({err: err, message: 'error, coulde not get book by id'});
        res.json ({book: Book});
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
        res.json(Books);
    });
}
