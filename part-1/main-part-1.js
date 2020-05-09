var button = $('button');

$('button').on('click', function () {

  var userMessage = "<li>" + $('#message').val() + "</li>";
  var userName = "<li>" + "<strong>Posted by:</strong> " + $('#name').val() + "</li>";


  $('.post-list').prepend(userMessage);
  $('.post-list').prepend(userName);
  $('.post-list').prepend('<hr>');


});
