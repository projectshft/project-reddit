var button = $('button');

$('button').on('click', function () {

  var userMessage = $('#message').val();
  var userName = "<strong>Posted by:</strong>" + $('#name').val();

  $('.posts').prepend(userMessage);
  $('.posts').prepend(userName);
});
