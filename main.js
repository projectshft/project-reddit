//array to hold all user posts / comments
var posts = [];

//Functions for events:

//take user input, create object with data, and push into post array
var createPost = function() {
  //value of user input
  var postName = $('#name').val();
  var postMessage = $('#message').val();

  //if input fields are empty, print error and stop function
  if (!postName || !postMessage) {
    throw "Invalid: Must fill out all fields";
  }

  //creating post with user input data
  var post = {
    name: postName,
    text: postMessage,
    comments: []
  };

  //adding post to posts array
  posts.push(post);

  //clear input fields
  $('#name').val("");
  $('#message').val("");
};

//append html with data from each post in posts array
var renderPost = function() {
  //clear current content from posts div
  $('#posts').empty();

  //iterate through posts and append them to page with html formatting
  posts.forEach(function(post) {
    //values for post name and message
    var username = post.name;
    var postText = post.text;

    //formatting post html
    var $post = $('<article/>', {
      class: 'post',
      html: '<p class="user-message">' +
        postText + '</p>' + '<p class="posted-by">Posted By: <span class="username">' +
        username + '</span></p><hr>'
    });

    //element for links
    var $postLinks = $('<p/>', {
      class: "post-links",
      html: '<a href="#" class="remove-link" type="button"> (Remove) </a> ' +
        '<a href="#" class="comment-link" type="button"> (Show Comments) </a>'
    });

    //hidden section to hold comments
    var $commentSection = $('<section/>', {
      class: 'comment-section hide',
      html: '<section class="comments-container"><h4>Comments:</h4></section><hr>'
    });

    //form to submit comments on post
    var $commentForm = $('<form/>', {
      class: 'comment-form form-inline',
      html: '<div class="form-group">' +
        '<input type="text" class="form-control comment-message" placeholder="Add New Comment" required>' +
        '</div>  ' +
        '<div class="form-group">' +
        '<input type="text" class="form-control comment-name" placeholder="Your Name" required>' +
        '</div>  ' +
        '<button class="btn btn-primary comment-button" type="button">Post Comment</button>'
    });

    //attaching comment form to comment section
    $commentSection.append($commentForm);

    //adding links and comment section to post
    $post.prepend($postLinks);
    $post.append($commentSection);

    //adding post to posts section
    $('#posts').append($post);

  })
};

//remove targeted post from page and posts array
var removePost = function() {
  //find current post
  currentPost = $(this).closest('.post');
  currentPostIndex = currentPost.index();

  //remove post from array
  posts.splice(currentPostIndex, 1);

  //remove post from page
  $(this).closest('.post').remove();
};

//show/hide comments section
var toggleComments = function() {
  //find targeted comment section
  var currentPostComments = $(this).closest('.post').find('.comment-section');

  //change class (display) when hidden
  currentPostComments.toggleClass('hide');

  //change display text when class changes
  if (currentPostComments.hasClass('hide')) {
    $(this).text(' (Show Comments) ');
  } else {
    $(this).text(' (Hide Comments) ');
  }
};

//add comment to posts array
var createComment = function() {
  //values of comment text and username
  var currentPost = $(this).closest('.post');
  var commentText = currentPost.find('.comment-message').val();
  var commentName = currentPost.find('.comment-name').val();

  //if comment form is empty, return error
  if (!commentText || !commentName) {
    throw "Invalid: Must fill out all fields";
  }

  //create object for comment
  var comment = {
    commentName: commentName,
    commentText: commentText
  };

  //push comment into comments array within current post
  currentPostIndex = currentPost.index();
  posts[currentPostIndex].comments.push(comment);

  //clear comment input fields
  currentPost.find('.comment-message').val("");
  currentPost.find('.comment-name').val("");
}

//append comments to the page
var renderComments = function() {
  //clear out current post's comments from html container
  var currentPost = $(this).closest('.post');
  currentPost.find('.comments-container').empty();

  //iterate through current post's comments and render them to the page
  posts[currentPost.index()].comments.forEach(function(comment, index, array) {

    //values of username and message for each comment
    var commentText = comment.commentText;
    var commentName = comment.commentName;

    //html template for comment
    var $comment = $('<p/>', {
      class: 'comment',
      html: commentText + ' | <em>Comment By: <strong>' + commentName + '</strong></em>'
    });

    //add remove button to comment
    var $commentRemoveButton = $('<button/>', {
      class: "comment-remove-button btn btn-default btn-xs",
      text: 'X'
    });

    //Add remove button to comment
    $comment.append($commentRemoveButton);

    //add comment to comment section with html formatting
    currentPost.find('.comments-container').append($comment);
  });
}

//remove targeted comment from page
var removeComment = function() {
  // find targeted comment in current post's comments array
  var currentPostIndex = $(this).closest('.post').index();
  var currentCommentIndex = $(this).closest('.comment').index();

  //remove comment from array
  posts[currentPostIndex].comments.splice(currentCommentIndex, 1);

  // remove comment from page
  $(this).closest('.comment').remove()
};

//Click events for links and buttons:
$('#posts').on('click', '.remove-link', removePost);
$('#posts').on('click', '.comment-link', toggleComments);
$('#post-button').click(createPost);
$('#post-button').click(renderPost);
$('#posts').on('click', '.comment-button', createComment);
$('#posts').on('click', '.comment-button', renderComments);
$('#posts').on('click', '.comment-remove-button', removeComment);
