// Array for all of the posts to be held in and manipulated
var posts = [];
var comments = [];

// Constructor for a new post
var Post = function(name, message) {
  this.name = name;
  this.message = message;
}

// Function to add a post to the post div
var createPost = function(post) {
  var template =
    '<div class="post-item">' +
    '<p>' + '<a class="btn btn-primary btn-sm" href="#comments">' + 'Comments' + '</a> ' + 'Message: ' + post.message + '</p>' +
    '<p>Posted by: ' + post.name + '</p>' +
    '</div>' +
    '<div class = "comments">' + 'This is a comment' + '<div>';
  return template;
}

//<a class="btn btn-primary" href="#" role="button">Link</a>

// Separating the functionality of the model and the view
var renderPosts = function() {
  var $postList = $('.posts')[0];
  // Clearing out the original div of children so it can be repopulated
  while ($postList.hasChildNodes() && $postList.firstElementChild !== null) {
    $postList.firstElementChild.remove();
  }
  for (i = 0; i < posts.length; i++) {
    $('.posts').append(createPost(posts[i]));
  }
}

// Creating a function to toggle comment content
var commentToggle = function() {
  var $comment = $('.comments');
  if ($comment === undefined) {
    return true;
  }
  if ($comment.css('display') === "none") {
    $comment.css('display', 'block');
  } else {
    $comment.css('display', 'none');
  }
  return true;
}

//Creating a button click event to toggle comments along with a text box to post
//comments
var $commentButton = $('.btn-sm');
$commentButton.on('click', commentToggle());


// Creating a button click event to post a message when the user fills out the
// name and the message
var $postButton = $('.post-button');

$postButton.on('click', function() {

  var $name = $('#name').val();
  var $message = $('#message').val();
  var newPost = new Post($name, $message);
  posts.push(newPost);
  renderPosts();
})
