
var PostList = function() {
  // Array for all of the posts to be held in and manipulated
  var posts = [];

  // Template for creating posts
  var postTemplate = function(p) {
    var pTemplate =
      '<div class="post-item">' +
      '<p>' + '<a class="comment-toggle" href="#">' + 'Comments' + '</a> ' + 'Message: ' + p.text + '</p>' +
      '<p>Posted by: ' + p.name + '</p>'
    return pTemplate;
  }

  //Template for adding comments to posts
  var commentTemplate = function(p) {
    var cTemplate = '';
  }

  //Function to render the posts
  var renderPosts = function() {
    $('.posts').empty();
    posts.forEach(function(p) {
      $('.posts').append(postTemplate(p));
    })
  }

  //Function to add a post to the posts array when the button is clicked
  var addPost = function(name, text) {
    var post = {
      name : name,
      text : text,
      comments : []
    }
    posts.push(post);
    renderPosts();
  }

  //Function to add a comment to the posts
  var addComment = function(name, text) {

  }

  var toggleComments = function() {
    if ($('.comments').css('display') === 'block') {
      $('.comments').css('display', 'none');
    } else {
      $('.comments').css('display', 'block');
    }
  }

  return {
    addPost: addPost,
    posts: posts,
    toggleComments: toggleComments
  }
}

var postObject = PostList();
var $postButton = $('.post-button');
var $body = $('body');

$postButton.on('click', function() {
  var $name = $('#name').val();
  var $msg = $('#message').val();
  postObject.addPost($name, $msg);
});
