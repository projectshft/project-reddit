//Create data structure to maintain userPosts
var $userPosts = [

];

//A post userMessage will need to be submitted when the button is clicked
$('#submit').click(function () {
  var userMessageInput = $('#postMessage').val();
  var userNameInput = $('#postName').val();
  //Edge cases for if userName or userMessage are empty
  if (userMessageInput.length === 0 || userNameInput.length === 0) {
    alert('You must enter your name and a message to post.')
  } else {
    //Post the name and message to the website
    $('.userPosts').append('<p>' + userMessageInput + '</p>');
    $('.userPosts').append('<p>' + 'Posted by: ' + userNameInput + '</p>');
    //push the userMessage and userName into $userPosts
    $userPosts.push(userMessageInput);
    $userPosts.push(userNameInput);
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
