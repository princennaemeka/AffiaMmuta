var model = require('../models/Comment');
var BaseRepository = require('../repositories/BaseRepository');

function CommentRepository(){

};
CommentRepository.prototype = BaseRepository(model);
module.exports = new CommentRepository();