var repository = require('../repositories/CategoryRepository');
var model = require('../Models/Category');

exports.addCategory = function (req, res, data){
    repository.add(data, function(err){
        if (err) res.json ({err: err, message: 'error, category could not added'});
        res.json ({message: 'category added successfully'});
    });
}