$(document).ready(function() {
  var $searchButton = $('#search-button');
  var $translations = $('.translations');

  if ($searchButton && $translations) {
    $searchButton.on('click', function(e) {
      e.preventDefault();
      var $term = $('#term').val();

      if ($term) {
        $.ajax({
          url: '/translations?' + 'term=' + $term,
          method: 'GET',
          success: function(data, status, xhr) {
            $translations.html('');
            var translations = data;
            translations.forEach(function(translation) {
              return $translations.append('<p>' + translation + '</p>');
            });

            $translations.show();
          }
        });
      };
    });
  };
});
