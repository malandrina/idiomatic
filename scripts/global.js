$(document).ready(function() {
  var $searchButton = $('#search-button');
  var $translations = $('.translations');

  if ($searchButton && $translations) {
    $searchButton.on('click', function(e) {
      e.preventDefault();
      var $term = $('#term').val();

      if ($term) {
        $.ajax({
          url: '/translations',
          method: 'POST',
          data: { term: $term },
          success: function(data, status, xhr) {
            var translations = data.foo;
            $translations.html(translations);
            $translations.show();
          }
        });
      };
    });
  };
});
