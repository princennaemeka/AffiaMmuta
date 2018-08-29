require('dotenv').config();
var express = require('express');
var router = express.Router();
var model = require('../Models/Payment');
var PaymentController = require('../Controllers/PaymentController');
var crypto = require('crypto');
var secret = process.env.Secret_Key;

router.post('/create', PaymentController.addPayment);
router.get('/:id', PaymentController.getPaymentById);

module.exports = router;