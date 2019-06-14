// Array for all of the posts to be held in and manipulated
var posts = [];

// Constructor for a new post
var Post = function(name, message) {
  this.name = name;
  this.message = message;
}

// Function to add a post to the post div
var createPost = function(post) {
  var template =
  '<div>'
  + '<p><i>Message: ' + post.message + '</i></p>'
  + '<p><b>Posted by: ' + post.name + '</b></p>'
  + '</div>';
  return template;
}

// Creating a button click event to post a message when the user fills out the
// name and the message
var $postButton = $('.btn-primary');

$postButton.on('click', function() {
  var $name = $('#name').val();
  var $message = $('#message').val();
  var newPost = new Post($name, $message);
  var $postList = $('.posts')[0];
  while($postList.hasChildNodes() && $postList.firstElementChild !== null) {
    $postList.firstElementChild.remove(); }

  posts.push(newPost);

  for(i = 0; i<posts.length; i++) {
    $('.posts').append(createPost(posts[i]));
  }
})
