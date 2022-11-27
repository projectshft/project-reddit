$('button').on('click', function () {
  var inputPost = $('#post').val();
  var inputName = $('#name').val();

  $('.posts').append('<p>' + inputPost + ' - Posted By: ' + inputName + '</p>' + '<hr>');

  $('form :input').val('');
});

$('body').on('click', 'p', function () {
  $(this).remove();
});