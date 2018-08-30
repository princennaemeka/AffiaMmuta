var repository = require('../Repositories/CategoryRepository');
var model = require('../Models/Category');

exports.addCategory = function (req, res, data){
    repository.add(data, function(err){
        if (err) res.json ({err: err, message: 'error, category could not added'});
        res.json ({message: 'category added successfully'});
    });
}

exports.deleteCategory = function (req, res, id){
    repository.delete(id, function(err, data){
        if (err) res.json ({err: err, message: 'errror, category could not be deleted'});
        res.json ({message: 'category deleted successfully'});
    });
}

exports.getCategoryById =  function (req, res, id){
    repository.getById(id, function(err, Category){
        if (err) res.json ({err: err, message: 'error, category could not be retrieved by id'});
        res.json ({category: Category});
    });
}

exports.getAllCategories = function (req, res, options){
    repository.getAll(options, function(err, Categories){
        if (err) res.json ({err: err, message: 'error, could not retrieve categories'});
        res.json (Categories);
    });
}