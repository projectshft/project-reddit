var postButton = $('button');
//var commentButton = $('#comments')
var allPosts = [];

// On submitting the form, the user's post stacks
$(postButton).on('click', function () {

  // This is where we would empty $(.post-list)

    // Getting user input into HTML format
  var postHTML = $('#message').val() + '<input style="display:none;" id="message" type="text" class="form-control comments" placeholder="Post Text"><input id="name" style="display:none;" type="text" class="form-control comments" placeholder="Your Name"></input><button style="display:none;" id="submit" class="btn btn-primary comments">Post</button>' + '<br>' + 'Posted by: <strong> ' + $('#name').val() + '</strong><br><hr>';

  // I want this button to be bound to only its list item.
  // I can't let go of this test case!
  var postComments = $('<a/>',
    {
        text: 'comment ',
        click: function () { $(".comments").toggle(); }
    });

    var post = $('<li><p id="comment-1">' + postHTML + '</p></li').find('#comment-1').prepend(postComments).end();


  // This is where using allPosts might come in handy. We create a separate ID above using a for loop,
  // and then prepend in a loop down here. The ID would be for matching dropdowns.
    $('.post-list').prepend(post);

});
