var button = $('button');
var allPosts = [];

$('button').on('click', function () {

  var userMessage = "<li>" + $('#message').val() + "</li>";
  var userName = "<li>" + "<strong>Posted by:</strong> " + $('#name').val() + "</li>";
  var post = '<li><ul>' + userMessage + userName + '<hr>' + '<ul><li>'; 

  // $('.post-list').append(userMessage);
  // $('.post-list').append(userName);
  // $('.post-list').append('<hr>');

  $('.post-list').prepend(post);
});
