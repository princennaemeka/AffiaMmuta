var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
   username: String,
   email: { type: String, unique: true},
   password: String
});

module.exports = mongoose.model('User', UserSchema);