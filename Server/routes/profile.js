var express = require('express');
var router = express.Router();
var profileController = require('../../Server/Controllers/ProfileController');
var checkAuth = require('../checkauth');

/* GET users listing. */
router.get('/library', profileController.viewLibrary);
router.post('/library/add', profileController.addBookToLibrary);
router.get('/read', profileController.readBook);
router.get('/read/clap', profileController.clapForABook);

module.exports = router;