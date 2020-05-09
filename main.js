
//A post userMessage will need to be submitted when the button is clicked
$('#submit').click(function () {
  var userMessageInput = $('#postMessage').val();
  $('.userPosts').append('<p>' + userMessageInput + '</p>');
});
//A post userName will need to be submitted when the button is clicked
$('#submit').click(function () {
  var userNameInput = $('#postName').val();
  $('.userPosts').append('<p>' + 'Posted By: ' + userNameInput + '</p>');
});
//A unique comment section with commentorName and commentorMessage will need to be appended to each post
$('#comment').click(function () {
  var commentMessage = $('#commentMessage').val();
  $('.userPosts').append('<p>' + commentMessage + '</p>');
});

$('#comment').click(function () {
  var commentName = $('#commentName').val();
  $('.userPosts').append('<p>' + 'Posted By: ' + commentName + '</p>');
});
