var express = require('express');
var router = express.Router();
var profileController = require('../../Server/Controllers/ProfileController');

/* GET users listing. */
router.get('/library', profileController);
router.get('/logout', profileController);
router.get('/read');

module.exports = router;