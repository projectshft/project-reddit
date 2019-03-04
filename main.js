// Receive poster name and post-text inputs. Outputs them to the "post viewer" section of the html.
$('#post-button').on('click', function() {
  // event.preventDefault(); ???
  // If-SO: pass 'event' as parameter of function
  var $nameOutput = $('#name-input').val();
  var $textOutput = $('#post-body-input').val();
  console.log('$nameOutput is: ', $nameOutput);
  console.log('$textOutput is: ', $textOutput);

  // Append $postIt html output variable to the post-viewer
  $('#post-viewer').append(
    `<p>${$textOutput}</p><p align="right"><i>Posted by: <b>${$nameOutput}</b></i><br><p align-left><button
    class="btn btn-dark btn-sm"
    type="button"
    data-toggle="collapse"
    data-target="#comment-card"
    aria-expanded="false"
    aria-controls="specific-comment-card"
    id="comment-toggle-button">View comments
  </button><button
  type="button"
  class="btn btn-outline-danger btn-sm"
  id="post-remove-button">Remove Post</button><div class="border-bottom my-3"></div>`
  );

  // Empty the name and post-body input fields
  // Use empty() ??? Use va() and empty() together?
  $('#name-input').val('');
  $('#post-body-input').val('');

  // Create a variable to point to the new post entity and return it so it may be used to update the state of the message board array
  var newEntryForPostEntity = [
    { posts: [$nameOutput, $textOutput, 'There are no comments on this post.'] }
  ];
  console.log(newEntryForPostEntity);
  return newEntryForPostEntity;
  /////////////////////////////////////////////////////////////////////////////
});

$('#post-comment-button').on('click', function() {
  var $commenterNameOutput = $('#commenter-name-input').val();
  var $commentBodyOutput = $('#comment-body-input').val();
  console.log('$commenterNameOutput is: ', $commenterNameOutput);
  console.log('$commentBodyOutput is: ', $commentBodyOutput);
  // var $oneCommentOutput = ()

  // Append $postComment html output variable to the post-viewer
  $('#comment-viewer').append(
    `<p class="align-center">${$commentBodyOutput}</p><p class="align-right">By: <b>${$commenterNameOutput}</b></i></p><a  href="#"><i class="fas fa-trash-alt"></i><p align="right"><i></a><div class="border-bottom my-3"></div>`
  );

  // Empty the name and post-body input fields
  // Use empty() ??? Use va() and empty() together?
  $('#commenter-name-input').val('');
  $('#comment-body-input').val('');
  var newEntryForCommentEntity = [
    { posts: [$commenterNameOutput, $commentBodyOutput] }
  ];
  console.log(newEntryForCommentEntity);
  // postEntity.push(newEntryForCommentEntity);
  // return newEntryForCommentEntity;
});
