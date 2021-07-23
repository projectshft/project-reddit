var newPostTemplate = function(postText,nameText) {
  var insertPost = '<p><h4>' + postText + '<small> - Posted by: ' + nameText + '</small></h4></p><hr>';
  $('.posts').append(insertPost);
}

$('button').click(function(){
  var postInput = $('#input-post').val();
  var nameInput = $('#input-name').val();
  newPostTemplate(postInput,nameInput);
});