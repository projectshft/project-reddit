var postButton = $('button');
//var commentButton = $('#comments')
var allPosts = [];

// On submitting the form, the user's post stacks
$(postButton).on('click', function () {

  var post = $('<li><ul class="post"></ul></li>');

  var userMessage = $('#message').val(); // on same line as postComments
  var userMessageLine = $('<li class="your-post-here"></li>');

  $('.your-post-here').append(userMessage);
  $('.post').append(userMessageLine);

  //var userName = '<li>' + 'Posted by: <strong> ' + $('#name').val() + '</strong></li>';

  var postComments = $('<li><a data-target="#comments" data-toggle="collapse" id="comment-button">comments</a>').find('#comment-button').click(function() {alert('click');}).end();

  $('.post').prepend(postComments);

  $('.post-list').prepend(post);

});
