// Set a click event on the post button to post text and username above it.
$('#post-button').click(function() {
  var $postText = $('#post').val();
  var $postName = $('#name').val();
  $('#post-container').append(
    '<div> <p> <a href="#" id="delete">delete</a> <a href="#" id="comment">comment </a>' + $postText + '</p> <p>Posted By: <b>' + $postName + '</b> </p> </div> <hr>'
  )


});