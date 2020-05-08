// Set a click event on the post button to post text and username above it.
$('#post-button').click(function() {
  var $postText = $('#post').val();
  var $postName = $('#name').val();
  $('#post-container').append(
    '<div> <p> <a href="#" class="delete">delete</a> <a href="#" class="comment">comment </a>' + $postText + '</p> <p>Posted By: <b>' + $postName + '</b> </p> <hr> </div>'
  )

  $('.delete').click(function() {
    $(this).closest('div').empty();
  })
});