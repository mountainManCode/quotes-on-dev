(function($) {

  $('#new-quote-button').on('click', function(event) {
    event.preventDefault();
    
    $.ajax({
       method: 'GET',
       url: api_vars.root_url + 'wp/v2/posts/',
       data: {
          comment_status: 'closed'
       },
       
       beforeSend: function(xhr) {
          xhr.setRequestHeader( 'X-WP-Nonce', api_vars.wpapi_nonce );
       }
    
    }).done(function() {
      $('.content-area').append('<h2>Hello</h2>');
      //  alert('Success! Comments are closed for this post.');
    }).fail(function(err){
      throw err;
    })
 });

})(jQuery);