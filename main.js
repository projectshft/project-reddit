var $postSubButton = $('.post-button');
var $authorInput = $('.post-author');
var $messageInput = $('.post-message');
var $posts = $('.posts');

var createInitialPost = function (postNumber, postMessage, postAuthor) {
  var $mainPostDiv = $('<div class="post-' + postNumber + '"><p>' + postMessage + ' - <span>Posted By: ' + postAuthor + '</span></p><button class="btn btn-primary">Comments</button><button class="btn btn-danger">Delete</button><hr /></div>');

  var $commentsHideWrapper = $('<section class="hide-' + postNumber + '"></section>');

  var $comments = $('<div class="comments-' + postNumber + '"></div>');

  var $commentsInput = $('<div class="comments-input-' + postNumber + '"><div class="container"><div class="row"><div class="col-sm-7 col-offset-6"><textarea name="message" class="comment-message" placeholder="Comment Text"></textarea></div></div></div><div class="container"><div class="row"><div class="col-sm-7 col-offset-6"><input type="text" name="author" class="comment-author" placeholder="Your Name"/></div></div></div><div class="container"><div class="row"><div class="col-sm-7 col-offset-6"><button class="btn btn-primary comment-button">Submit Comment</button></div></div></div></div>');

  $commentsHideWrapper.append($comments, $commentsInput);

  return $('<div></div>').append($mainPostDiv, $commentsHideWrapper);
}

$postSubButton.on('click', function (event) {
  var message = $messageInput.val();
  var author = $authorInput.val();
  
  var postContent = createInitialPost(1, message, author);
  $posts.append(postContent);
});

