var mongoose = require('mongoose');

var PaymentSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}
});

module.exports = mongoose.model('Payment', PaymentSchema);