var repository = require('../repositories/CategoryRepository');
var model = require('../Models/Category');

exports.addCategory = function (req, res, data){
    repository.add(data, function(err){
        if (err) res.json ({err: err, message: 'error, category could not added'});
        res.json ({message: 'category added successfully'});
    });
}

exports.deleteCategory = function (req, res, id){
    repository.getById(id, function(err){
        if (err) res.json ({err: err, message: 'errror, category could not be deleted'});
        res.json ({message: 'category deleted successfully'});
    });
}