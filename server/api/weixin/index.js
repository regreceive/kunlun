'use strict';

var express = require('express');
var validateURL = require('./validateURL');

var router = express.Router();

router.get('/', validateURL);

module.exports = router;
