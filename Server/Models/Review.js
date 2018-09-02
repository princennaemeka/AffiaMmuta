var mongoose = require('mongoose');

var ReviewSchema = mongoose.Schema({
    name: String,
    email: String,
    reviewBody: String,
});

module.exports = mongoose.model('Review', ReviewSchema);