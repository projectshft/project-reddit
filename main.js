$('#submit').on('click', function () {
  var textInput = $('#message').val();
  var nameInput = $('#name').val();
  
  $('.posts').append('<li>' + textInput + ' - Posted By: ' + nameInput + '</li>');
  //debugger;
});

