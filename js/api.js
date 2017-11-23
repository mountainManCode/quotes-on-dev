(function($) {

  $('#new-quote-button').on('click', function(event) {
    event.preventDefault();

    $('#quote-title').empty();
    $('#quote-content').empty();
    
    $.ajax({
       method: 'GET',
       url: api_vars.root_url + 'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1',
       data: {
          comment_status: 'closed'
       },
       
       beforeSend: function(xhr) {
          xhr.setRequestHeader( 'X-WP-Nonce', api_vars.wpapi_nonce );
       }
    
    }).done(function(data) {
      $.ajax( {
      success: (function() {
        var post = data.shift();
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);
        console.log(post);
      })
    })

     })
    // .fail(function(err){
    //   throw err;
    // })
 });

})(jQuery);