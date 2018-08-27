var repository = require('../repositories/PaymentRepository');
var model = require('../Models/Payment');

exports.addPayment = function (req, res, data){
    repository.add(data, function(err){
        if (err) res.json ({err: err, message: 'error, payment could not added'});
        res.json ({message: 'payment added successfully'});
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