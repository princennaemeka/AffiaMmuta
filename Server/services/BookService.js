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
        if (err) res.json ({err: err, message: 'error, could not get book by id'});
        res.json ({book: Book});
    });
}

exports.getBookByParam = function (req, res, options){
    repository.getAll(options, function (err){
        if (err) res.json ({err: err, message: 'error, could not not retrieve book record'});
    });
}

exports.getAllBooks = function(req, res, options){
    repository.getAll(options, '-__v', function(err, Books){
        if (err) res.json({err:err, message:'error, could not retrieve books'});
        res.json(Books);
    });
}
//Return latest books from DB based on provided count
exports.getRecentBooks = function(req, res, count){
    repository.getRecentBooks(count, {}, '-__v', function(err, books){
        if (err) res.json({err:err, message:'error, could not get latest books'});
        res.json(books);
    });
}

exports.increaseClap = function(req, res, id, ikenga){
    model.findById(id, function(err, book){
        if (err) {
            res.json({err: err, message: 'error, clap not successful'});
        } else {
            book.ikenga = book.ikenga + ikenga;
            book.save();
            res.json({message: 'Clap increased'});
        }
    });
}

exports.searchBooks = function(req, res, data){
    repository.get(data, function(err, Book){
        if (err) res.json({err: err, message: 'error, book not available'});
         else {
             res.json (Book);
            }
        });
}
        


