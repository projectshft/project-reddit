var $postSubmitButton = $('#submit-post');
var $commentSubmitButton = $('#submit-comment');



var onSubmitPost = function() {
  var username = $('#username-post').val();
  var postContent = $('#post-text').val();
  createNewPost(username, postContent);
};

var createNewPost = function(username, post) {
  var $newPost = $(`<div class="post">` +
    `<hr />` + 
    `<p><` +
    `span class="remove-comments text-primary">remove </span>
    <span class="show-comments text-primary">comments </span>${post} - Posted By: ${username}` +
    `</p>` +
    `</div>`);

  $('.posts').append($newPost);

  // bind comments link
  $newPost.find('.show-comments').on('click', onCommentClick);
  createCommentSection($newPost);
};

var createCommentSection = function($post) {
  var $commentSection =  $('<div class="comments-section">' +
    '<div class="comments"> </div>' +
    '<form class="comments-form">' +
    '<div class="form-group">' +
    '<input type="text" class="comment-text form-control" placeholder="Comment Text"/>' + 
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" class="username-comment form-control" placeholder="Your Name"/>' + 
    '</div>' +
    '<button type="button" class="submit-comment btn btn-primary">Submit Comment</button>' +
    '</form>' + 
    '</div>');
 
  $post.append($commentSection);
  
  // bind comment submit
  $post.find('.submit-comment').on('click', onSubmitComment);

  $commentSection.hide();
};

var createNewComment = function(username, comment, $commentSection) {
  var $newComment = $(`<div class="comment">` +
    `<p>` + 
    `<span class="remove-comment text-primary">remove </span>` + 
    `${comment} - Posted By: ${username}</p>` +
    `</div>`);

  $commentSection.find('.comments').append($newComment);

  // bind remove link
  $newComment.find('.remove-comment').on('click', onRemoveCommentClick);
};

var onSubmitComment = function() {
  
  var username = $(this).closest('.comments-form').find('.comment-text').val();
  var comment = $(this).closest('.comments-form').find('.username-comment').val();
  var $currCommentSection = $(this).closest('.comments-section');

  createNewComment(username, comment, $currCommentSection);

};

var onCommentClick = function() {
  // this is a span
  // use closest and then find?
  var $currCommentSection = $(this).closest('.post').find('.comments-section');
  if ($currCommentSection.is(":hidden")) {
    $currCommentSection.show();
  } else {
    $currCommentSection.hide();
  }
}

var onRemoveCommentClick = function() {
  // this is remove span
  $(this).closest('.comment').remove();
}

// TODO: add function that changes the placeholder value back after submitting post
$postSubmitButton.on('click', onSubmitPost);


