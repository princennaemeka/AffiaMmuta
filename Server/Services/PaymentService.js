var repository = require('../Repositories/PaymentRepository');
var model = require('../Models/Payment');
var libraryService = require('../Services/LibraryService')

exports.addPayment = function (req, res, data){
    repository.add(data, function(err){
        if (err) { res.json ({err: err, message: 'error, payment could not added'}); } else {
            var bookData = {
                user: data.user,
                books: data.book
            }
            libraryService.addBookToLibrary(req, res, bookData);
        }
    });
}

exports.deletePayment = function (req, res, id){
    repository.getById(id, function(err){
        if (err) res.json ({err: err, message: 'errror, payment could not be deleted'});
        res.json ({message: 'payment deleted successfully'});
    });
}

exports.getPaymentById =  function (req, res, id){
    repository.getById(id, function(err, Payment){
        if (err) res.json ({err: err, message: 'error, payment could not be retrieved by id'});
        res.json ({payment: Payment});
    });
}

exports.getAllPayment = function (req, res, options){
    repository.getAll(options, function(err, Payments){
        if (err) res.json ({err: err, message: 'error, could not retrieve payments'});
        res.json (Payments);
    });
}