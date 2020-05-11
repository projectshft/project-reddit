var postButton = $('#submit');
var allPosts = [];

$(postButton).on('click', function () {

  // This is where we would empty $(.post-list)

  //This 'form' gets me the right button but is not being created dynamically.
  var forSubmittingComments = '<form class="form-inline comments" onsubmit="event.preventDefault();" style="display:none;"><input id="message-comment" type="text" class="form-control" placeholder="Comment Text"></input><input id="name-comment" type="text" class="form-control" placeholder="User Name"></input><button id="submit-comment" class="btn btn-primary">Post Comment</button></form>';

  var postHTML = $('#message').val() + forSubmittingComments + 'Posted by: <strong> ' + $('#name').val() + '</strong><br><hr>';

  // Trying to append the form stuff dynamically
  // var submitComment = $('<form />',
  //   {
  //     class: 'form-inline comments',
  //     onsubmit: 'event.preventDefault();',
  //     style:'display:none;'
  //
  //   });
  //
  // var postHTML = $('<span id="commentForm"' + basicComment).find('#comment-form').children().append(submitComment).end();

  
  var commentButton = $('<a/>',
    {
        text: 'comment ',
        click: function () { $(".comments").toggle(); }
    });

    var post = $('<li><p id="post-1">' + postHTML).find('#post-1').prepend(commentButton).end();

  // This is where using allPosts might come in handy. We create a separate ID above using a for loop,
  // and then prepend in a loop down here. The ID would be for matching dropdowns.
    $('.post-list').prepend(post);

});
