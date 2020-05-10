var postButton = $('button');
//var commentButton = $('#comments')
var allPosts = [];

// On submitting the form, the user's post stacks
$(postButton).on('click', function () {

  // Getting user input into HTML format
  var postHTML = $('#message').val() + '<br>Posted by: <strong> ' + $('#name').val() + '<strong><br><hr>';

  var post = document.createElement('li');
  $(post).html(postHTML);

  // I want this button to be bound to only its list item.
  //var postComments = $('<a data-target="#comments" data-toggle="collapse" id="comment-button">comments</a>').find('#comment-button').click(function() {alert('click');}).end();

  //$('.post').prepend(postComments);

  $('.post-list').prepend(post);

});
