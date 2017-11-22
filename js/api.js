(function($) {

  $('#new-quotes-button').on('click', function(event) {
    event.preventDefault();
    
    $.ajax({
       method: 'post',
       url: api_vars.rest_url + 'wp/v2/posts/' + api_vars.post_id,
       data: {
          $.each(data.results ) => {
            return data;
          }
       },
       
       beforeSend: function(xhr) {
          xhr.setRequestHeader( 'X-WP-Nonce', api_vars.wpapi_nonce );
       }
    
    }).done( function() {
       alert('Success! Comments are closed for this post.');
    });
 });

})(jQuery);