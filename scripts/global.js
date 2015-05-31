$(document).ready(function() {
  var $searchButton = $('#search-button');
  var $translations = $('.translations');

  if ($searchButton && $translations) {
    $searchButton.on('click', function(e) {
      e.preventDefault();
      var $term = $('#term').val();

      if ($term) {
        $.ajax({
          url: '/translations?term=' + $term,
          method: 'GET',
          success: function(data, status, xhr) {
            $translations.html('');
            data.forEach(function(data) {
              $translations.append('<h1>' + data.originalTerm + '</h1>');
              $translations.append('<p><strong>' + data.originalTermSense + '</strong></p>');
              $translations.append('<p>' + data.translation + '</p>');
            });

            $translations.show();
          }
        });
      };
    });
  };
});
