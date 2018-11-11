/*
This application should store all post and comment data inside
the array called posts. Posts properties will be:

  name: user input when making a new post
  message:  user input when making a new post
  postNumber: a number that is the same as the post index value, useful
              for selecting elements from the DOM
  comments:   an array of comments with the following properties:
    text: user input when posting a comment
    username: user input when posting a comment
    commentNumber: a number that is the same as the comments index value,
                  useful for selecting elements from the DOM

Some common logical themes throughout the project are that:
1. Whenever posts or comments are removed by the user, the post or comment is
first removed from the datastructure "posts", then the DOM is re-rendered with
the data from "posts". Individual posts and comments are not selected and
removed from the DOM.

2. Whenever buttons are added to the DOM, all event listeners utilized with
that button type are removed DOM-wide, and re-bound to those class of buttons.
This prevents multiple event listeners of the same type from being
inadvertently bound to one button.
*/

var posts = [];

//Building the templates to be used by Handlebars when inserting HTML into the
//DOM when rendering both posts and comments.
var postSource = $('#post-template').html();
var postTemplate = Handlebars.compile(postSource);
var commentSource = $('#comment-template').html();
var commentTemplate = Handlebars.compile(commentSource);

$('#post-button').click(function(e) {
  e.preventDefault();
  createNewPostInPostsArray();
  renderPosts();
  resetPlaceholderText();
})

var createNewPostInPostsArray = function() {
  var post = {
    name: $('#post-name').val(),
    message: $('#post-message').val(),
    comments: []
  };
  posts.push(post);
}

/*
renderPosts() will be invoked when either posting a comment, or
removing a comment. It's important to re-number the postNumber property whenever
posts are added or removed, so that the posts can be properly linked in the
DOM with the appropriate buttons used by the user.
*/
var renderPosts = function() {

  for (i = 0; i < posts.length; i++) {
    posts[i].postNumber = i;
  }

  $('.post-container').empty();

  for (i = 0; i < posts.length; i++) {
    var newHTML = postTemplate(posts[i]);
    $('.post-container').append(newHTML);
  }

  /*
   The reason renderComments() must be invoked whenever renderPosts() is
   invoked is that the post-container is cleared before rendering the post.
   The post-container not only contains the posts, but also the comments to
   each post. Comments must be re-rendered to appear in the DOM.
  */
  renderComments();
  setRemoveButtonEventListener();
  setCommentsButtonEventListener();
  setPostCommentButtonEventListener();
}

var resetPlaceholderText = function() {
  $('#post-name').val('');
  $('#post-message').val('');
  $('.comment-inputs').val('');
}

var setRemoveButtonEventListener = function() {
  $('.remove-button').off("click");
  $('.remove-button').on("click", function() {
    var $post = $(this).parent().parent();
    var postNumberIndex = $post.data().postnumber;

    //removes the post from the array "posts"
    posts.splice(postNumberIndex, 1);

    //removes the post from the DOM by re-rendering the data from "posts"
    renderPosts();
  })
}

var setCommentsButtonEventListener = function() {
  $('.comments-button').off("click");
  $('.comments-button').on("click", function() {
    var $commentsContainer = $(this).parent().next().children('.comments-container');

    //Toggles the display of the comments section in the DOM
    if ($commentsContainer.css('display') === "none") {
      $commentsContainer.css('display', "inline");
    } else {
      $commentsContainer.css('display', 'none');
    }

    //Toggles the display of the comment input form
    if ($commentsContainer.next().css('display') === "none") {
      $commentsContainer.next().css('display', "inline");
    } else {
      $commentsContainer.next().css('display', 'none');
    }
  })
}

var setPostCommentButtonEventListener = function() {
  $('.post-comment-button').off('click');
  $('.post-comment-button').on('click', function(e) {
    e.preventDefault();
    var indexOfParentPost = $(this).closest('.post').data().postnumber;

    /*
    The comment properties are populated with user-input from the comment
    form. commentNumber is initialized with 0, but will be assigned the
    proper value when renderComments() is invoked.
    */
    var comment = {
      text: $(this).siblings('.comment-text-input').val(),
      userName: $(this).siblings('.user-name-input').val(),
      commentNumber: 0
    };
    posts[indexOfParentPost].comments.push(comment);
    renderComments();
    resetPlaceholderText();
  })
}

var renderComments = function() {

  //Iterates through all of the posts, in order to render all of the comments
  //on every post.
  for (var i = 0; i < posts.length; i++) {
    var $currentPost = $("div[data-postnumber='" + i + "']");
    var $currentCommentsContainer = $currentPost.find('.comments-container');

    //Iterate through all comments on a particular post to number all comments.
    for (var j = 0; j < posts[i].comments.length; j++) {
      posts[i].comments[j].commentNumber = j;
    }

    //Empty the current comments container, and repopulate with all comments of
    //the current post.
    $currentCommentsContainer.empty();
    for (var k = 0; k < posts[i].comments.length; k++) {
      var newCommentHTML = commentTemplate(posts[i].comments[k]);
      $currentCommentsContainer.append(newCommentHTML);
    }
  }
  setDeleteIconEventHandler();
}

var setDeleteIconEventHandler = function() {
  $('.delete-icon').off('click');
  $('.delete-icon').on('click', function() {

    var commentNumber = $(this).closest('.container').data().commentnumber;
    var postNumber = $(this).closest('.post').data().postnumber;

    //Remove the chosen comment from the posts array.
    posts[postNumber].comments.splice(commentNumber, 1);
    //Remove the chosen comment from the DOM by rendering all comments in posts.
    renderComments();
  })
}
