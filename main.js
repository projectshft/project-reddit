var $postButton = $('#post');
var userPostNumber = 0;

$postButton.click(function() {
  var $userName = $('#name').val();
  var $userMessage = $('#message').val()
  //add a user count to make a unique post number for the class
  userPostNumber ++;

  //create a div for each post that will contain everything inside.
  $('.posts').append('<div class="userPost"></div>');
  //append message and name to newly created userPost div
  $('.userPost').last().append('<div class="individualPostMessage" id="message' + userPostNumber +'">' + $userMessage + '</div>');
  $('.userPost').last().append('<div class="individualPostName" id="name' + userPostNumber +'"> Posted By: <strong>' + $userName + '</strong></div>');

  //adding "remove" and "comments" to post message
  var $newMessage = $('.individualPostMessage').last();
  
  $('<span>comments </span>').prependTo($newMessage);
  $('<span class="removeOption">remove </span>').prependTo($newMessage);
  

});