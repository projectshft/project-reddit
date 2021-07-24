var newPostTemplate = function(postText,nameText) {
  var postRemoveButton = '<button type="button" class="btn btn-link rem-post-btn">[X]</button>';
  var postCommentButton = '<button type="button" class="btn btn-link view-comms-btn">[comments]</button>';
  var commentFormDisplay = '<div class="toggler hide-element"><div class="comments"></div><form><div class="form-group"><input type="text" class="form-control comment-post comment-width-adj" id="comment-post" placeholder="Comment Text" /></div><div class="form-group"><input type="text" class="form-control comment-name comment-width-adj" id="comment-name" placeholder="Your Name" /></div></form>';
  var commentSubmitButton = '<button type="button" class="btn btn-info submit-comm-btn">Submit Comment</button></div>';
  var combinedCommentDisplay = commentFormDisplay + commentSubmitButton;
  var insertPost = '<h4><p>'+ postRemoveButton + postCommentButton + '<strong>'+ postText + '</strong><small> - posted by: ' + nameText + '</small></p></h4>' + combinedCommentDisplay + '<hr>';

  $('.posts').append(insertPost);
  initCommentToggleListener();
  initCommentSubmitListener();
};

var newCommentTemplate = function(commentText,commentName,matchCommentToPost) {
  var commentRemoveButton = '<button type="button" class="btn btn-link rem-comm-btn">[X]</button>';
  var insertComment = '<h5 class="new"><p>' + commentRemoveButton + '"' + commentText +'"<small> - posted by: ' + commentName + '</small></p></h5>';

  matchCommentToPost.append(insertComment);
  initCommentRemoveListener();

};

var initPostSubmitListener = function () {
  $('.submit-post-btn').click(function() {
    var postTextInput = $('#input-post').val();
    var postNameInput = $('#input-name').val();
    for(i=0; i < $('form').length; i++) {
      $('form')[i].reset();
      };
    newPostTemplate(postTextInput,postNameInput);
  });
};

var initCommentSubmitListener = function() {
  $('.submit-comm-btn').off('click');
  $('.submit-comm-btn').on('click', function() {
    var commentTextInput = $(this).closest('.toggler').find('#comment-post').first().val();
    var commentNameInput = $(this).closest('.toggler').find('#comment-name').first().val();
    var $associatedPostForComment = $(this).closest('.toggler').children().first();
    for(i=0; i < $('form').length; i++) {
      $('form')[i].reset();
      };
    newCommentTemplate(commentTextInput,commentNameInput,$associatedPostForComment);
  });
};

var initCommentToggleListener = function() {
  $('.view-comms-btn').off('click');
  $('.view-comms-btn').on('click', function() {
  var $associatedCommentDiv = $(this).closest('h4').next('.toggler');
  $associatedCommentDiv.toggleClass('hide-element');
});
};

var initCommentRemoveListener = function() {
  $('.rem-comm-btn').off('click');
  $('.rem-comm-btn').on('click', function() {
    console.log('click!!!');
  var removedComment = $(this).closest('.new');
  removedComment.remove();
  });
};

initPostSubmitListener();

