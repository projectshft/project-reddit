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
var renderBoard = function(postOrComment) {
  checkTheToggle();
  $('.posts').empty();
  console.log('renderboard function was called');
  //loops through the posts and comments to format them and add to html append line

  for (var i = 0; i < posts.length; i++) {
    var newPost = posts[i];
    var commentsFormated = "";
    newPost.comments.forEach(function(array) {
      commentsFormated = commentsFormated +
        '<div class = "erase-comment">' +
        '<p class = "inline-text">' +
        array.message + '  Posted by:  ' + array.name + '</p>' +
        '<p class = "delete inline-text"><strong> X </strong></p>' +
        '</div>';
      return commentsFormated;
    })
    //conditon to check if the comments button had been clicked before rerendering the board
    if (toggleTracker[i] === 'off') {
      $('.posts').append(
        '<div class = "post">' +
        '<p class = "btn-remove inline-text">Remove</p>' +
        '<p class = "btn-comment inline-text"> Comment </p>' +
        '<p class = "inline-text">' + newPost.message + ' </p>' +
        '<div class="hide">' +
        commentsFormated +
        '<p class="comment">' +
        '<form class = "form-inline">' +
        '<input id = "comment-name" type = "text" class = "form-control" placeholder = "User Name">' +
        '<input id="comment-message" type = "text" class = "form-control" placeholder = "Comment">' +
        '<button id = "comment-post-btn" type="button" class = "comment-post-btn btn-primary">Post</button>' +
        '</form>' +
        '</div>' +
        '<p>Posted by:<strong>' + newPost.name + '</strong></p>' +
        '</div>');
    } else {
      $('.posts').append(
        '<div class = "post on">' +
        '<p class = "btn-remove inline-text">Remove</p>' +
        '<p class = "btn-comment inline-text"> Comment </p>' +
        '<p class = "inline-text">' + newPost.message + ' </p>' +
        '<div class = "hide show">' +
        commentsFormated +
        '<p class="comment">' +
        '<form class = "form-inline">' +
        '<input id = "comment-name" type = "text" class = "form-control" placeholder = "User Name">' +
        '<input id="comment-message" type = "text" class = "form-control" placeholder = "Comment">' +
        '<button id = "comment-post-btn" type="button" class = "comment-post-btn btn-primary">Post</button>' +
        '</form>' +
        '</div>' +
        '<p>Posted by:<strong>' + newPost.name + '</strong></p>' +
        '</div>');

    }
  }
  allTheButtons();
};

//pushes the posts into the posts array. Then calls the renderBoard function to post to screen
var addPost = function(post) {
  posts.push(post);
  renderBoard()
}
//removes all post and comments when hiting the word remove and removes from posts array. also calls the click function for the comments post button
var allTheButtons = function() {
  $('.btn-remove').on('click', function() {
    var postArrayIndex = $(this).closest(".post").index();
    $(this).closest(".post").remove();
    posts.splice(postArrayIndex, 1);
  });

  //makes the comment section appear and disappear
  $('.btn-comment').on('click', function() {
    $(this).siblings(".hide").toggleClass("show");
    $(this).parent(".post").toggleClass("on");
  })
  //Deletes comment from html and from post array
  $('.delete').on('click', function() {
    var postArrayIndex = $(this).closest(".post").index();
    var commentArrayIndex = $(this).parent().index();
    $(this).parent().remove();
    posts[postArrayIndex].comments.splice(commentArrayIndex, 1);
    console.log('post index:' + postArrayIndex + 'comments Index:' + commentArrayIndex);
  });

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
  renderBoard();
}
//keeps track if the comments are open or closed
var toggleTracker = []
//check to see if comments are hiden or not pushes anser into array to use when rendering the board
var checkTheToggle = function() {
toggleTracker = []
posts.forEach(function(post, index) {
  //  if($('.posts')(index).find('.hide')==true){
  var toggleChecker = $(".post:eq(" + index + ")").hasClass('on')
  if (toggleChecker == true) {
    toggleTracker.push('on')
  } else {
    toggleTracker.push('off')
  }
});
};
//renders the post at the start
renderBoard();
