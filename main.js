//Create data structure to maintain userPosts
var $userPosts = [

];

//A post userMessage will need to be submitted when the button is clicked
$('#submit').click(function () {
  var userMessageInput = $('#postMessage').val();
  if (userMessageInput.length === 0) {
    alert('You must enter a message to post.')
  } else {
  $('.userPosts').append('<p>' + userMessageInput + '</p>');
}});
//A post userName will need to be submitted when the button is clicked
$('#submit').click(function () {
  var userNameInput = $('#postName').val();
  if (userNameInput.length === 0) {
    alert('You must enter a name to post.')
  } else {
  $('.userPosts').append('<p>' + 'Posted by: ' + userNameInput + '</p>');
}});









//A unique comment section with commentorName and commentorMessage will need to be appended to each post
// $('#comment').click(function () {
//   var commentMessage = $('#commentMessage').val();
//   $('.userPosts').append('<p>' + commentMessage + '</p>');
// });
//
// $('#comment').click(function () {
//   var commentName = $('#commentName').val();
//   $('.userPosts').append('<p>' + 'Posted By: ' + commentName + '</p>');
// });
