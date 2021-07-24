var newPostTemplate = function(postText,nameText) {
  var postRemoveButton = '<button type="button" class="btn btn-link rem-post-btn">[X]</button>';
  var postCommentButton = '<button type="button" class="btn btn-link view-comms-btn">[comments]</button>';
  var commentFormDisplay = '<div class="toggler hide-element"><form><div class="form-group"><input type="text" class="form-control commenter" id="comment-post" placeholder="Comment Text" /></div><div class="form-group"><input type="text" class="form-control commenter" id="comment-name" placeholder="Your Name" /></div></form>';
  var commentSubmitButton = '<button type="button" class="btn btn-info submit-comment-btn">Submit Comment</button></div>';
  var combinedCommentDisplay = commentFormDisplay + commentSubmitButton;

  var insertPost = '<h4><p>'+ postRemoveButton + postCommentButton + '<strong>'+ postText + '</strong><small> - Posted by: ' + nameText + '</small></p></h4>' + combinedCommentDisplay + '<hr>';

  $('.posts').append(insertPost);
  initCommentListener();

};

var initCommentListener = function() {
  $('.view-comms-btn').off('click');
  $('.view-comms-btn').on('click', function() {
  console.log('click');

  var $associatedCommentDiv = $(this).closest('h4').next('.toggler');
  $associatedCommentDiv.toggleClass('hide-element');

})
};

$('.submit-post-btn').click(function() {
  var postInput = $('#input-post').val();
  var nameInput = $('#input-name').val();
  for(i=0; i < $('form').length; i++) {
    $('form')[i].reset();
    };
  newPostTemplate(postInput,nameInput);
});



