var mongoose = require('mongoose');

var ReviewSchema = mongoose.Schema({
   reviewBody: String,
});

module.exports = mongoose.model('Review', ReviewSchema);