var postButton = $('button');
//var commentButton = $('#comments')
var allPosts = [];

// On submitting the form, the user's post stacks
$(postButton).on('click', function () {

  // This is where we would empty $(.post-list)

    // Getting user input into HTML format
  var postHTML = $('#message').val() + '<br>Posted by: <strong> ' + $('#name').val() + '<strong><br><hr>';
  var post = $('<li id="comment"></li>').html(postHTML);

  // I want this button to be bound to only its list item.
  //var postComments = $('<li><a data-target="#comments" data-toggle="collapse" id="comment-button">comments</a></li>').find('#comment-button').click(function() { alert('click');}).end();


//  $('#comment').prepend(postComments);

  // This is where using allPosts might come in handy. We create a separate ID above using a for loop,
  // and then prepend in a loop down here.
  $('.post-list').prepend(post);

});
