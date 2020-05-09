var $postButton = $('#post');
var userPostNumber = 0;

$postButton.click(function() {
  var $userName = $('#name').val();
  var $userMessage = $('#message').val()
  //add a user count to make a unique post number for the class
  userPostNumber ++;

  //creating a div element for each post that will contain the form details inside.
  $('.posts').append('<div class="userPost"></div>');
  //append message and name to newly created userPost div
  $('.userPost').last().append('<div class="individualPostMessage" id="message' + userPostNumber +'">' + $userMessage + '</div>');
  $('.userPost').last().append('<div class="individualPostName" id="name' + userPostNumber +'"> Posted By: <strong>' + $userName + '</strong></div>');

  //adding "remove" and "comments" to the user's post message
  var $newMessage = $('.individualPostMessage').last();
  
  $('<span class="addComments">comments </span>').prependTo($newMessage);
  $('<span class="removeOption">remove </span>').prependTo($newMessage);
  
  //adding css to "comments" and "remove" class
  $('.removeOption, .addComments').css('color', 'blue');

});