var $postSubButton = $('.post-button');
var $authorInput = $('.post-author');
var $messageInput = $('.post-message');
var $posts = $('.posts');
var numOfPosts = 0;

var addCommentButtonListener = function (postNumber, $comments) {
  var $button = $('.comment-button-' + postNumber);

  $button.on('click', function () {
    var commentAuthor = $('.comment-author-' + postNumber).val();
    var commentMessage = $('.comment-message-' + postNumber).val();
    
    $comments.append('<p>' + commentMessage + ' - <span>Posted By: ' + commentAuthor + '</span></p><button class="btn btn-danger">Delete Comment</button><hr />');
    
  });
  debugger;
};

var createInitialPost = function (postNumber, postMessage, postAuthor) {
  var $mainPostDiv = $('<div class="post-' + postNumber + '"><p>' + postMessage + ' - <span>Posted By: ' + postAuthor + '</span></p><button class="btn btn-primary">Comments</button><button class="btn btn-danger">Delete</button><hr /></div>');

  var $commentsHideWrapper = $('<section class="hide-' + postNumber + '"></section>');

  var $commentsDiv = $('<div class="comments-' + postNumber + '"></div>');

  var $commentsInputDiv = $('<div class="comments-input-' + postNumber + '"><div class="container"><div class="row"><div class="col-sm-7 col-offset-6"><textarea name="message" class="comment-message-' + postNumber + '" placeholder="Comment Text"></textarea></div></div></div><div class="container"><div class="row"><div class="col-sm-7 col-offset-6"><input type="text" name="author" class="comment-author-' + postNumber + '" placeholder="Your Name"/></div></div></div><div class="container"><div class="row"><div class="col-sm-7 col-offset-6"><button class="btn btn-primary comment-button-' + postNumber +'">Submit Comment</button></div></div></div></div>');

  $commentsHideWrapper.append($commentsDiv, $commentsInputDiv);

  return $('<div class="spacer"></div>').append($mainPostDiv, $commentsHideWrapper);
}

$postSubButton.on('click', function (event) {
  var message = $messageInput.val();
  var author = $authorInput.val();
  numOfPosts += 1;
  
  var postContent = createInitialPost(numOfPosts, message, author);
  $posts.append(postContent);
  addCommentButtonListener(numOfPosts, $('.comments-' + numOfPosts));
});

