var postButton = $('button');
//var commentButton = $('#comments')
var allPosts = [];

// On submitting the form, the user's post stacks
$(postButton).on('click', function () {

  var post = $('<li id="comment"></li>');

var postHTML = $('#message').val() + '<br>Posted by: <strong> ' + $('#name').val() + '<strong><br><hr>';

  $('#comment').html(postHTML);

  var postComments = $('<li><a data-target="#comments" data-toggle="collapse" id="comment-button">comments</a>').find('#comment-button').click(function() {
    alert('click');
  }).end();

  $('#comment').prepend(postComments);

  $('.post-list').prepend(post);


});
