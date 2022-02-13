$('.submit-button').on('click', function () {
  var $postText = $('.post-text').val();
  var $yourName = $('.your-name').val();
  $('.posts').append('<div>' + $postText + ' - Posted By: ' +$yourName + '</div>');
  createButtons();
})

var createButtons = function () {
  var $removeButton = $('<a>Remove</a>');
  var $commentButton = $('<a>Comment</a>');
  $('.posts').append($removeButton).append($commentButton);
}