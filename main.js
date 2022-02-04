var $postSubButton = $('.post-button');
var $authorInput = $('.post-author');
var $messageInput = $('.post-message');
var $posts = $('.posts');
var numOfPosts = 0;

var makeSubmitCommentListener = function (postNumber, $comments) {
  var numOfComments = 0;
  var $button = $('.comment-button-' + postNumber);

  $button.on('click', function () {
    numOfComments += 1;
    var commentAuthor = $('.comment-author-' + postNumber).val();
    var commentMessage = $('.comment-message-' + postNumber).val();
    var newComment = $.parseHTML('<div class=comment-num-' + numOfComments + '><p>' + commentMessage + ' - <span>Posted By: ' + commentAuthor + '</span></p><button class="btn btn-danger">Delete Comment</button><hr /></div>');
    
    $comments.append(newComment);
    
    $comments.find(newComment).find('button').on('click', function () {
      $(newComment).remove();
    });
  });
};

var createInitialPost = function (postNumber, postMessage, postAuthor) {
  var $mainPostDiv = $.parseHTML('<div class="post-' + postNumber + '"><p><strong>' + postMessage + ' - <span>Posted By: ' + postAuthor + '</span></strong></p><button class="btn btn-primary show_">Comments</button><button class="btn btn-danger del">Delete</button><hr /></div>');

  var $commentsHideWrapper = $('<section class="hide-' + postNumber + '"></section>');

  debugger;

  var $commentsDiv = $('<div class="comments-' + postNumber + '"></div>');

  var $commentsInputDiv = $('<div class="comments-input-' + postNumber + '"><div class="container"><div class="row"><div class="col-sm-7 col-offset-6"><textarea name="message" class="width-handle comment-message-' + postNumber + '" placeholder="Comment Text"></textarea></div></div></div><div class="container"><div class="row"><div class="col-sm-7 col-offset-6"><input type="text" name="author" class="width-handle comment-author-' + postNumber + '" placeholder="Your Name"/></div></div></div><div class="container"><div class="row"><div class="col-sm-7 col-offset-6"><button class="btn btn-primary comment-button-' + postNumber +'">Submit Comment</button></div></div></div></div>');


  $commentsHideWrapper.append($commentsDiv, $commentsInputDiv);
  $commentsHideWrapper.toggle(false);

  return $('<div class="spacer"></div>').append($mainPostDiv, $commentsHideWrapper);
}

$postSubButton.on('click', function (event) {
  var message = $messageInput.val();
  var author = $authorInput.val();
  numOfPosts += 1;
  
  var postContent = createInitialPost(numOfPosts, message, author);

  // $posts.append(postContent);
  $posts.append(postContent);

  var $showCommentsButton = $('.post-' + numOfPosts + ' .show_');
  var $removePostButton = $('.post-' + numOfPosts + ' .del');
  $showCommentsButton.on('click', function () {
    postContent.find('.hide-' + numOfPosts).toggle();
  });
  $removePostButton.on('click', function () {
    postContent.remove();
  });
  makeSubmitCommentListener(numOfPosts, $('.comments-' + numOfPosts));
});

