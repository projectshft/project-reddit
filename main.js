var postCounter = 0;

var createPost = $('#post').on('click', function () {
  var commentsSection = '<div class="comments container align-middle comments-hide">' +
    '<div class="row">' +
      '<div class="post-comments"></div>' +
    '</div>' +
    '<div class="row">' +
      '<input class="comment-input" placeholder="Comment Text" />' +
    '</div>' +
    '<div class="row">' +
      '<input class="comment-name-input" placeholder="Your Name" />' +
    '</div>' +
    '<div class="row">' +
      '<button id="submit-comment" class="btn btn-primary">' +
        'Submit Comment' +
      '</button>' +
    '</div>' +
  '</div>' 
  ;

  if ($('.post-input')[0].value === '' || $('.name-input')[0].value === ''){
    alert('Please enter text before posting');
  } else {
    var textInput = $('.post-input')[0].value;
    var nameInput = $('.name-input')[0].value;

    var newPost = '<h3 class="post-content">' +
    textInput +
    '</h3>' +
    '<p class="post-author">' +
      'Posted By: ' + nameInput +
    '</p>' +
    '<h3 class="fs-h6 link-primary comment-button">Comments</h3>' +
    '<h3 class="fs-h6 link-primary remove-post">Remove</h3>'
    ;

    $(".posts").append(
      '<div id="' + postCounter + '" class="post card">' +
        newPost +
        commentsSection +
      '</div>'
    );

    postCounter++;
  };

  $('.post-input')[0].value = '';
  $('.name-input')[0].value = '';
});

var showComments = $('.posts').on('click', '.comment-button', function () {
  var $currentComments = $(this).siblings('.comments');

  if($currentComments.prop('classList').contains('comments-hide')) {
    $currentComments.prop('classList').remove('comments-hide');
  } else {
    $currentComments.prop('classList').add('comments-hide');
  };
});

var removePost = $('.posts').on('click', '.remove-post', function () {
  $(this).parent().remove();
});

var createComment = $('.posts').on('click', '#submit-comment', function () {
  var $commentInput = $(this).parent().siblings().find('.comment-input')[0].value;
  var $commentNameInput = $(this).parent().siblings().find('.comment-name-input')[0].value;
  var $currentCommentSection = $(this).closest('.post').find('.post-comments');

  
  if($commentInput === '' || $commentNameInput === '') {
    alert('Please enter text before posting');
  } else {
    var setComment = '<p class="comment-content">' +
        $commentInput +
      '</p>' +
      '<p class="comment-author text-muted">' +
        'Posted By: ' + $commentNameInput +
      '</p>'
    ;

    $currentCommentSection.append(
      '<div class="comment card">' +
        setComment +
      '</div>'
    );
  }
  

  $(this).parent().parent().find('.comment-input')[0].value = '';
  $(this).parent().parent().find('.comment-name-input')[0].value = '';
});