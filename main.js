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
    var $editDivComments = $('<span class="comments" style="cursor: pointer"></span>');
    var $editDivRemove = $('<span class="remove" style="cursor: pointer"></span>');
    var $commentsDiv = $('<div class=comments-div></div>');
    
    $editDivComments.text('Comments');
    $editDivRemove.text(' Remove');
    $newPost.text($message + ' - Posted By: ' + $name);

    $editDiv.append($editDivComments);
    $editDiv.append($editDivRemove);
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

    // Remove Div when 'Remove' is clicked
    $editDivRemove.on("click", function () {
      $newPostDiv.remove();
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
   
    var $newCommentDiv = $('<div class="newCommentDiv"></div>');
    var $newCommentPost = $('<p></p>');
    var $commentEditDiv = $('<div class="editDiv"></div>');
    var $commentEditDivRemove = $('<span class="remove" style="cursor: pointer"></span>');
    $commentEditDivRemove.text('Remove');
    
    $newCommentPost.text($commentMessage + ' - Posted By: ' + $commentName);
    $commentEditDiv.append($commentEditDivRemove);

    $newCommentDiv.append($newCommentPost);
    $newCommentDiv.append($commentEditDivRemove);
    $commentsPosts.append($newCommentDiv);

    // Remove Div when 'Remove' is clicked
    $commentEditDivRemove.on("click", function () {
      $newCommentDiv.remove();
    });

    // Reset input fields //
    $('form :input').val('');
  })
  };
  
});