//A post including userMessage and userName will need to be submitted when the button is clicked
$('#submit').click(function () {
  var userMessageInput = $('#postMessage').val();
  var userNameInput = $('#postName').val();
  //Edge cases for if userName or userMessage are empty will alert
  if (userMessageInput.length === 0 || userNameInput.length === 0) {
    alert('You must enter your name and a message to post.')
  } else {
    //Post the name and message to the website with a delete button and a comment section
    $('.userPosts').append('<p>' + userMessageInput + '</p>' +
    '<p class="userName">' + 'Posted by: ' + userNameInput + '</p>' +
    '<button id="comment" class="btn btn-primary">' + 'Comment' + '</button>' +
    '<button id="delete-post" class="btn btn-primary">' + 'Delete' + '</button>' +
    '<input id="commentMessage" type="text" class="form-control comment" placeholder="Comment">' + '</input>' +
    '<input id="commentName" type="text" class="form-control comment" placeholder="Name">' + '</input>')
  }});


//A comment section with commentorName and commentorMessage will need to be appended to each post
$('.userPosts').on('click', '#comment', (function () {
  var commentMessage = $('#commentMessage').val();
  var commentName = $('#commentName').val();
  if (commentMessage.length === 0 || commentName.length === 0) {
    alert('You must enter your name and a message to post a comment.')
  } else {
  $(this).parent().append('<p>' + commentMessage + '</p>' +
  '<p>' + 'Posted By: ' + commentName + '</p>' +
  '<button id="toggle-comments" class="btn btn-primary">' + 'Toggle Comments' + '</button>' +
  '<button id="delete-comment" class="btn btn-primary">' + 'Delete comment' + '</button>');
}}));


//Remove a post
$('#delete-post').on('click', function () {
  $(this).userPosts().remove();
});

//toggle comment section
$('#toggle-comments').on('click', function () {
  $(this).next().toggle();
});

//delete comment
$('#delete-comment').on('click', function () {
  $(this).userPosts().remove();
});
