$('#submit').on('click', function () {
  var textInput = $('#message').val();
  var nameInput = $('#name').val();
  //need to remove bullet
  $('.posts').append('<li>' + textInput + ' - Posted By: ' + nameInput + '</li>');
});

