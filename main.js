// Array for all of the posts to be held in and manipulated
var posts = [];

// Constructor for a new post
var Post = function(name, message){
    this.name = name;
    this.message = message;
}

// Function to add a post to the post div
var setCurrentPost = function(postName, postMessage) {

}

// Creating a button click event to post a message when the user fills out the
// name and the message
var $postButton = $('.btn-primary');

$postButton.on('click', function() {
  var $name = $('#name').val();
  var $message = $('#message').val();
  var newPost = new Post($name, $message);
  posts.push(newPost);
})
