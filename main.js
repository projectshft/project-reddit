//creates an empty data structure for posts + comments
var postsArray = [];
var $posts = $('.posts');
var $postDiv = $('<div class ="post">' + '</div>');
var $commentDiv = $('<div class ="comments">' + '</div>');

//this function adds the posts to postsArray data structure
var addToPostsArray = function() {
  //takes the values from the inputs fields on the forum
  var $userMessage = $('#message').val();
  var $userName = $('#name').val();
  //pushes the values into Posts array
  postsArray.push({
    name: $userName,
    message: $userMessage,
    comment: [],
  });
  renderPost();
};
//when you hit the post button it adds the posts to the data structure
// and renders the post which appends the html
$('#submit').click(function() {
  addToPostsArray();
});
//pushes comments to post array
var addCommentsToPostsArray = function() {
  var $userCommentName = $('#commentname').val();
  var $userCommentText = $('#commentname').val();
  //shouldn't be zero should somehow access each of the array indexes
  postsArray[0].comment.push({
    commentText: $userCommentText,
    commentName: $userCommentName,
  });
};

$('.posts').on('click', '#postcomment', function() {
  addCommentsToPostsArray();
  //   // renderPost();
});

var createPosts = function(post, postIndex) {
  var $postElements = $(
    '<a class="postInput" type ="link" id="removePost"> remove </a>' +
    '<a class="postInput"" type="link" id="commentLink"> comment(s) </a>' +
    '<p class="postInput" id="postMessage">' + post.message + '<p>' +
    '<p class="postInput" id="postName">' + ' Posted By: ' + '<strong>' + post.name + '</strong></p>' +
    '<hr>' + '<p class="hide postInput" id="postIndex" data-post-index-number ="' + postIndex + '" >' + postIndex + '</p>');
  $postDiv.append($postElements);
};

var createComments = function(comment, commentIndex) {
  var $commentElements = $('<div class ="comments form-group" id="comments">' +
    '<input id="commentText" class="commentInput form-control" type="Text" placeholder="Comment Text">' + comment.commenttext + '</input>' +
    '<input id="commentName" class="commentInput form-control" type="Text" placeholder="User Name">' + comment.commentname + '</input>' +
    '<button class="btn btn-primary commentInput" type="submit" id="postcomment"> Post Comment </button>' + '<p class="hide commentIndex data-comment-index-number="' + commentIndex + '>' +
    commentIndex + '</p>' + '<button class="btn btn commentinput" type="submit" id="deletecomment"> X </button>' +
    '</div>');

  $commentDiv.append($commentElements);
};

//the render function does x
var renderPost = function() {
  //empties posts when you render the page
  $posts.empty();
  //looping through outerarray to get the info from posts and append the new posts from the template
  for (var i = 0; i < postsArray.length; i++) {
    var $postPosts = createPosts(postsArray[i], i + 1);
    console.log("what is happening in the outer loop?" + postsArray[i]);
    ///looping through inner array to get the info from posts and append the new posts from the template
    for (var j = 0; j < postsArray[i].comment.length; j++) {

      var $postComments = createComments(postsArray[i].comment[j], j + 1);

    }
  };
};

//when the remove button is clicked it removes the post
//has worked in different iterations with the same code but doesn't work now
$('#removepost').on('click', function() {
  $(this).closest('.post').remove();
});

//adds a hidden class to the comment
$commentDiv.addClass('hide');
$commentDiv.on('click', function() {
  //if the comments were showing up, i would hide them and then toggle to show them
  $(this).closest('.hide').toggleClass('show');
});
//deletes the comments when you hit x
$('#deletecomment').on('click', function() {
  $(this).closest($commentDiv).remove();
});
