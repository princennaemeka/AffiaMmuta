var model = require('../Models/Review');
var BaseRepository = require('../Repositories/BaseRepository');

function ReviewRepository(){

}
ReviewRepository.prototype = BaseRepository(model);
module.exports = new ReviewRepository();