Translations = function() {
  var that = {};
  var entries = function(translationsResponse) {
    var principalTranslations = translationsResponse.term0.PrincipalTranslations;
    return principalTranslations || translationsResponse.term.Entries;
  };

  that.fromResponse = function(translationsResponse) {
    var translations = entries(translationsResponse);
    if (translations) {
      var results = Object.keys(translations).map(function(key) {
        var originalTerm = translations[key].OriginalTerm.term;
        var originalTermSense = translations[key].OriginalTerm.sense;
        var translation = translations[key].FirstTranslation.term;
        return {
          "originalTerm": originalTerm,
          "originalTermSense": originalTermSense,
          "translation": translation
        }
      });
    }

    return results;
  };

  return that;
}

module.exports = Translations;
