var appFunctions = function() {

  // push object to posts array for rendering later
  var postPost = function() {
    var $postText = $('#postText').val();
    var $postUser = $('#postUser').val();
    superObject.posts.push({text: $postText, author: $postUser});
  }

  // render posts array
  var renderPosts = function() {
    $('#post-section').empty();
    var source = $('#post-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(superObject);
    $('#post-section').append(newHTML);

// append our new html to the page
$('.menu').append(newHTML);
  }

  return {
    postPost: postPost,
    renderPosts: renderPosts
  }
}

// where post objects live
var superObject = { posts: [] }

var controls = appFunctions()

var redditApp = function() {

  $('#post-button').click(function(){
    controls.postPost();
    controls.renderPosts();
  });



}

redditApp();
