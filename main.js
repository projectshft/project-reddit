// Setting up main variables to capture all of the inputs for use with Jquery.  Also, wrapping all of this into a single function.
$(document).ready(function() {
  $('.post-button').click(function() {
    var commentsToggle = '<p class="comments small">comments</p><div class="replies hidden"><input type="text" class ="comment-text" placeholder="Comment Text"><input type"text" class="commenter-name" placeholder="User Name"><button class="btn btn-primary post-comment">Post Comment</button></div>';
    var removeButton = '<button type="button" class="btn btn-danger btn-xs remove-button">Remove Post</button>'
    var post = $('.input-post').val();
    var name = $('.input-name').val();
   
    if (post.trim().length == 0) { // Prevent empty strings
       throw document.write ("Sorry you actually have to enter a post."); }
    if (name.trim().length == 0) { // Prevent empty strings
        throw document.write ("Sorry, you have to actually enter your name to post.") }

    var editButton = '<button type="button" class="btn btn-info btn-xs edit-button">Edit Post</button>'
    var fullPost = `<div class="full-post">${commentsToggle}<p class="post-text"><span class="post-text-span">${post}</span> </p><p class="post-byline border-bottom">Posted by: <strong>${name}</strong></p></div>`;
    $('.posts').prepend(fullPost);
  });

  $('.posts').on('click', '.remove-button', function () {
    $(this).closest('div').remove();
})



  // Creating a comments box if a post has been made.  Creating the ability to hide after 

  $('.posts').on('click', '.comments', function() {
    var closestReplies = $(this).siblings('.replies');
    if (closestReplies.hasClass('hidden')) {
      closestReplies.removeClass('hidden');
    } else {
      closestReplies.addClass('hidden');
    }
  });

  // Setting up the main properties for the comments section.  Creating the "X" trash can for deleted comments

  $('.posts').on('click', '.post-comment', function() {
    var commentInput = $(this).siblings('.comment-text');
    var commenterName = $(this).siblings('.commenter-name');
    var closestReplies = $(this).closest('.replies');
    var comment = commentInput.val();
    var name = commenterName.val();
    var fullComment = `<div><p class="comment">${comment} Posted by: <strong>${name}</strong><span class="x">x</span></p>`;
    closestReplies.append(fullComment);
  })

  // Setting up trash can for deleted comments

  $('.posts').on('click', '.x', function() {
    $(this).closest('div').remove();
  })


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
  endEdit.call(this); 
})