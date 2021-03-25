//Add post to posts section
var posts = [];
var addPost = function (author, content) {
  var postObj = {
    author: author,
    content: content
  }
  posts.push(postObj);
}
var $postButton = $('.submit-post');
var $textInput = $('.post-text');
var $authorInput = $('.post-author');
$postButton.on('click', function() {
  addPost($authorInput.val(), $textInput.val());
  renderPosts();
})

var renderPosts = function () {
  var postsHTML = posts.reduce(function (htmlString, post) {
    htmlString += '<p>' + post.content + ' - Posted By: ' + post.author + '</p><hr>';
    return htmlString;
  }, '<hr>')
  $('.posts').html(postsHTML);
}