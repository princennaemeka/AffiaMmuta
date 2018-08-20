var model = require ('../models/Library');
var BaseRepository = require ('../repositories/BaseRepository');

function LibraryRepository(){

};
LibraryRepository.prototype = BaseRepository(model);
module.exports = new LibraryRepository();