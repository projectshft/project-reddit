var newPostTemplate = function(postText,nameText) {
  var postRemoveButton = '<button type="button" class="btn btn-link rem-post-btn">[X]</button>'
  var postCommentButton = '<button type="button" class="btn btn-link view-comms-btn">[comments]</button>'
  var insertPost = '<p><h4><strong>'+ postRemoveButton + postCommentButton + postText + '<small> - Posted by: ' + nameText + '</small></strong></h4></p><hr>';

  $('.posts').append(insertPost);
}

$('.submit-post-btn').click(function(){
  var postInput = $('#input-post').val();
  var nameInput = $('#input-name').val();
  newPostTemplate(postInput,nameInput);
});