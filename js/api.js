(function($) {

  /* New Quote Generator */
  $('#new-quote-button').on('click', function(event) {
    event.preventDefault();

    $('#quote-title').empty();
    $('#quote-content').empty();
    
    $.ajax({
       method: 'GET',
       url: api_vars.root_url + 'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1',
      //  data: {
      //     // comment_status: 'closed'
      //  },
       
      //  beforeSend: function(xhr) {
      //     xhr.setRequestHeader( 'X-WP-Nonce', api_vars.wpapi_nonce );
      //  }
    
    }).done(function(data) {
        
          var post = data.shift();  
          history.pushState(null, null, post.slug);
          $('#quote-title').text(post.title.rendered);
          $('#quote-content').html(post.content.rendered);
    $('.source').html('<a href="' + post._qod_quote_source_url + '">' + post._qod_quote_source + '</a>');
      })
    })

  /*Submit a Quote */
    $('#new-quote-button').on('click', function(event) {
      event.preventDefault();
  
      $('#quote-title').empty();
      $('#quote-content').empty();
      
      $.ajax({
         method: 'GET',
         url: api_vars.root_url + 'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1',
        //  data: {
        //     // comment_status: 'closed'
        //  },
         
        //  beforeSend: function(xhr) {
        //     xhr.setRequestHeader( 'X-WP-Nonce', api_vars.wpapi_nonce );
        //  }
      
      }).done(function(data) {
          
            var post = data.shift();  
            history.pushState(null, null, post.slug);
            $('#quote-title').text(post.title.rendered);
            $('#quote-content').html(post.content.rendered);
      $('.source').html('<a href="' + post._qod_quote_source_url + '">' + post._qod_quote_source + '</a>');
        })
      })
  

})(jQuery);