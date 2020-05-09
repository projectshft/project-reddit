var button = $('button');

$('button').on('click', function () {

  var userMessage = "<li>" + $('#message').val() + "</li>";
  var userName = "<li>" + "<strong>Posted by:</strong> " + $('#name').val() + "</li>";
  var post = '<li><ul>' + userMessage + userName + '<hr>' + '<ul><li>'; 

  $('.post-list').prepend(post);
});
