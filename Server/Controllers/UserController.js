var model = require('../Models/User');
var service = require('../Services/UserService');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().required(),
    email: Joi.string().email()
});

exports.getUsers = function(req, res){
    return service.getAllUsers(req, res);
}
exports.addUser = function(req, res){
    var data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    Joi.validate({username:data.username, email:data.email, password:data.password}, schema, function (err) {
        if (err) {
            return res.json ({err:err.message});
        } else {
            bcrypt.hash(data.password, 10, function(err, hash) {
                data.password = hash;
                return service.addUser(req, res, data);
              });
        }
    });
}
exports.deleteUser = function(req, res){
    var data = {_id:req.params.id};
    return service.deleteUser(req, res, data);
}
exports.getUserByParam = function(req, res){
    var options = req.query;
    return service.getUsersByParam(req, res, options);
}
exports.updateUser = function(req, res){
    var id = req.params.id
    var options = req.body;
    Joi.validate({username:options.username, email:options.email, password:options.password}, schema, function(err){
        if (err) {
            return res.json({err:err.message});
        } else {
            bcrypt.hash(options.password, 10, function(err, hash) {
                options.password = hash;
                return service.updateUser(req, res, id, options);
              });
        }
    });
}
exports.updatePassword = function(req, res){
    var data = req.body;
    // Load hash from your password DB.
    var options = {_id: id};
    return service.getUsersByParam(req, res, options); 
    
}