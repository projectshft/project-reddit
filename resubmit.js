//creates an empty data structure for posts + comments
var postsArray = [];

var $posts = $('.posts');

//this function adds the posts to postsArray data structure
var addToPostsArray = function() {
  //takes the values from the input field from the posts
  var $userMessage = $('#message').val();
  var $userName = $('#name').val();
  //pushes the values into postsArray
  postsArray.push({
    name: $userName,
    message: $userMessage,
    comments: [],
  });
};

//this function adds the comments to the datastructure
var addCommentsToPostsArray = function(postIndex) {
  //captures the values from the input fields
  var $userCommentName = $('#commentname').val();
  var $userCommentText = $('#commenttext').val();

  //pushes them to the postsArray
  postsArray[postIndex].comments.push({
    commenttext: $userCommentText,
    commentname: $userCommentName,
  });
};

var renderPost = function() {
  //empties posts when you render the page
  $posts.empty();
  for (var i = 0; i < postsArray.length; i++) {
    //loops through the array to posts info
    addPostsToPage(postsArray[i]);
    //loops through to find comment info
  }
  addCommentInputToPage();
};

var renderComments = function(postElement, postObject) {
  //TODO !! change it to just empty the comment relative to the element
  $('.commentslist').find('.comment').empty();
  //loops through to find comment info
  for (var position = 0; position < postObject.comments.length; position++) {
    addCommentsToPage(postObject.comments[position]);
  }
  addCommentInputToPage();
};

//adds the post to the page
var addPostsToPage = function(postObject) {

  $posts.append('<div class=post>' + '<a href="#" class="removes" id="removepost"> remove </a>' +
    '<a href="#" class="commentslink" type="link" id="commentslink"> comment(s) </a>' +
    '<p class="userinput" id="postmessage">' + postObject.message + '<p>' +
    '<p class="userinput" id="postname">' + ' Posted By: ' + '<strong>' + postObject.name +
    '</strong></p>' + '<hr>' + '</p>' + '</div>');
};
//appends a remove and comment button to the post
var addCommentInputToPage = function() {
  $('.post').append('<div class ="comments hide">' + '<div class=commentslist></div>' + '<input id="commenttext" class="commenttext" type="Text" placeholder="Comment Text">' +
    '</input>' + '<input id="commentname" class= "commentname" type="Text" placeholder="User Name">' +
    '</input><button class="btn btn-primary postcomment" > Post Comment </button></div>');
};

//appends the comments to the page
var addCommentsToPage = function(postElement) {
  $posts.find('.commentslist').append('<div class="comment">' + postElement.commenttext + ' Posted By: <strong> ' + postElement.commentname + '</strong><button class="removecomment">x</button></div>');
};

//when you click on the Post button it submits the information to the datastructure
//and calls the function render post function
$('#submit').click(function() {
  //edge cases
  if ($('#name').val().length !== 0 && $('#message').val().length !== 0) {

    addToPostsArray();
    renderPost();

  } else {
    //edge cases
    alert("you can't submit an empty post! add your name or message and then resubmit!")
  }
});

// this click handler adds the comments input the data structure
// and renders the comments by calling addCommentsToPostsArray
$posts.on('click', '.postcomment', function() {

  var postIndex = $(this).closest('.post').index();

  var postElement = $(this).closest('.post');
  var postObject = postsArray[postIndex];

  addCommentsToPostsArray(postIndex);
  renderComments(postElement, postObject);

  return postIndex;
  postElement;
  postObject;
});


//this removes the post
$posts.on('click', '.removes', function() {
  var index = $(this).closest('.post');
  //removes the post from the posts data structure
  postsArray.splice(index, 1);
  //removes the post from the DOM
  $(this).closest('.post').remove();
});

//when you click on the comments link it shows the comments
$posts.on('click', '.commentslink', function() {
  $(this).siblings('.hide').toggleClass("show");
});


//deletes the comments when you hit x
$('.commentlist').on('click', '#removecomment', function() {
  //the button doesn't work
  $(this).closest('.comment').remove();
});
