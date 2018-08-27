//require('dotenv').config();//
var model = require('../Models/Payment');
var service = require('../Services/PaymentService');
//var crypto = require('crypto');
//var secret = process.env.Secret_Key;

exports.addPayment = function (req, res){
    var data = {
        user: req.body.user,
        book: req.body.book,
    };
  //validate event
//  var hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
  //if (hash == req.headers['x-paystack-signature']) {
  	// Retrieve the request's body
   // var event = req.body;
    // Do something with event  
  //}
 // res.send(200);
    return service.addPayment(req, res, data);
}

exports.deletePayment = function (req, res){
    var data = {_id: req.params.id};
    return service.deletePayment(req, res, data);
}

exports.getPaymentById = function (req, res){
    var id = req.params.id;
    return service.getPaymentById(req, res, id);
}

exports.getPayments = function(req, res){
    return service.getAllPayment(req, res, {})
}