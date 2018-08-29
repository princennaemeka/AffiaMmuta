var repository = require('../Repositories/UserRepository');
const bcrypt = require('bcrypt');
var mailer = require('../mailer');

exports.addUser = function(req, res, data){
    repository.add(data, function(err, user){
        if (err) res.json({err:err, message:'error, user could not be created.'});
        res.json({message: 'user created successfully'});
        var button = `Go to Market`;
        var body = 'Thank you for joining us! You will soon be receiving newsletters and updates crafted by the AffiaMutta team to speed up your learning and experience. We are committed to increase igbo literacy with technology. Happy Learning'
        mailer.sendMail(user.email, 'Welcome to Affia-Mmuta', user.username, body, button);
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
    repository.getAll({}, '-password -__v', function(err, data){
        if (err) res.json({err:err, message:'sorry an error occured while retrieving records'});
        res.json(data);
    });
}

exports.getUsersByParam = function(req, res, options){
    repository.getAll(options, function(err, users){
        if (err) res.json({err:err, message:'error, could not retrieve user record'});
        res.json(users);
    });
}
