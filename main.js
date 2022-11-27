$('button').on('click', function () {
  var inputPost = $('#post').val();
  var inputName = $('#name').val();

  $('.posts').append('<p>' + inputPost + ' - Posted By: ' + inputName + '</p>');

  $('p').click(function () {
    $(this).remove();
  });
});