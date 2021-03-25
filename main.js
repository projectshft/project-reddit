
var posts = [];
var $postButton = $('.submit-post');
var $textInput = $('.post-text');
var $authorInput = $('.post-author');
var $posts = $('.posts');

//Add post to posts array
var addPost = function (author, content) {
  var postObj = {
    author: author,
    content: content
  }
  posts.push(postObj);
}

//renders posts array to page
var renderPosts = function () {
  var postsHTML = posts.reduce(function (htmlString, post, index) {
    htmlString += '<div class="post" data-post="' + index.toString() + '"><p><span role="button" tabindex="0" class="remove-button">remove</span> ' + post.content + ' - Posted By: ' + post.author + '</p><hr></div>';
    return htmlString;
  }, '<hr>')
  $posts.html(postsHTML);
}

//Updates page with new post
$postButton.on('click', function() {
  addPost($authorInput.val(), $textInput.val());
  renderPosts();
})

//Removes Post
$posts.on('click', 'span', function(e) {
  var postNumber = $(e.target).closest('.post').data().post;
  posts.splice(postNumber,1);
  renderPosts();
})