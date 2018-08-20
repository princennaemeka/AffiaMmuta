var express = require('express');
var router = express.Router();
var profileController = require('../../Server/Controllers/ProfileController');
var checkAuth = require('../checkauth');

/* GET users listing. */
router.get('/library', checkAuth.isAuthenticated, profileController.viewLibrary);
router.post('/library/add', profileController.addBookToLibrary);
router.get('/read/:book', profileController.readBook);
router.post('/read/:book/clap', profileController.clapForABook);

module.exports = router;