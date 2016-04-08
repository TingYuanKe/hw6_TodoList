var express = require('express'),
    router = express.Router(),
    index = require('../controllers/index.js');
     submit = require('../controllers/submit.js'),
    input = require('../controllers/input.js'),


	router.route('/').get(index);

router.route(`/submit`).post(input);

module.exports = router;
