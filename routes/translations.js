var wordReference = require('word-reference');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var entries = function(translationsResponse) {
    var principalTranslations = translationsResponse.term0.PrincipalTranslations;
    var entries = translationsResponse.term0.Entries;
    return principalTranslations || entries;
  };
  var term = req.query.term;

  if (term) {
    var translationsDeferred = wordReference.translate({ to: 'es', from: 'en', term: term });
    translationsDeferred.done(function(translationsResponse) {
      var translations = entries(translationsResponse);
      if (translations) {
        var results = Object.keys(translations).map(function(key) {
          return translations[key].FirstTranslation.term;
        });
        res.json(results);
      };
    });
  };
});

module.exports = router;
