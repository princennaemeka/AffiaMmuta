var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
    title: req.body.title
});

module.exports = mongoose.model('Category', CategorySchema);