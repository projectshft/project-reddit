$(document).ready(function () {
  $('#postInputName').focus();
});

// add comment form function
var addCommentForm = function ($selector) {
  var $comments = $('<div></div>');
  $comments.attr('class', 'comments');

  var $commentList = $('<div></div>');
  $commentList.attr('class', 'comment-list');

  var $commentForm = $('<form></form>');
  $commentForm.attr({
    class: 'comment-form',
  });

  var $commentFormGroupName = $('<div></div>');
  $commentFormGroupName.attr('class', 'form-group for-comment-name');

  var $commentInputName = $('<input></input>');
  $commentInputName.attr({
    type: 'text',
    class: 'form-control',
    id: 'commentInputName',
    placeholder: 'Name',
  });

  var $commentFormGroupText = $('<div></div>');
  $commentFormGroupText.attr('class', 'form-group for-comment-text');

  var $commentInputText = $('<input></input>');
  $commentInputText.attr({
    type: 'text',
    class: 'form-control',
    id: 'commentInputText',
    placeholder: 'Comment',
  });

  var $commentButton = $('<button>Comment</button>');
  $commentButton.attr({
    type: 'button',
    class: 'btn btn-primary',
    id: 'submit-comment',
  });

  $commentFormGroupName.append($commentInputName);
  $commentFormGroupText.append($commentInputText);
  $commentForm.append(
    $commentFormGroupName,
    $commentFormGroupText,
    $commentButton
  );
  $comments.append($commentList, $commentForm);
  $selector.append($comments);

  $comments.hide();
};

// create post function
var createPost = function ($inputName, $inputText) {
  var $postDiv = $('<div></div>');
  $postDiv.attr('class', 'post-div');

  var $postName = $('<p></p>');
  $postName.attr('class', 'post-name');
  var $nameSpan = $('<span></span>');

  $nameSpan.text($inputName.val()).css('font-weight', 'bold');
  $postName.append($nameSpan, ' said:');

  var $postText = $('<p></p>');
  $postText.attr('class', 'post-text');
  $postText.text($inputText.val());

  var $postInfo = $('<p></p>');
  $postInfo.attr('class', 'post-info');

  var $timeStamp = $('<small></small>');
  $timeStamp.attr('class', 'timestamp text-muted');
  var date = new Date();
  $timeStamp.text(date);

  $postInfo.append($timeStamp, '<br />');

  var $postActions = $('<p></p>');
  $postActions.attr('class', 'post-actions');
  var $delete = $('<a><small>Delete</small></a>');
  $delete.attr({
    href: '#',
    class: 'post-delete',
  });

  var $commentsView = $('<a><small>Comments</small></a>');
  $commentsView.attr({
    href: '#',
    class: 'comments-view',
  });

  $postActions.append($delete, ' | ', $commentsView);
  $postInfo.append($postActions);
  $postDiv.append('<hr />', $postName, $postText, $postInfo);

  $('.posts').prepend($postDiv);
  $('.post-form')[0].reset();
  $inputName.focus();

  addCommentForm($postInfo);
};

// submit post function
var submitPost = function () {
  var $postInputName = $('#postInputName');
  var $postInputText = $('#postInputText');

  if ($postInputName.val() && $postInputText.val()) {
    createPost($postInputName, $postInputText);
  } else {
    alert('Please enter both fields to post.');
  }
};

// delete post function
var deletePost = function () {
  if (confirm('Are you sure you want to delete your post?')) {
    $(this).closest('.post-div').remove();
  }
};

// delete comment function
var deleteComment = function () {
  var $hasCommentDiv = $(this).closest('.comments').find('.comment-div');
  var $commentsView = $(this).closest('.post-div').find('.comments-view');

  if (confirm('Are you sure you want to delete your comment?')) {
    $(this).closest('.comment-div').remove();
    $(this).closest('.comment-div').find('#commentInputName').focus();
  }

  if ($hasCommentDiv.length - 1 === 0) {
    $commentsView.css('font-weight', 'normal');
  }
};

// show comments function
var showComments = function () {
  var $closestComments = $(this).closest('.post-div').find('.comments');

  if (!$closestComments.hasClass('show')) {
    $closestComments.addClass('show');
    $(this).closest('.post-div').find('#commentInputName').focus();
  } else {
    $closestComments.removeClass('show');
  }
};

// create comment function
var createComment = function ($inputName, $inputText, $comments, $formReset) {
  var $commentDiv = $('<div></div>');
  $commentDiv.attr('class', 'comment-div');

  var $commentName = $('<p></p>');
  $commentName.attr('class', 'comment-name');
  var $nameSpan = $('<span></span>');

  $nameSpan.text($inputName.val()).css('font-weight', 'bold');
  $commentName.append($nameSpan, ' commented:');

  var $commentText = $('<p></p>');
  $commentText.attr('class', 'comment-text');
  $commentText.text($inputText.val());

  var $commentInfo = $('<p></p>');
  $commentInfo.attr('class', 'comment-info');

  var $timeStamp = $('<small></small>');
  $timeStamp.attr('class', 'timestamp text-muted');
  var date = new Date();
  $timeStamp.text(date);

  $commentInfo.append($timeStamp, '<br />');

  var $commentActions = $('<p></p>');
  $commentActions.attr('class', 'comment-actions');
  var $delete = $('<a><small>Delete</small></a>');
  $delete.attr({
    href: '#',
    class: 'comment-delete',
  });

  $commentActions.append($delete);
  $commentInfo.append($commentActions);
  $commentDiv.append($commentName, $commentText, $commentInfo);
  $comments.find('.comment-list').append($commentDiv);

  $formReset.reset();
  $inputName.focus();
};

// submit comment function
var submitComment = function () {
  var $closestCommentInputName = $(this)
    .closest('.comments')
    .find('#commentInputName');
  var $closestCommentInputText = $(this)
    .closest('.comments')
    .find('#commentInputText');

  var $closestComments = $(this).closest('.comments');
  var $closestCommentFormReset = $(this)
    .closest('.comments')
    .find('.comment-form')[0];

  var $hasCommentDiv = $(this).closest('.comments').find('.comment-div');
  var $commentsView = $(this).closest('.post-div').find('.comments-view');
  console.log($hasCommentDiv.length);

  if ($closestCommentInputName.val() && $closestCommentInputText.val()) {
    createComment(
      $closestCommentInputName,
      $closestCommentInputText,
      $closestComments,
      $closestCommentFormReset
    );
  } else {
    alert('Please enter both fields to comment.');
  }

  if ($hasCommentDiv.length + 1 !== 0) {
    $commentsView.css('font-weight', 'bold');
  }
};

$('#submit-post').on('click', submitPost);

$('.posts').on('click', '.post-delete', deletePost);
$('.posts').on('click', '.comment-delete', deleteComment);
$('.posts').on('click', '.comments-view', showComments);
$('.posts').on('click', '#submit-comment', submitComment);