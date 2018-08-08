var repository = require('../Repositories/UserRepository');
const bcrypt = require('bcrypt');
var mailer = require('../mailer');

exports.addUser = function(req, res, data){
    repository.add(data, function(err, user){
        if (err) res.json({err:err, message:'error, user could not be created.'});
        res.json({message: 'user created successfully'});
        var button = `<a class="button-a button-a-primary" href="https://affiammuta.herokuapp.com/" style="background: #85A64B; border: 1px solid #8db34d; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; display: block; border-radius: 4px;">Visit Marketplace</a>`;
        var body = 'Thanks for joining us! You’ll be receiving newsletters and updates crafted by the AffiaMutta team to speed up your learning and experience. Nno !'
        mailer.senMail(user.email, 'Welcome to Affia-Mmuta', user.username, body, button);
    });
}
exports.deleteUser = function(req, res, data){
    repository.delete(data, function(err){
        if (err) res.json({err:err, message:'user could not be deleted'});
        res.json({message: 'user deleted successfully'});
    });
}

exports.updateUser = function(req, res, id, options){
    repository.update(id, options, function(err){
        if (err) res.json({err:err, message:'error, user record could not be updated'});
        res.json({message: 'user record updated successfully'});
    });
}

exports.updatePassword = function(req, res, id, data){
    repository.getById(id, function(err, user){
        if (err) res.json({err:err, message:'error, could not update password'});
        bcrypt.compare(data.newPassword, user.password, function(err, res) {
            if (res == true){
                bcrypt.hash(data.newPassword, 10, function(err, hash) {
                    user.password = hash;
                });
            }
        });
        res.json(user);
    });
    repository.update(id, data, function(err){
        if (err) res.json({err: err, message:'error, password not updated'});
        res.json({message: 'password updated successfully'});
    });
}

exports.getUserById = function(req, res, id){
    repository.getById(id, function(err, user){
        if (err) res.json({err:err, message:'error, could not get user by ID'});
        res.json(user);
    });
}

exports.getAllUsers = function(req, res){
    repository.getAllUsers({}, '-password -__v', function(err, data){
        if (err) res.json({err:err, message:'sorry an error occured while retrieving records'});
        res.json(data);
    });
}

exports.getUsersByParam = function(req, res, options){
    repository.getAllUsers(options, function(err, users){
        if (err) res.json({err:err, message:'error, could not retrieve user record'});
        res.json(users);
    });
}
