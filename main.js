var posts = [];

//Functions for events:

//take user input, store it in object, and push into post array
var createPost = function() {
  var postName = $('#name').val();
  var postMessage = $('#message').val();
  if (!postName || !postMessage) {
    throw "Invalid: Must fill out all fields";
  }
  var post = {
    name: postName,
    text: postMessage,
    comments: []
  };
  posts.push(post);
};

//append html with data from each post in posts array !NEED TO ADD COMMENTS
var renderPost = function() {
  createPost();
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

//remove targeted post from page and posts array !FIX REMOVING FROM ARRAY
var removePost = function() {
  console.log(posts);
  currentPost = $(this).closest('.post');
  currentPostIndex = currentPost.index();
  posts.splice(currentPostIndex, 1);
  $(this).closest('.post').remove();
  console.log(posts);
};

//remove targeted comment from page !NEED TO REMOVE FROM ARRAY
var removeComment = function() {
  $(this).closest('.comment').remove()
};

//show/hide comments section
var toggleComments = function() {
  var currentPostComments = $(this).closest('.post').find('.comment-section');
  currentPostComments.toggleClass('hide');
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

  //create object for comment
  var comment = {
    commentName: commentName,
    commentText: commentText
  };

  //push comment into comments array within current post
  currentPostIndex = currentPost.index();
  posts[currentPostIndex].comments.push(comment);
}

//append comments to the page
var renderComments = function() {

  //clear out current post's comments from html container
  var currentPost = $(this).closest('.post');
  currentPost.find('.comment-container').empty();

  //iterate through current post's comments and render them to the page
  posts[currentPost.index()].comments.forEach(function(comment) {
    console.log(`comment: ${comment}`)
    //values of username and message for each comment
    var commentText = comment.commentText;
    var commentName = comment.commentName;

    //html template for comment
    var $comment = $('<p/>', {
      class: 'comment',
      html: commentText + ' | <em>Comment By: <strong>' + commentName + '</strong></em>'
    });

    //add comment to comment section with html formatting
    currentPost.find('.comments-container').append($comment);
  });
}





//Click events for links and buttons:

$('#posts').on('click', '.remove-link', removePost);
$('#posts').on('click', '.comment-link', toggleComments);
$('#post-button').click(renderPost);
$('#posts').on('click', '.comment-button', createComment);
$('#posts').on('click', '.comment-button', renderComments);


/////////////////////////////////////////////////////
//Creating post element when post button is clicked
$('#post-button').click(function() {




      //Create object to hold comment remove button and attach click event to it to delete the comment
      var $commentRemoveButton = $('<button/>', {
        class: "comment-remove-button btn btn-default btn-xs",
        text: 'X',
        click: removeComment
      });

      //Add remove button to comment
      $comment.append($commentRemoveButton);

      //Adding comment to comment section on click
      $(this).parent().siblings('.comments-container').append($comment);
    }
  });





});
