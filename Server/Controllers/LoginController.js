var User = require('../Models/User');
var service = require('../Services/UserService');
const bcrypt = require('bcrypt');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

//Hash password and compare with existing data
function isValidPassword(user, password){
    return bcrypt.compareSync(password, user.password);
}

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

exports.loginUser = function(req, res){
   passport.authenticate('login', {
       successRedirect: '/users',
       failureRedirect: '/login'
   });
   try{
    passport.use('login', new LocalStrategy(
            User.findOne({email: req.body.email}, function (err, user) {
                if (err) { res.json({err: err}); }
                //res.json({message: 'login success !'});
                if (!user) {
                    res.json({ message: 'Incorrect username.' });
                }
                if (!isValidPassword(user, req.body.password)) {
                    res.json({ message: 'Incorrect password.' });
                }
                if (user && isValidPassword(user, req.body.password)){
                    res.redirect('/users');
                }
                //return res.json({user: user});
                
            }), function(email, password, done){
                console.log(email);
            }
        ))}catch(exception){
       console.log(exception);
   }
}