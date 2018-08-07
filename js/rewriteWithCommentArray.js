//following Aaron's walkthrough and Sean's lecture on CDD, this is a re-write utilizing an array to store posts and comments, rather than generating it all dynamically
//also, i should generate the comment section dynamically, so that it can be attached to anything in the post array easily, rather than toggling something in index.html on/off

//next time: make this a separate branch rather than coding in a different .js file

//define an array to store posts and comments as objects: {name: name, post: post, comments: [];}
var dataContainer = [];

//function to handle post button click, capture user input
var $('.add-post') = function () {
  var postName = $('#name').val();
  var postMessage = $('#message').val();
  createPost(message, name);
};

//function to append posts to the array
var createPost = function (message, name) {
  dataContainer.push({name: name, message: message, comments: []});
}

//function to remove a post

//function to create a comment section dynamically, hidden by default

//function to show comment form on a post, submit comment

//function to push posts and comments to the container array

//function to remove a comment

//render the posts/comments

//event handlers
//TODO add the "third" variable like Aaron showed?
$('#post-button').on('click', postButtonClicked);
$('#comment-button').on('click', commentButtonClicked);
