var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');

var indexRouter = require('./routes/index');
var booksRouter = require('./routes/BookRoute');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var profileRouter = require('./routes/profile');
var paymentRouter = require('./routes/PaymentRoute');
var commentRouter = require('./routes/CommentRoute');
var categoryRouter = require('./routes/CategoryRoute');
var reviewRouter = require('./routes/review');

var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//configure our express-session
app.use(session({
    secret: 'bAkAssi|>enn|$$\/[@isthe$@(r@+againsth@(k$',
    saveUninitialized: false,
    resave: false
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/AffiaMmuta', { useNewUrlParser: true });
//mongoose.connect('mongodb://affiammuta:affiammuta000@ds239359.mlab.com:39359/affiammuta', { useNewUrlParser: true });

// configure passport sessions
app.use(passport.initialize());
app.use(passport.session());

//enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods: POST, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
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
app.use('/login', loginRouter);
app.use('/Books', booksRouter);
app.use('/profile', profileRouter);
app.use('/payment', paymentRouter);
app.use('/comments', commentRouter);
app.use('/category', categoryRouter);
app.use('/reviews', reviewRouter);

module.exports = app;