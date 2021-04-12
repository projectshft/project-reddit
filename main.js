// Full disclosure: everything works fine with just one post. Commenting becomes iffy with more than one post.


$('#post-submit').on('click', function () {

  var newUniquePost = '<div class="unique-post"></div>'
  $('#posts').append(newUniquePost);

  var newCommentSection = '<div class="comment-section"><div class="form-holder"></div></div>'
    
  var $postMessage = $('#post-message').val();
  var $posterName = $('#poster-name').val();
  var $lastUniquePost = $('.unique-post').last();

  $lastUniquePost.append('<p>' + $postMessage + '</p>');
  $lastUniquePost.append('<p><strong>Posted by: </strong>' + $posterName + '</p>');
  $lastUniquePost.append('<p class="remove-post">Remove Post</p>')
  $lastUniquePost.append('<p class="toggle-comments">Show Comments >></p>')
  
    
  $lastUniquePost.append(newCommentSection);

  $lastUniquePost.append('<hr>');
  
  $('#post-form')[0].reset();

  manageComments();
  toggleCommentSection();
  removePost();

});

var removePost = function() {
  $('.remove-post').on('click', function (e) {
    var eventTarget = $(e.target);
    eventTarget.parents('.unique-post').remove();
});
};

var toggleCommentSection = function () {
  $('.toggle-comments').on('click', function(e) {
    var $eventTarget = $(e.target);
    var $element = $(this);
    var $currentCommentSection = $eventTarget.next('.comment-section')
    var $formHolder = $('.form-holder');

    if ($currentCommentSection.css('display') === 'none') {
  
      $currentCommentSection.css('display', 'block');

      $element.text('<< Hide Comments');
      $('#comment-form').appendTo($formHolder);

    } else if ($currentCommentSection.css('display') === 'block') {
      
      $currentCommentSection.css('display', 'none');
      $element.text('Show Comments >>');
      $('#comment-form').appendTo($('.comment-form-storage'));

    };

  });
  
};



var manageComments = function () {
  $('#comment-submit').on('click', function (e) {
  var $eventTarget = $(e.target);
  var $commentSection = $('.comment-section');
  var $closestCommentSection = $eventTarget.closest($commentSection);

  var newUniqueComment = '<div class="unique-comment"></div>'
  $closestCommentSection.prepend(newUniqueComment);
  
  var $commentMessage = $('#comment-message').val();
  var $commenterName = $('#commenter-name').val();
  var $firstUniqueComment = $('.unique-comment').first();
  
  $firstUniqueComment.append('<p>' + $commentMessage + '</p>');
  $firstUniqueComment.append('<p><strong>Commented by: </strong>' + $commenterName + '</p>');
  $firstUniqueComment.append('<p class="remove-comment">Remove Comment</p>');
  $firstUniqueComment.append('<hr>');

  $('#comment-form')[0].reset();

  $('.remove-comment').on('click', function (e) {
    var eventTarget = $(e.target);
    eventTarget.parents('.unique-comment').remove();
  });
});

};



