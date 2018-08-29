var model = require('../models/Category');
var service = require('../Services/CategoryService');

exports.addCategory = function (req, res){
    var data = {
        categoryTitle: req.body.categoryTitle
    };
    return service.addCategory(req, res, data);
}

exports.deleteCategory = function (req, res){
    var data = {_id: req.params.id};
    return service.deleteCategory(req, res, data);
}

exports.getCategoryById = function (req, res){
    var id = req.params.id;
    return service.getCategoryById(req, res, id);
}    

exports.getCategory = function (req, res){
    return service.getAllCategories(req, res);
}

exports.getCategoryByParam = function (req, res){
     var options = req.query;
     return service.getCategoryByParam(req, res, options);
}