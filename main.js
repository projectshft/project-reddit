var posts = [
  {name: '', message: '', comments: ''}
]


$('button').click(function () {
  var name = $('#name').val();
  $('.post').append('<p>' +  name + '</p>');
});
