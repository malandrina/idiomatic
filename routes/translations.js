var wordReference = require('word-reference');
var express = require('express');
var router = express.Router();
var Translations = require('../services/translations');

router.get('/', function(req, res, next) {
  var term = req.query.term;

  if (term) {
    var translationsDeferred = wordReference.translate(
      { to: 'es', from: 'en', term: term }
    );

    translationsDeferred.done(function(translationsResponse) {
      if (translationsResponse.errors) {
        res.status(502).send('Bad Gateway');
      } else {
        var translations = new Translations()
        res.json(translations.fromResponse(translationsResponse));
      }
    });
  };
});

module.exports = router;
