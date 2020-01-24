var posts = [
  {name: '', message: '', comments: []},
]

$('button').click(function () {
  var userMessage = $('#message').val();
  $('.post').append('<p>' +  userMessage + '</p>');
});

$('button').click(function () {
  var userName = $('#name').val();
  $('.post').append('<p>' +  'Posted By: ' + userName + '</p>');
  $('userName').css("font-weight","Bold");
});
