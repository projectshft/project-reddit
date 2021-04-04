$( document ).ready(function() {

  // Create new post //
  $("#submit").on("click", function() {
    // Collect input from user //
    var $name = $('#name').val();
    var $message = $('#message').val();

    // Create new div for post //
    var $newPostDiv = $('<div class="newPostDiv"></div>');
    var $newPost = $('<p></p>');
    var $hr = $('<hr></hr>');
    var $editDiv = $('<div class="editDiv"></div>');
    var $editDivComments = $('<span class="comments"></span>');
    var $editDivDelete = $('<span class="delete"></span>');
    var $commentsDiv = $('<div class=comments-div></div>');
    
    $editDivComments.text('Comments ');
    $editDivDelete.text('Delete');
    $newPost.text($message + ' - Posted By: ' + $name);

    $editDiv.append($editDivComments);
    $editDiv.append($editDivDelete);
    $newPostDiv.append($newPost);
    $newPostDiv.append($editDiv);
    createCommentsSection($commentsDiv);
    $newPostDiv.append($commentsDiv);
    $newPostDiv.append($hr);

    // Add post //
    var $postsDiv = $('.posts');
    $postsDiv.append($newPostDiv);

    // Reset input fields //
    $('form :input').val('');

    // Hide/Show Comments Section
    $editDivComments.on("click", function() {
      $commentsDiv.toggle();
    });

  });

  // Generate Comments Section //
  var createCommentsSection = function ($commentsDiv) {
    var $commentsPosts = $('<div class="comments-posts"></div>');
    var $commentForm = $('<form style="margin-top:30px;" onsubmit="event.preventDefault();"></form>');

    // Comment Form Text Input //
    var $commentTextDiv = $('<div class="form-group"></div>');
    var $commentTextInput = $('<input id="comment-text" type="text" class="form-control" placeholder="Comment Text"></input>');

    // Comment Form Name Input //
    var $commentNameDiv = $('<div class="form-group"></div>');
    var $commentNameInput = $('<input id="comment-name" type="text" class="form-control" placeholder="Your Name"></input>');

  // Comment Form Submit Button //
    var $submitCommentButton = $('<button id="submit-comment" class="btn btn-primary">Submit Comment</button>');
    
    $commentTextDiv.append($commentTextInput);
    $commentNameDiv.append($commentNameInput);
    $commentForm.append($commentTextDiv);
    $commentForm.append($commentNameDiv);
    $commentForm.append($commentTextDiv);
    $commentForm.append($commentNameDiv);
    $commentForm.append($submitCommentButton);
    $commentsDiv.append($commentsPosts);
    $commentsDiv.append($commentForm);

    // Create new comment //
  $submitCommentButton.on('click', function() {
    // Collect comment input from user //
    var $commentName = $commentNameInput.val();
    var $commentMessage = $commentTextInput.val();

    var $newCommentPost = $('<p></p>');
    $newCommentPost.text($commentMessage + ' - Posted By: ' + $commentName);
    $commentsPosts.append($newCommentPost);

    // Reset input fields //
    $('form :input').val('');
  })
  };

  
});