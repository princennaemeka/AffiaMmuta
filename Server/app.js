var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fbLogin = require('./oauthLogin');
//
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./config');
//
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods: POST, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ibesoft:agwuibeogele7@ds239359.mlab.com:39359/affiammuta');
//---
app.get('/connect/facebook', passport.authorize('facebook'));

passport.use(new FacebookStrategy({
    clientID: config.facebook.AppID,
    clientSecret: config.facebook.Secret,
    callbackURL: "http://localhost:3000/users/",
    profileFields: ['id', 'emails', 'name']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    //create new user here, then redirect to market place
    }
));
//---

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
