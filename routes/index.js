var wordReference = require('word-reference');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Idiomatic' });
});

router.get('/translations', function(req, res, next) {
  var term = req.query.term;

  var translationsDeferred = wordReference.translate({ to: 'es', from: 'en', term: term });
  translationsDeferred.done(function(translationsResponse) {
    var principalTranslations = translationsResponse.term0.PrincipalTranslations;
    var translations = Object.keys(principalTranslations).map(function(key) {
      return principalTranslations[key].FirstTranslation.term;
    });
    res.json(translations);
  });
});

module.exports = router;
