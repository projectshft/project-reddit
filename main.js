$('button').on('click', function () {
  var inputPost = $('#post').val();
  var inputName = $('#name').val();

  if (inputPost && inputName) {     // ensure user enters an entry in post AND name fields
      $('.posts').append('<p>' + inputPost + ' - Posted By: ' + inputName + '</p>' + '<hr>');
      
      $('form :input').val('');     // reset the input fields for the next comment
  }
});

$('.posts').on('click', 'p', function () {    // erase a comment upon clicking on it
  $(this).remove();
});
