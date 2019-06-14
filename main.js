// Array for all of the posts to be held in and manipulated
var posts = [];
var comments = [];

// Constructor for a new post
var Post = function(name, message) {
  this.name = name;
  this.message = message;
}

// Function to add a post to the post div
var createPost = function(postNumber, post) {
  var template =
    '<div class="post-item" data-post-number= "' + postNumber + '">' +
    '<p>Message: ' + post.message + '</p>' +
    '<p>Posted by: ' + post.name + '</p>' +
    '</div>';
  return template;
}

// Separating the functionality of the model and the view
var renderPosts = function() {
  var $postList = $('.posts')[0];
  // Clearing out the original div of children so it can be repopulated
  while ($postList.hasChildNodes() && $postList.firstElementChild !== null) {
    $postList.firstElementChild.remove();
  }
  for (i = 0; i < posts.length; i++) {
    $('.posts').append(createPost(i, posts[i]));
  }
}

// Creating a button click event to post a message when the user fills out the
// name and the message
var $postButton = $('.btn-primary');

$postButton.on('click', function() {
  var $name = $('#name').val();
  var $message = $('#message').val();
  var newPost = new Post($name, $message);
  posts.push(newPost);
  renderPosts();
})
