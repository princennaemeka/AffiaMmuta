var model = require ('../models/Book');
var BaseRepository = require ('../repositories/BaseRepository');

function BookRepository(){

};
BookRepository.prototype = BaseRepository(model);
module.exports = new BookRepository();