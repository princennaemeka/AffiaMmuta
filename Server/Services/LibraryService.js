var model = require('../Models/Library');
var bookModel = require('../Models/Book');

//Adds new book to user's library and update book's buyersCount
exports.addBookToLibrary = function (req, res, data){
    model.findOne({user: data.user}, function(err, userData){
        if (err) {res.json({err: err, message: "error, book could not be added to user library"})} else {
            if (userData !== null){
                userData.books.push(data.books);
                userData.save();
                bookModel.findById(data.books, function(err, book){
                    book.buyersCount++;
                    book.save();
                });
            } else {
                model.create(data);
            }
            res.json({message: 'book added successfully to user library'});
        }
    });
}

exports.getBooksFromLibrary = function(req, res, options){
    model.findOne(options, function(err, userData){
        if (err) {
            res.json({err: err, message: 'error, user library could not be fetched'});
        } else {
            res.json({library: userData});
        }
    }).populate('books');
}