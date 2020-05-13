var appFunctions = function() {

  // push object to posts array for rendering later
  var postPost = function() {
    var $postText = $('#postText').val();
    var $postUser = $('#postUser').val();
    posts.push({text: $postText, author: $postUser});

  }

  // render posts array
  var renderPosts = function() {

  }

  return {
    postPost: postPost()
  }
}

// where post objects live
var posts = []

var redditApp = function() {

  $('#post-button').click(function(){
    appFunctions().postPost
  });



}

redditApp();
