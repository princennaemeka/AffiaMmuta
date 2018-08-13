var express = require('express');
var app = express();
var router = express.Router();
var loginController = require('../../Server/Controllers/LoginController');
var passport = require('../socialMediaLogin');

/* GET users listing. */
router.post('/', loginController.loginUser);
router.get('/facebook', passport.authenticate('facebook', { scope : 'public_profile,email,user_friends' }));
router.get('/fb/callback', passport.authenticate('facebook', {successRedirect: '/users', failureRedirect:'/login'}));

module.exports = router;