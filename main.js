var newPostTemplate = function(postText,nameText) {
  var postRemoveButton = '<button type="button" class="btn btn-link rem-post-btn">[X]</button>';
  var postCommentButton = '<button type="button" class="btn btn-link view-comms-btn">[comments]</button>';
  var commentFormDisplay = '<div class="toggler hide-element"><form><div class="form-group"><input type="text" class="form-control commenter" id="comment-post" placeholder="Comment Text" /></div><div class="form-group"><input type="text" class="form-control commenter" id="comment-name" placeholder="Your Name" /></div></form>';
  var commentSubmitButton = '<button type="button" class="btn btn-info submit-comment-btn">Submit Comment</button></div>';
  var combinedCommentDisplay = commentFormDisplay + commentSubmitButton;

  var insertPost = '<p><h4><strong>'+ postRemoveButton + postCommentButton + postText + '<small> - Posted by: ' + nameText + '</small></strong></h4></p>' + combinedCommentDisplay + '<hr>';

  $('.posts').append(insertPost);
  
  //make into own func
  $('.view-comms-btn').click(function(){
    console.log('click!');
    $('.toggler').toggleClass("hide-element");
  });

}

$('.submit-post-btn').click(function() {
  var postInput = $('#input-post').val();
  var nameInput = $('#input-name').val();
  $('form')[0].reset();
  newPostTemplate(postInput,nameInput);
});
