var submitPost = $('#submit-post').on('click', function () {
  var postInput = $('#post-input').val();
  var nameInput = $('#name-input').val();
  
  $('.posts').append('<p class="feed-post"><button id="remove-post" type="button" class="btn btn-link">Remove</button><button id="view-comments" type="button" class="btn btn-link">Comments</button>' + postInput + ' - Posted By: ' + nameInput + '</p>');
});

$('.posts').on('click', function (e) {
  var $removeElement = $(e.target).parent('p');
  
  $removeElement.remove();
});