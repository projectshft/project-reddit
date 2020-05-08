var $postButton = $('#post');
var userPostNumber = 0;

$postButton.click(function() {
  var $userName = $('#name').val();
  var $userMessage = $('#message').val()
  //add a user count to make a unique ID number
  userPostNumber ++;


  //create a div for each post that will contain everything inside.
  $('.posts').append('<div class="userPost"></div>');

  $('.userPost').last().append('<div class="individualPosts" id="' + userPostNumber +'">' + $userMessage + '</div>');
  $('.userPost').last().append('<div class="individualPosts" id="' + userPostNumber +'"> Posted By: <strong>' + $userName + '</strong></div>');
});