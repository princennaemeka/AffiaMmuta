var mongoose = require('mongoose');

//Creating a Schema for Book
var BookSchema = mongoose.Schema({
    author: String,
    title: String,
    price: Number,
    bookImage: String,
    bookContent: String,
    comments:[{type: mongoose.Schema.Types.ObjectId, ref: 'comment'}],
    commentCount: {type: Number, default: 0},
    buyersCount: {type: Number, default: 0},
    ikenga: {type: Number, default: 0},
});

module.exports = mongoose.model('Book', BookSchema);