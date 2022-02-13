// TODO: can't submit comment if one comment form is open with multiple posts
// CONSIDER: Create separate create comments function, to go with submit content handler


// focus when document ready
$(document).ready(function () {
  $('#postInputName').focus();
});

// create post function
var createPost = function ($inputName, $inputText) {

  // new post div
  var $postDiv = $('<div></div>');
  $postDiv.attr('class', 'post-div');
  
  // new post name
  var $postName = $('<p></p>');
  $postName.attr('class', 'post-name');

  var $nameSpan = $('<span></span>');

  $nameSpan.text($inputName.val())
    .css('font-weight', 'bold');
  $postName.append($nameSpan, ' said:');

  // post text
  var $postText = $('<p></p>');
  $postText.attr('class', 'post-text');

  $postText.text($inputText.val());

  // post info
  var $postInfo = $('<p></p>')
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
    'class': 'post-delete',
  });

  var $commentsView = $('<a><small>Comments</small></a>');
  $commentsView.attr({
    href: '#',
    'class': 'comments-view',
  });

  // compile post
  $postActions.append($delete, ' | ', $commentsView);
  $postInfo.append($postActions);
  $postDiv.append('<hr />', $postName, $postText, $postInfo);

  $('.posts').prepend($postDiv);

  // post form reset and focus
  $('.post-form')[0].reset();
  $inputName.focus(); 

  // call comment form function
  commentForm($postInfo);
};

// submit post function

var submitPost = function () {
  var $postInputName = $('#postInputName');
  var $postInputText = $('#postInputText');

  // render post if
  if ($postInputName.val() && $postInputText.val()) {
    createPost($postInputName, $postInputText);   
  } else {
    alert('Please enter both fields to post.');
  }
};

// comment form function
var commentForm = function ($selector) {

  // create comment section
  var $comments = $('<div></div>');
  $comments.attr('class', 'comments');

  // create new comment list
  var $commentList = $('<div></div>');
  $commentList.attr('class', 'comment-list');

  // create form
  var $commentForm = $('<form></form>');
  $commentForm.attr({
    'class': 'comment-form',
    onsubmit: 'event.preventDefault()',
  });

  // form group div for comment name
  var $commentFormGroupName = $('<div></div>');
  $commentFormGroupName.attr('class', 'form-group for-comment-name');

  // input for comment name
  var $commentInputName = $('<input></input>');
  $commentInputName.attr({
    type: 'text',
    'class': 'form-control',
    id: 'commentInputName',
    placeholder: 'Name',
  });
  
  // form group div for comment text
  var $commentFormGroupText = $('<div></div>');
  $commentFormGroupText.attr('class', 'form-group for-comment-text');

  // input for comment text
  var $commentInputText = $('<input></input>');
  $commentInputText.attr({
    type: 'text',
    'class': 'form-control',
    id: 'commentInputText',
    placeholder: 'Comment',
  });

  // comment submit button
  var $commentButton = $('<button>Comment</button>');
  $commentButton.attr({
    type: 'submit',
    'class': 'btn btn-primary',
    id: 'submit-comment',
  });

  // compile comment form
  $commentFormGroupName.append($commentInputName);
  $commentFormGroupText.append($commentInputText);
  $commentForm.append($commentFormGroupName, $commentFormGroupText, $commentButton);
  $comments.append($commentList, $commentForm);
  
  $selector.append($comments);

  $comments.hide();
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
  console.log($hasCommentDiv.length);

  if (confirm('Are you sure you want to delete your comment?')) {
    $(this).closest('.comment-div').remove();
    $(this).closest('.comment-div').find('#commentInputName').focus();
  }
  
  // font-weight normal if comments do not exist
  if (($hasCommentDiv.length - 1) === 0) {
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
  // new comment div
  var $commentDiv = $('<div></div>');
  $commentDiv.attr('class', 'comment-div');

  // new comment name
  var $commentName = $('<p></p>');
  $commentName.attr('class', 'comment-name');

  var $nameSpan = $('<span></span>');

  $nameSpan.text($inputName.val())
    .css('font-weight', 'bold');
  $commentName.append($nameSpan, ' commented:');

  // comment text
  var $commentText = $('<p></p>');
  $commentText.attr('class', 'comment-text');

  $commentText.text($inputText.val());

  // comment info
  var $commentInfo = $('<p></p>')
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
    'class': 'comment-delete',
  })

  // compile comment
  $commentActions.append($delete);
  $commentInfo.append($commentActions);
  $commentDiv.append($commentName, $commentText, $commentInfo);
  $comments.find('.comment-list').append($commentDiv);

  // comment form reset and focus
  $formReset.reset();
  $inputName.focus();
};

// submit comment function
var submitComment = function () {

  var $closestCommentInputName = $(this).closest('.comments').find('#commentInputName');
  var $closestCommentInputText = $(this).closest('.comments').find('#commentInputText');

  var $closestComments = $(this).closest('.comments');
  var $closestCommentFormReset = $(this).closest('.comments').find('.comment-form')[0];

  var $hasCommentDiv = $(this).closest('.comments').find('.comment-div');
  var $commentsView = $(this).closest('.post-div').find('.comments-view');
  console.log($hasCommentDiv.length);


  // render comment if  
  if ($closestCommentInputName.val() && $closestCommentInputText.val()) {
    createComment($closestCommentInputName, $closestCommentInputText, $closestComments, $closestCommentFormReset);    
  } else {
    alert('Please enter both fields to comment.');
  }

  // font-weight bold if comments exist
  if (($hasCommentDiv.length + 1) !== 0) {
    $commentsView.css('font-weight', 'bold');
  }  
};


$('#submit-post').on('click', submitPost);

$('.posts').on('click', '.post-delete', deletePost);
$('.posts').on('click', '.comment-delete', deleteComment);
$('.posts').on('click', '.comments-view', showComments);
$('.posts').on('click', '#submit-comment', submitComment);