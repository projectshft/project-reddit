

$('button').on('click', function () {
  var post = $('#post-input').val();
  var name = $('#name-input').val();


  $('.post-content').append('<p>'+post+'</p>'+ '<p> Posted By '+ '<strong>'+name+ '</strong></p>');
});
