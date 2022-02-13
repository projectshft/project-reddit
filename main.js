$('.submit-button').on('click', function () {
  var $postText = $('.post-text').val();
  var $yourName = $('.your-name').val();
  $('.posts').append('<div>' + $postText + ' - Posted By: ' +$yourName + '</div>');
})

