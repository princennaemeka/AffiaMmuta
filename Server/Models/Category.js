var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    categoryTitle: String,
});

module.exports = mongoose.model('Category', CategorySchema);