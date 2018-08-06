var repository = require ('../repositories/BookRepository');

exports.addBook = function (req, res, data){
    repository.add(data, function(err){
        if (err) res.json ({err: err, message: 'error, book could not be added'});
        res.json ({message: 'book created successfully'});
    });
}

exports.deleteBook = function (req, res, data){
    repository.delete(data, function(err){
        if (err) res.json ({err: err, message: 'error, book could not be found'});
        res.json ({message: 'book deleted successfully'});
    });
}

exports.updateBook = function (req, res, id, options){
    repository.update(id, options, function (err){
        if (err) res.json ({err: err, message: 'error, book could not be updated'});
        res.json ({message: 'book updated successfully'});
    });
}

exports.getBookById = function (req, res, id){
    repository.getById(id, function (err){
        if (err) res.json ({err: err, message: 'error, coulde not get book by id'});
        res.json (Book);
    });
}

exports.getBookByParam = function (req, res, options){
    repository.get(options, function (err){
        if (err) res.json ({err: err, message: 'error, could not not retrieve book record'});
    });
}
