var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./config');
var service = require('./Services/UserService');
var User = require('./Models/User');
var repository = require('./Repositories/UserRepository');
var mailer = require('./mailer');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});    

passport.use(new FacebookStrategy({
    clientID: config.facebook.AppID,
    clientSecret: config.facebook.Secret,
    callbackURL: "http://localhost:3000/login/fb/callback",
    passReqToCallback:true,
    profileFields:['id','name','emails']
  }, function(req, accessToken, refreshToken, profile, done) {
    process.nextTick(function(){
      //console.log(profile);
      User.find({email: profile.emails[0].value}, function(err, user){
          if (!user.length){
              var newUser = {
                  email: profile.emails[0].value
                };
                if (!profile.username === 'undefined'){
                    newUser.username = profile.username;
                } else {
                    newUser.username = profile.name.givenName;
                }
                done(null, profile);
                repository.add(newUser, function(err, user){
                    if (err) done(null, false, {err:err, message:'error, user could not be created.'});
                    var button = `<a class="button-a button-a-primary" href="https://affiammuta.herokuapp.com/" style="background: #85A64B; border: 1px solid #8db34d; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; display: block; border-radius: 4px;">Visit Marketplace</a>`;
                    var body = 'Thanks for joining us! You’ll be receiving newsletters and updates crafted by the AffiaMutta team to speed up your learning and experience. Nno !'
                    mailer.sendMail(user.email, 'Welcome to Affia-Mmuta', user.username, body, button);
                    done(null, true, {message: 'user created successfully'});
                });
          } else {
              done(null, profile);
          }
      })
    })
  }
));

module.exports = passport;