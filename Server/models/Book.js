var mongoose = require('mongoose');

//Creating a Schema for Book
var BookSchema = mongoose.Schema({
    author: String,
    title: String,
    price: Number,
    bookImage: String,
    bookImageID: String,
    bookContent: String,
    bookContentID: String,
    comments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    commentCount: {type: Number, default: 0},
    buyersCount: {type: Number, default: 0},
    ikenga: {type: Number, default: 0},
    category: String,
    description: String
});

module.exports = mongoose.model('Book', BookSchema);