var button = $('button');

$('button').on('click', function () {

  var userMessage = "<li>" + $('#message').val() + "</li>";
  var userName = "<li>" + "<strong>Posted by:</strong> " + $('#name').val() + "</li>";


  $('.post-list').append(userMessage);
  $('.post-list').append(userName);
  $('.post-list').append("<li class='divider'></li>");
});
