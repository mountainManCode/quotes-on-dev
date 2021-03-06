(function($) {

  /* New Quote Generator */
  $('#new-quote-button').on('click', function(event) {
    event.preventDefault();

    $('.source').empty();

    $.ajax({
       method: 'GET',
       url: api_vars.root_url + 'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1',
    
    }).done(function(data) {
        
          var post = data.shift();  
          history.pushState(null, null, post.slug);
          $('#quote-title').text(post.title.rendered).prepend('&mdash;');
          $('#quote-content').html(post.content.rendered);
          
          if (post._qod_quote_source) {
            $('.source').html(', <a href="' + post._qod_quote_source_url + '">' + post._qod_quote_source + '</a>');
          }

      }).fail(function() {
        return 'Your request can not be processed.';
      })
    });

  /*Submit a Quote */
  $('#submit-quote-button').on('click', function(event) {
    event.preventDefault();

      // Variables being called in ajax
    var quoteAuthor = $('#quote-author').val();
    var quoteContent = $('#quote-content').val();
    var quoteSource = $('#quote-source').val();
    var quoteSourceUrl = $('#quote-source-url').val();

    $.ajax({
       method: 'POST',
       url: api_vars.root_url + 'wp/v2/posts',
       data: {
        'title': quoteAuthor,
        'content': quoteContent,
        'status': 'publish',
        '_qod_quote_source': quoteSource, 
        '_qod_quote_source_url': quoteSourceUrl
      },
        
      beforeSend: function(xhr) {
        xhr.setRequestHeader( 'X-WP-Nonce', api_vars.nonce );
      }

    }).done( function() {
      $('.submit-success-message').html('Your quote has been submitted, thanks!');
      $('.submit-success-message').show;
    }).always(function() {
      $('#quote-submission-form').trigger('reset');
    }).fail(function() {
      return 'Your request can not be processed.';
    })
  });
})(jQuery);
