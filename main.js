$('#submit').on('click', function () {
  var message = $('#message').val();
  var name = $('#name').val();

  $('.posts').append('<p>' + message + ' - ' + 'Posted By: ' + name + '</p><hr>')
})