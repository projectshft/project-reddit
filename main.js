var $removeButton = $('<a class="remove-button">Remove</a>');
var $commentButton = $('<a class="comment-button">Comment</a>');
var $commentForm = $('.comment-form');


$commentForm.hide();
$('.comments').hide();


$('.submit-button').on('click', function () {
  makePost('.posts');
})

var makePost = function (location) {
  var $postText = $('.post-text').val();
  var $yourName = $('.your-name').val();
  var $post = $('<div>' + $postText + ' - Posted By: ' +$yourName + '</div>');
  $removeButton.clone(true).appendTo($post);
  $commentButton.clone(true).appendTo($post);
  $(location).append($post);
};

var makeComment = function (location) {
  var $postText = $('.comment-text').val();
  var $yourName = $('.comment-name').val();
  $(location).append('<div> ---> ' + $postText + ' - Posted By: ' +$yourName + '</div>');
};



$commentButton.on('click', function () {
  $commentForm.toggle();
  $('.comments').toggle();
  
})

$('.comment-submit-button').on('click', function () {
  $commentSection = $('<div></div');
  $('.comments').append($commentSection);
  makeComment($commentSection);
  $removeButton.clone(true).appendTo($commentSection);
  
  
})


$removeButton.on('click', function () {
  $(this).siblings().parent().remove();
})

