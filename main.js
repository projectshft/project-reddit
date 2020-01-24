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
  var userMessage = $('#message').val();
  $('.post').append('<div>' +  userMessage + '</div>' );

  var userName = $('#name').val();
  $('.post').append('Posted By:'+'<div> <strong>'+ userName +'</strong> </div>');

  $('.post').on('click', 'div', function(){
  $(this).remove();

  })

});
