/** Registers a click event on the post button.
 *   each time we post, we want to append the values of
 *   the message, the author, and a comments template
 */

let postId = 0;

$('#submit').click(function () {
  // unique Post ID used for comment button
  postId++;

  // Grab the value of the message upon click
  let $theNewMessage = $('#message').val();

  // Grab the value of the author box upon click
  let $theNewAuthor = $('#name').val();

  // defining the comments Template here, which will be used within postTemplate
  let commentsFormTemplate =
    '<div class="form-inline comments-form">' +
    ' <div class="form-group">' +
    '   <input type="text" type="text" class="form-control new-comment-text" placeholder="Comment Text">' +
    ' </div>' +
    '<div class="form-group"> ' +
    ' <input type="text" type="text" class="form-control new-comment-author" placeholder="User name">' +
    ' </div>' +
    '<button id="comments-button-for-post-' +
    postId +
    '" type="button" class="btn btn-primary comments-button">Post Comment</button>' +
    '</div>';

  let commentsContainer = '<div class="comments-container"></div>';

  // Create a post template for the new post before it is appended
  // the event timeStamp is used to create a unique ID for the comments link
  let postTemplate =
    '<div class="post panel panel-default">' +
    ' <div class="panel-body">' +
    '   <p class="post-meta"><a href="#" class="remove-post-link">Remove</a>' +
    '   | <a href="#" class="view-comments-link">Comments</a></p>' +
    '    <p>' +
    $theNewMessage +
    '</p>' +
    ' <div class="post-author"><p>Posted By: <span class="author">' +
    $theNewAuthor +
    ' </span></p></div>' +
    ' <div class="comments" style="display:none">' +
    commentsContainer +
    commentsFormTemplate +
    '</div>';
  (' </div></div>');

  // helpful to see the above in the console, just to make sure it's formatting right
  console.log(
    'The HTML template being added to the posts is \n' + postTemplate
  );

  // make a new post class for the grabbed values to be appended
  $('#posts').append(postTemplate);

  // add event listeners for each newly appended post
  toggleCommentsDisplay();
  listenForRemovePost();

  // for as many posts as we have, we need a new comment post button listener
  renderComments(postId);
});

const listenForRemovePost = function () {
  $('.remove-post-link').click(function () {
    // remove the one we want by targeting the specific post using 'this'
    $(this).closest('.post').remove();
  });
};

const toggleCommentsDisplay = () => {
  // registering an event to the link to view comments
  // off() is used immediately to prevent extra firings
  $('.view-comments-link')
    .off()
    .on('click', function () {
      // we need to find the closest post based on which link invoked toggle
      $currentPost = $(this).closest('.post');
      // the preexisting display attribute of the comments should determine what to set
      $commentsCSSDisplay = $currentPost.find('.comments').css('display');

      // log in console css display status to verify click firing only once
      console.log(
        'Before click event fired at ' +
          event.timeStamp +
          ", the comments' display was  " +
          $commentsCSSDisplay
      );

      // if the comments are not displayed, let's display them
      if ($commentsCSSDisplay === 'none') {
        $currentPost.find('.comments').css('display', 'inline-block');
      } else {
        // if they are being displayed, we'll hide them
        $currentPost.find('.comments').css('display', 'none');
      }
    });
};

const renderComments = (postId) => {
  $('#comments-button-for-post-' + postId)
    .off()
    .on('click', function () {
      // Grab the value of the message upon click
      let $newComment = $(this)
        .closest('.comments')
        .find('.new-comment-text')
        .val();
      console.log($newComment);

      // Grab the value of the author box upon click
      let $commentAuthor = $(this)
        .closest('.comments')
        .find('.new-comment-author')
        .val();

      // blank comments shouldn't post anything
      if (!$commentAuthor || !$newComment) {
        return;
      }

      // we need a template for each new comment
      let newCommentTemplate =
        '<div class="comment">' +
        $newComment +
        ' | Posted by: <span class="author">' +
        $commentAuthor +
        '</span>' +
        '<button type="button" class="btn-xs remove-comment-button"> <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>' +
        '</div>';

      // traverse to find current comments container; assigning for legibility
      // and then appending the new comment
      $currentCommentsContainer = $(this)
        .closest('.comments')
        .find('.comments-container');

      $currentCommentsContainer.append(newCommentTemplate);

      // each new comment needs to add listener to its remove button
      listenForRemoveComment();
    });
};

const listenForRemoveComment = function () {
  $('.remove-comment-button').click(function () {
    // remove the one we want by targeting the specific post using 'this'
    $(this).closest('.comment').remove();
  });
};
