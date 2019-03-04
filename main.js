// NOTE: This only seems to work in codepen...

// make variable to hold posts
var posts = [];

var removePost = function(index){
  posts.splice(index, 1);
  RenderPosts(posts);
}

// pushes into array.
var createPost = function(userID, message) {
    var post = new Post(userID, message);
    posts.push(post);
    RenderPosts(posts);
};

function Post(userID, message) {
  this.userID = userID;
  this.message = message;
}

// //need function for comments
// function Comment(userID, comment) {
//   this.userID = userID;
//   this.comment = comment;
// }

function RenderPosts(posts) {
  // empty to start fresh each time (no double posts)
  $(".forum").empty();
  // iterates through all of values in array "posts" and renders to page
  for (var i = 0; i < posts.length; i++) {
      // delete button - line break - display message
      $('.forum').append('<div><a onclick="removePost(' + i + ')">Delete</a> <br>'+ posts[i].message + '</div>');
      // display user name
      $('.forum').append('<div>' + 'Posted By:' + ' ' + "<strong>" + posts[i].userID + "</strong>" + '</div>');
      $('.forum').append('<br>');
   }
 }



//fires on button. userID is pulled as well as message and sent to create post.
$(document).ready(function() {
    $('button').on('click', function() {
      var userID = $('#userID').val();
      var message = $('#message').val();
      createPost(userID, message);
    });
});
