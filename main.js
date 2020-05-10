// // Set a click event on the post button to post text and username above it.
// $('#post-button').click(function() {
//   var $postText = $('#post').val();
//   var $postName = $('#name').val();
//   $('#post-container').append(
//     '<div> <p> <a href="#" class="delete">delete</a> <a href="#" class="comment">comment </a>' + $postText + '</p> <div class="comment-section"> <form class="form-inline"> <div class="form-group comment-group"> <input type="comment" class="form-control" id="comment" placeholder="Comment Text"> </div> <div class="form-group user-group"> <input type="user-name" class="form-control" id="user-name" placeholder="User Name"> </div> <button type="button" class="btn btn-primary post-comment-btn">Post Comment</button> </form> </div> <p>Posted By: <b>' + $postName + '</b> </p> <hr> </div>'
//   )
//
//   // Put delete and comment click functions inside post button click function for scope
//   $('.delete').click(function() {
//     $(this).closest('div').empty();
//   })
//
//   $('.comment').click(function() {
//     if ($(this).closest('p').closest('div').find('.comment-section').css('display') == 'none') {
//       $(this).closest('p').closest('div').find('.comment-section').css('display', 'block')
//     } else if ($(this).closest('p').closest('div').find('.comment-section').css('display') == 'block') {
//       $(this).closest('p').closest('div').find('.comment-section').css('display', 'none')
//     }
//   })
//
//   //put post-comment click function inside comment click function for scope
//   $('.post-comment-btn').click(function() {
//     var $commentText = $(this).closest('form').find('.comment-group').find('input').val()
//     var $commentName = $(this).closest('form').find('.user-group').find('input').val()
//     $(this).closest('div').prepend(
//       '<p>' + $commentText + ' By: <b>' + $commentName + '</b> <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> </p>'
//     )
//
//   })
//
// });

$('#post-button').click(function() {
  var $postText = $('#post').val();
  var $postName = $('#name').val();

  // edge-liers can't post empty posts
  if ($postText && $postName) {
    $('#post-container').append(
      '<div> <p> <a href="#" class="delete">delete</a> <a href="#" class="comment">comment </a>' + $postText + '</p> <div class="comment-section"> <form class="form-inline"> <div class="form-group comment-group"> <input type="comment" class="form-control" id="comment" placeholder="Comment Text"> </div> <div class="form-group user-group"> <input type="user-name" class="form-control" id="user-name" placeholder="User Name"> </div> <button type="button" class="btn btn-primary post-comment-btn">Post Comment</button> </form> </div> <p>Posted By: <b>' + $postName + '</b> </p> <hr> </div>'
    )
  } else {
    alert('Fields must be filled out to post');
  }

  // Put delete and comment click functions inside post button click function for scope
  $('.delete').click(function() {
    $(this).closest('div').empty();
  });

  // Unbind so function only fires once per click
  $('.comment').unbind().click(function() {
    $(this).closest('p').closest('div').find('.comment-section').toggle();

      //put post-comment click function inside comment click function for scope
      $('.post-comment-btn').unbind().click(function() {
        var $commentText = $(this).closest('form').find('.comment-group').find('input').val();
        var $commentName = $(this).closest('form').find('.user-group').find('input').val();
        if ($commentText && $commentName) {
          $(this).closest('div').prepend(
            '<p>' + $commentText + ' By: <b>' + $commentName + '</b> <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> </p>'
          );
        } else {
          alert('Fields must be filled out to post');
        }
        // unbind so as to only delete desired comment
        $('.close').unbind().click(function() {
          $(this).closest('p').empty();
        });
      });
    });
});
