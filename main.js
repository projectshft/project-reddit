//post button is clicked and then the input data goes into an object.
//then calls add post function to push it into my empty array
$('#post-btn').on('click', function() {
  var postedMessageUserName = $('#post-name').val();
  var postedMessage = $('#post-message').val();
  var post = {
    name: postedMessageUserName,
    message: postedMessage,
    comments: []
  };
  addPost(post);
});

//Get user input from main post and stores in variables

var posts = [];

//appends the new html also called remove and comment to invoke the ability to click them
var renderBoard = function() {
  $('.posts').empty();
  console.log('renderboard function was called');
  //loops through the posts and comments to format them and add to html append line

  for (var i = 0; i < posts.length; i++) {
    var newPost = posts[i];
    var commentsFormated = "";
    newPost.comments.forEach(function(array) {
      commentsFormated = commentsFormated +
        '<div>' +
        '<p class = "comment-message inline-text">' +
        array.message + '  Posted by:  ' + array.name + '</p>' +
        '<p class = "delete inline-text"><strong> X </strong></p>' +
        '</div>';
      return commentsFormated;
    })
    //if there are no comments it is not added to the html append
    if (commentsFormated == undefined) {
      $('.posts').append(
        '<div class = post>' +
        '<p class = "btn-remove inline-text">Remove</p>' +
        '<p class = "btn-comment inline-text"> Comment </p>' +
        '<p class = "inline-text">' + newPost.message + ' </p>' +
        '<div class="hide show">' +
        '<form class = "form-inline">' +
        '<input id = "comment-name" type = "text" class = "form-control" placeholder = "User Name">' +
        '<input id="comment-message" type = "text" class = "form-control" placeholder = "Comment">' +
        '<button id = "comment-post-btn" type="button" class = "comment-post-btn btn-primary">Post</button>' +
        '</form>' +
        '</div>' +
        '<p>Posted by:<strong>' + newPost.name + '</strong></p>' +
        '</div>');
      //if there are comments its add to the posts
    } else {
      $('.posts').append(
        '<div class = post>' +
        '<p class = "btn-remove inline-text">Remove</p>' +
        '<p class = "btn-comment inline-text"> Comment </p>' +
        '<p class = "inline-text">' + newPost.message + ' </p>' +
        '<div class="hide show">' +
        commentsFormated +
        '<p class="comment">' +
        '<form class = "form-inline">' +
        '<input id = "comment-name" type = "text" class = "form-control" placeholder = "User Name">' +
        '<input id="comment-message" type = "text" class = "form-control" placeholder = "Comment">' +
        '<button id = "comment-post-btn" type="button" class = "comment-post-btn btn-primary">Post</button>' +
        '</form>' +
        '</div>' +
        '<p>Posted by:<strong>' + newPost.name + '</strong></p>' +
        '</div>')
    }
  }
  removeAndComment();
};

//pushes the posts into the posts array. Then calls the renderBoard function to post to screen
var addPost = function(post) {
  posts.push(post);
  renderBoard()
}
//removes all post and comments when hiting the word remove and removes from posts array. also calls the click function for the comments post button
var removeAndComment = function() {
  $('.btn-remove').on('click', function() {
    var postArrayIndex = $(this).closest(".post").index();
    $(this).closest(".post").remove();
    posts.splice(postArrayIndex, 1);
  });
  //reveals the comment form when users presses the comment button
  //TODO

  $('.btn-comment').on('click', function() {
    $(this).closest(".hide").toggleClass("show", "hide");
    console.log('comment button clicks');
    //commentClickButton()
  })
  //TODO delete button doesnt work!!!!
  $('.delete').on('click', function() {
    $(this).closest("comment-message").remove();
    console.log('delete button clicks');
  })

  //allows user to click on comment button and adds them into and object. then calls the push function
  $('.comment-post-btn').on('click', function() {
    console.log('the comment post button clicks');
    var postedCommentUserName = $('#comment-name').val();
    var postedComment = $('#comment-message').val();
    var postCommentedOnArrayIndex = $(this).closest(".post").index();
    console.log(postCommentedOnArrayIndex);
    var comment = {
      name: postedCommentUserName,
      message: postedComment,
    };
    addComment(comment, postCommentedOnArrayIndex);
  });
}

//function will add comments to the posts array
var addComment = function(comment, postCommentedOnArrayIndex) {
  posts[postCommentedOnArrayIndex].comments.push(comment);
  console.log(posts);
  renderBoard();
}


//renders the post at the start
renderBoard();
