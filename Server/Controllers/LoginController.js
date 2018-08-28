var User = require('../Models/User');
var service = require('../Services/UserService');
const bcrypt = require('bcrypt');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

//Hash password and compare with existing data
function isValidPassword(user, password){
    return bcrypt.compareSync(password, user.password);
}

passport.serializeUser(function(user, done) {
    done(null, user._id);
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
                if (user && isValidPassword(user, req.body.password)){
                    //authentication was successful
                    //req.session.user = user._id;
                    res.json({ userId:user._id, message: 'Login successful.'});
                } else {
                    res.json({ message: 'Incorrect username or password.' });
                }
            }), function(email, password, done){
                console.log(email);
            }
        ))
    } catch(exception){
       console.log(exception);
   }
}