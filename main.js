$('#submit').on('click', function () {
  var message = $('#message').val();
  var name = $('#name').val();

  if (message && name) {
    $('.posts').append(
        '<div class="post">'
        + '<p>' + message + ' - ' + 'Posted By: ' + name + '</p>'
        + '<a class="remove-post">remove</a><span> --- </span>'
        + '<a class="show-comments">comments</a><hr>'
        +'</div>'
    )
    $('#post-form')[0].reset();
  }
})

$('body').on('click', '.remove-post', function () {
  $(this).closest('.post').remove();
})
