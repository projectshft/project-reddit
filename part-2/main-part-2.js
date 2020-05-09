var button = $('button');
var allPosts = [];

// On submitting the form, the user's post stacks
$('button').on('click', function () {

  var userMessage = "<li>" + $('#message').val() + "</li>";
  var userName = "<li>" + "Posted by: <strong> " + $('#name').val() + "</strong></li>";
  var postComments = null;
  var postRemove = null; // on same <li> as userMessage

  var post = '<li><ul>' + userMessage + userName + '<hr>' + '<ul><li>';

  $('.post-list').prepend(post);
});
