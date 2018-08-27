var model = require('../Models/Category');
var service = require('../Services/CategoryService');

exports.addCategory = function (req, res){
    var data = {
        book: req.body.book,
        title: req.body.title
    };
    return service.addCategory(req, res, data);
}

exports.deleteCategory = function (req, res){
    var data = {_id: req.params.id};
    return service.deleteCategory(req, res, data);
    
}