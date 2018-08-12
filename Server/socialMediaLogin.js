var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./config');

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
    callbackURL: "http://localhost:3000/fb/callback",
    passReqToCallback:true,
    profileFields:['id','name','emails']
  }, function(req, accessToken, refreshToken, profile, done) {
    process.nextTick(function(){
      console.log(profile);
      done(null, profile);
    })
  }
));

module.exports = passport;