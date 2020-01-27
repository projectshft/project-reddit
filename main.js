// Setting up main variables to capture all of the inputs for use with Jquery.  Also, wrapping all of this into a single function.


$(document).ready(function() {
  $('.post-button').click(function() {
    var commentsToggle = '<p class="comments small">comments</p><div class="replies hidden"><input type="text" class ="comment-text" placeholder="Comment Text"><input type"text" class="commenter-name" placeholder="User Name"><button class="btn btn-primary post-comment">Post Comment</button></div>';

    var post = $('.input-post').val();
    var name = $('.input-name').val();
   
    if (post.trim().length == 0) { // Prevent empty strings
       return; }
    if (name.trim().length == 0) { // Prevent empty strings
        return; }

    var fullPost = `<div class="full-post">${commentsToggle}<p class="post-text"><span class="post-text-span">${post}</span> </p><p class="post-byline border-bottom">Posted by: <strong>${name}</strong></p></div>`;
    $('.posts').prepend(fullPost);
  });

 

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