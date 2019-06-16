
//post click function, adds hidden comment area that can be toggled with comment button and is later appended with post comments function
$('.post-button').click(function() {
  var $postText = $('#user-post-text').val();
  var $userName = $('#user-post-name').val();
  $('.posts-list').append('<li class = "list-group-item">' +
    '<button type="button" class="btn btn-primary btn-sm remove-button"> remove</button>' +
    '<button type="button" class="btn btn-primary btn-sm comment-button"> comments</button>' +
    $postText + '<br>' + "Posted By: " +
    '<b>' + $userName + '</b>' +
    '<div class = "collapse comments-display card card-body">' +
    '<ul class="comments">' + '</ul>' +
    '<input type="text" class ="comment-text" placeholder="Comment Text"> <input type="text" placeholder="User Name" class="comment-user">' +
    '<button type="button" class="btn btn-primary btn-sm post-comment-button"> Post Comment</button>' +
    '</div>' + '</li>');
});



//event listeners - remove post, comment toggle, post comment
$('.posts-list').on('click', '.remove-button', function() {
  var $postToDelete = $(this).closest('.list-group-item');
  $postToDelete.remove();
});

$('.posts-list').on('click', '.comment-button', function() {
  var $commentsToToggle = $(this).siblings('.comments-display');
  $commentsToToggle.toggle();
});

$('.posts-list').on('click', '.post-comment-button', function() {
  $(this).siblings('.comments').append('<li class="list-unstyled">' + $(this).siblings('.comment-text').val() +
    " Posted By: " + $(this).siblings('.comment-user').val() +
    '<i class="fas fa-times"></i>' + '</li>');
});
//add remove functionality to x icon for each comment
$('.posts-list').on('click', '.fa-times', function() {
  var $commentToDelete = $(this).closest('.list-unstyled');
  $commentToDelete.remove();
});
