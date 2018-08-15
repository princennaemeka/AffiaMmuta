var express = require('express');
var router = express.Router();
var passport = require('passport');
var checkAuth = require('../checkauth');

/* GET home page. */
router.get('/',checkAuth.isAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;