var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    books: [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}],
    categorytitle: String,
});

exports = mongoose.model('Category', CategorySchema);