$('button').click(function () {
  let name = 'Posted By: ' + $('#name').val()
  let message = $('#message').val()
  let input = `<div class="post">` + message + ' ' + '- ' + name + '</div >'
  let remove = '<div class="removeText">' + '<b>' + 'remove' + '</b>' + '</div>' + '<hr>'
  let wholePost = '<div class="entire">' + input + remove + '</nav>'

  if (!$('#message').val().length > 0) {
    alert('Type a message.')
  } else if (!$('#name').val().length > 0) {
    alert('Enter a name.')
  } else {
    $('.posts').append(wholePost)
  }
});

$('body').on('click', '.removeText', function () {
  $(this).parent().remove();
})


