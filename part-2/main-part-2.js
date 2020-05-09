var button = $('button');
var
var allPosts = [];

// On submitting the form, the user's post stacks
$('button').on('click', function () {

  var userMessage = "<li>" + $('#message').val() + "</li>";
  var userName = "<li>" + "Posted by: <strong> " + $('#name').val() + "</strong></li>";
  var postComments = "<li><p onclick=>comments</p></li>"; // on same <li> as userMessage
  var postRemove = null; // on same <li> as userMessage

  var post = '<li><ul>' + userMessage + userName + '<hr>' + '<ul><li>';

  $('.post-list').prepend(post);
});
