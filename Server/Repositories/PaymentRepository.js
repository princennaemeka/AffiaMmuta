var model = require('../Models/Payment');
var BaseRepository = require('../Repositories/BaseRepository');

function PaymentRepository(){

};
PaymentRepository.prototype = BaseRepository(model);
module.exports = new PaymentRepository();