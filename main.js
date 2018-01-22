//todo: add spacing - margin? - between text inputs
$(document).ready(function() {
  $('.post-button').click(function() {
    var commentsToggle = '<p class="comments small">comments</p><div class="replies hidden"><input type="text" class ="comment-text" placeholder="Comment Text"><input type"text" class="commenter-name" placeholder="User Name"><button class="btn btn-primary post-comment">Post Comment</button></div>';
    var removeButton = '<button type="button" class="btn btn-danger btn-xs remove-button">Remove Post</button>'
    var post = $('.input-post').val();
    var name = $('.input-name').val();
    var editButton = '<button type="button" class="btn btn-info btn-xs edit-button">Edit Post</button>'
    var fullPost = `<div class="full-post">${commentsToggle}<p class="post-text"><span class="post-text-span">${post}</span> ${editButton} ${removeButton}</p><p class="post-byline border-bottom">Posted by: <strong>${name}</strong></p></div>`;
    $('.posts').prepend(fullPost);
  });

//Reply handling functions
  $('.posts').on('click', '.remove-button', function() {
    $(this).closest('div').remove();
  })

  $('.posts').on('click', '.comments', function() {
    var closestReplies = $(this).siblings('.replies');
    if (closestReplies.hasClass('hidden')) {
      closestReplies.removeClass('hidden');
    } else {
      closestReplies.addClass('hidden');
    }
  });

  $('.posts').on('click', '.post-comment', function() {
    //would be nice to add error if either of these is blank
    var commentInput = $(this).siblings('.comment-text');
    var commenterName = $(this).siblings('.commenter-name');
    var closestReplies = $(this).closest('.replies');
    var comment = commentInput.val();
    var name = commenterName.val();
    var fullComment = `<div><p class="comment">${comment} Posted by: <strong>${name}</strong><span class="x">x</span></p>`;
    closestReplies.append(fullComment);
  })

  $('.posts').on('click', '.x', function() {
    $(this).closest('div').remove();
  })

//Edit button function
$('.posts').on('click', '.edit-button', function() {

  //add textarea input, update button, and cancel button to appropriate div
    var $div = $(this).closest('div');

  //check if edit area already exists, execute rest of function only if it doesn't
    var foundArea = ($div.find('.edit-area'))
    if(!foundArea.length) {
      var editArea = '<textarea class="form-control edit-area"></textarea>'
      $div.append(editArea);
      var updateButton = '<button class="btn btn-warning btn-sm update-button">Update</button>'
      var cancelbutton = '<button class="btn btn-default btn-sm cancel-edit">Cancel Edit</button>'
      $div.append(updateButton, cancelbutton);
      //get text of post being edited and make it the default contents of the edit box
      var $textarea = $div.find('.edit-area');
      var postText = $(this).closest('.post-text');
      var value = postText.children('.post-text-span').html();
      $textarea.val(value);
  }
});

//Functions for editing posts

//endEdit function used for both updating posts and canceling edits
var endEdit = function() {
  $(this).siblings('.edit-area').remove();
  $(this).siblings('.btn').remove();
  $(this).remove();
}

//Update button function
$('.posts').on('click', '.update-button', function() {
  var $postText = $(this).siblings('.post-text');
  var oldPost = $postText.children('.post-text-span').html();
  var $textarea = $(this).siblings('textarea');
  var newPost = $postText.html().replace(oldPost, $textarea.val());
  $postText.html(newPost);
  endEdit.call(this); //I don't understand why the .call works, but it was taking "this" as the window without it.
})

//Cancel edit function
$('.posts').on('click', '.cancel-edit', endEdit);


//pie-in-the-sky attempt at extension 2. it doesn't work yet.
/*
$('.posts').on('click', '.post-text-span', function() {
  var $thisPost = $(this).closest('.full-post');
  var allPosts = $('.posts').children();
  allPosts.addClass('hidden');
  $thisPost.removeClass('hidden');
})
*/
}) //end of document.ready function
