var $postSubButton = $('.post-button');
var $authorInput = $('.post-author');
var $messageInput = $('.post-message');
var $posts = $('.posts');


$postSubButton.on('click', function () {
  var message = $messageInput.val();
  var author = $authorInput.val();
  var postString = '<p>' + message + ' - <span class="author-span">Posted By: ' + author + '</span><hr>';

  $posts.append(postString);
});