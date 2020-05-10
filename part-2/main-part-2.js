var postButton = $('button');
//var commentButton = $('#comments')
var allPosts = [];

// On submitting the form, the user's post stacks
$(postButton).on('click', function () {

  // Getting user input into HTML format
  var postHTML = $('#message').val() + '<br>' + 'Posted by: <strong> ' + $('#name').val() + '<strong>' + '<br>' + '<hr>';
  // don't forget <hr>

  // var post = $('<li></li>').
  //
  //
  // var postComments = $('<a data-target="#comments" data-toggle="collapse" id="comment-button">comments</a>').find('#comment-button').click(function() {alert('click');}).end();

  //$('.post').prepend(postComments);

  $('.post-list').prepend(postHTML);

});
