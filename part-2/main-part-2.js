var postButton = $('button');
//var commentButton = $('#comments')
var allPosts = [];

// On submitting the form, the user's post stacks
$(postButton).on('click', function () {

  var userMessage = '<li>' + $('#message').val() + '</li>'; // on same line as postComments, note closing tag
  var userName = '<li>' + 'Posted by: <strong> ' + $('#name').val() + '</strong></li>';

  var post = '<li><ul class="post">' + userMessage + userName + '<hr>' + '<ul><li>';

  var postComments = $('<li><a data-target="#comments" data-toggle="collapse" id="comment-button">comments</a>').find('#comment-button').click(function() {alert('click');}).end();

  $('.post').prepend(postComments);
  //var commentSection = '<li class="collapse in" id="comments"><p>Dummy text.</p></li>';

  $('.post-list').prepend(post);

});
