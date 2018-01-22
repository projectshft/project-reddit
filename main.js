//todo: add spacing - margin? - between text inputs
$( document ).ready(function(){
$('.post-button').click(function(){
  var commentsToggle = '<p class="comments small">comments</p><div class="replies hidden"><input type="text" class ="comment-text" placeholder="Comment Text"><input type"text" class="commenter-name" placeholder="User Name"><button class="btn btn-primary post-comment">Post Comment</button></div>';
  var removeButton = '<button type="button" class="btn btn-danger btn-xs remove-button">Remove Post</button>'
  var post = $('.input-post').val();
  var name = $('.input-name').val();
  var editButton = '<button type="button" class="btn btn-info btn-xs edit-button">Edit Post</button>'
  var fullPost = `<div>${commentsToggle}<p class="post-text">${post} ${editButton} ${removeButton}</p><p class="post-byline border-bottom">Posted by: <strong>${name}</strong></p></div>`;
  $('.posts').prepend(fullPost);
});
})

$('.posts').on('click', '.remove-button', function(){
  $(this).closest('div').remove();
})

$('.posts').on('click', '.comments', function(){
  var closestReplies = $(this).siblings('.replies');
  if (closestReplies.hasClass('hidden')){
    closestReplies.removeClass('hidden');
  } else {
    closestReplies.addClass('hidden');
  }
});

$('.posts').on('click', '.post-comment', function(){
  //would be nice to add error if either of these is blank
  var comment = $('.comment-text').val();
  var name = $('.commenter-name').val();
  var fullComment = `<div><p class="comment">${comment} Posted by: <strong>${name}</strong><span class="x">x</span></p>`;
  $('.replies').append(fullComment);
})

$('.posts').on('click', '.x', function(){
  $(this).closest('div').remove();
})

//Edit button function
$('.posts').on('click', '.edit-button', function(){
  var $div = $(this).closest('div');
  //add textarea input, update button, and cancel button to appropriate div
  var editArea = '<textarea class="form-control edit-area"></textarea>'
  $div.append(editArea);
  var updateButton = '<button class="btn btn-warning btn-sm update-button">Update</button>'
  var cancelbutton = '<button class="btn btn-default btn-sm cancel-edit">Cancel Edit</button>'
  $div.append(updateButton, cancelbutton);
  //get text of post being edited and make it the default contents of the edit box
  var $textarea = $div.find('textarea');
  var postText = $(this).closest('.post-text');
  var value = postText.html().split('<')[0].trim(); //grabs post text and discards html after it, as long as text doesn't contain angle brackets
  $textarea.val(value);
});

// Update button function (for editing posts)
$('.posts').on('click', '.update-button', function(){
  var $postText = $(this).siblings('.post-text');
  var oldPost = $postText.html().split('<')[0].trim(); //grabs post text and discards html after it, as long as text doesn't contain angle brackets
  var $textarea = $(this).siblings('textarea');
  var newPost = $postText.html().replace(oldPost, $textarea.val());
  $postText.html(newPost);
})

$('.posts').on('click', '.cancel-edit', function(){
  // $(this).siblings('textarea', 'button').remove();
  $(this).siblings('.edit-area').remove();
  $(this).siblings('.btn').remove();
  $(this).remove();
})
