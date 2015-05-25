var wordReference = require('word-reference');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Idiomatic' });
});

module.exports = router;
