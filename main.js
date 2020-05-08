// Set a click event on the post button to post text and username above it.
$('#post-button').click(function() {
  var $postText = $('#post').val();
  var $postName = $('#name').val();
  $('#post-container').append(
    '<div> <p> <a href="#" class="delete">delete</a> <a href="#" class="comment">comment </a>' + $postText + '</p> <div class="comment-section"> </div> <p>Posted By: <b>' + $postName + '</b> </p> <hr> </div>'
  )

  // Put delete and comment click functions inside post button click function for scope
  $('.delete').click(function() {
    $(this).closest('div').empty();
  })

  $('.comment').click(function() {
    alert('it\'s been clicked');
    $(this).closest('p').closest('div').find('.comment-section').append(
      '<form class="form-inline"> <div class="form-group"> <input type="comment" class="form-control" id="comment" placeholder="Comment Text"> </div> <div class="form-group"> <input type="user-name" class="form-control" id="user-name" placeholder="User Name"> </div> <button type="button" class="btn btn-primary post-comment-btn">Post Comment</button> </form>'
    )

    $('.post-comment-btn').click(function() {
      alert('button clicked. dog is barking outside')
    })

  })
});
