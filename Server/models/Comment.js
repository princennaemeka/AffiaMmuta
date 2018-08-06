var mongoose = require ('mongoose');

var CommentSchema = moongose.Schema({
    time: Date,
    commentBody: String,
    book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
});

module.exports = mongoose.model('Comment', CommentSchema);