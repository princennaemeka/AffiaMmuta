var mongoose = require('mongoose');

var CartSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  books: [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}],
});

module.exports = mongoose.model('Cart', CartSchema);