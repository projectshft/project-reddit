var $formSubmitButton = $('#submit-post');

var onSubmitPost = function() {
  var username = $('#username').val();
  var postContent = $('#post-text').val();
  
  createNewPost(username, postContent);
}

var createNewPost = function(username, post) {
  var $newPost = $(`<div class="post"><hr /><p>${post} - Posted By: ${username}</p></div>`);
  
  $('.posts').append($newPost);
}

$formSubmitButton.on('click', onSubmitPost);

