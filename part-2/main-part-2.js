var postButton = $('button');
//var commentButton = $('#comments')
var allPosts = [];

// On submitting the form, the user's post stacks
$(postButton).on('click', function () {

  // This is where we would empty $(.post-list)

  // Getting user input into HTML format
  //
  var formForComments = '<form class="form-inline comments" style="display:none;"><input id="message" type="text" class="form-control" placeholder="Post Text"></input><input id="name" type="text" class="form-control" placeholder="Your Name"></input><button id="submit" class="btn btn-primary">Post Comment</button></form>';

  var postHTML = $('#message').val() +  formForComments + 'Posted by: <strong> ' + $('#name').val() + '</strong><br><hr>';

  // I want this button to be bound to only its list item.
  // I can't let go of this test case!
  var postComments = $('<a/>',
    {
        text: 'comment ',
        click: function () { $(".comments").toggle(); }
    });

    var post = $('<li><p id="comment-1">' + postHTML).find('#comment-1').prepend(postComments).end();


  // This is where using allPosts might come in handy. We create a separate ID above using a for loop,
  // and then prepend in a loop down here. The ID would be for matching dropdowns.
    $('.post-list').prepend(post);

});
