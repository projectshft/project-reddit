//this is an array of objects containing the posts information

var posts = [
  //the text of the post
  {message: 'message',
  // the name of the poster
  name:'name',
  //
  comment: [{commentText:'commenttext', commentName:'commentname' }]
  }
]

$('.btn-primary').click(function () {
  var message = $('#message').val();
  $('.post').append('<p>' +  message + '</p>');
  var name = $('#name').val();
  $('.post').append('<p>' +  name + '</p>');

  });
