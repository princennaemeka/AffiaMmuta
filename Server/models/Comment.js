var mongoose = require ('mongoose');


var CommentSchema = mongoose.Schema({
    time: Date,
    commentBody: String,
    book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Comment', CommentSchema);