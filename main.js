$('.post').click( function (event) {
  event.preventDefault(); // Prevent default submit behavior on click

  // Get the unordered list for posts
  let $posts = $('.posts');

  // Get the poster's name and message
  let $message = $('#message').val();
  if ($message.trim().length == 0) { // Prevent empty strings
    return;
  }
  let $name = $('#name').val();
  if ($name.trim().length == 0) {
    return;
  }

  /*
    Creates a post template with remove and comment show/hide links,
    the message text, an empty comments section, an inline form for adding
    comments, and the post author's name.
  */
  let template =
    '<li>' +
    ' <p>' +
    '   <a href="#" class="post-remove">remove</a>' +
    '   <a href="#" class="post-edit">edit</a>' +
    '   <a href="#" class="comment-show">comments</a>' +
    '   <span class="message-text">' + $message + '</span>' +
    ' </p>' +
    ' <div class="comments">' +
    '   <ul class="comment-thread">' +
    '   </ul>' +
    '   <form class="form-inline">' +
    '     <input type="text" class="form-control mb-2 mr-2 comment-text" placeholder="Comment Text" required>' +
    '     <input type="text" class="form-control mb-2 mr-2 comment-username" placeholder="User Name" required>' +
    '     <button type="submit" class="btn btn-primary mb-2 comment-post">Post Comment</button>' +
    '   </form>' +
    ' </div>' +
    ' <p class="message-name">Posted By: <strong>' + $name + '</strong></p>' +
    '<hr></li>';

  // Add the filled in template to the top of the posts list
  $posts.prepend(template);

  // Hide the new post's comments section
  let $commentsSection = $(this).parent().find('.comments').first();
  $commentsSection.toggle();

  // Remove link to delete the selected post
  $('.post-remove').click( function () {
    $(this).closest('li').remove();
  });

  // Edit link - edit an existing post's message
  $('.post-edit').click( function(event) {

    event.stopImmediatePropagation();

    let $messageText = $(this).siblings('.message-text');

    // Handle message being saved
    if ($(this).text() === 'save') {
      $messageText.attr({
        class: 'message-text',
        contenteditable: 'false'
      });
      $(this).text('edit');
      return;
    }

    // Make the message editable and change the edit text to 'save'
    $messageText.attr({
      class: 'message-text  form-control',
      contenteditable: 'true'
    });
    $(this).text('save');
  });

  // Comments link to show/hide the selected comments section
  $('.comment-show').click( function (event) {
    // Prevent erroneous comment toggling
    event.stopImmediatePropagation();

    let $comments = $(this).parent().next();
    $comments.toggle();
  });

  // Comment posting functionality
  $('.comment-post').click( function(event) {

    // Prevent default submit behavior on click
    event.preventDefault();
    // Prevents (earlier) posts from posting multiple comments for a single submit
    event.stopImmediatePropagation();

    // Get the comment thread, new comment message, and user name
    let $commentThread = $(this).parent().prev();
    let $commentText = $(this).prev().prev().val();
    if ($commentText.trim().length == 0) { // Test for empty strings
      return;
    }
    let $commentUserName = $(this).prev().val();
    if ($commentUserName.trim().length == 0) {
      return;
    }

    // Create a remove comment button
    let removeComment = '<strong class="comment-remove text-primary">&times</strong>';

    // New comment template
    let template =
      '<li>' +
      ' <p>' + $commentText + ' Posted By: <strong>' + $commentUserName + ' </strong>' + removeComment + '</p>' +
      '</li>';

    // Comments are added to the end of the comments list (oldest to newest)
    $commentThread.append(template);

    // Delete a selected comment
    $('.comment-remove').click( function () {
      $(this).parent().remove();
    });
  });
});
