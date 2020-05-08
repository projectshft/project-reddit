/** Registers a click event on the post button.
 *   each time we post, we want to append the values of
 *   the message, the author, and a comments template
 */

$('#submit').click(function () {
  // Grab the value of the message upon click
  let $theNewMessage = $('#message').val();

  // Grab the value of the author box upon click
  let $theNewAuthor = $('#name').val();

  // defining the comments Template here, which will be used within postTemplate
  let commentsTemplate =
    '<div class="form-group">' +
    '<textarea id="message" type="text class="form-control" placeholder="Comment Text">' +
    '</textarea>';

  // Create a post template for the new post before it is appended
  let postTemplate =
    '<div class="post panel panel-default">' +
    ' <div class="panel-body">' +
    '   <p class="post-meta"><a href="#" class="remove-post-link">Remove</a> | <a href="#" class="view-comments-link">Comments</a></p>' +
    '    <p>' +
    $theNewMessage +
    '</p>' +
    ' <div class="post-author"><p>Posted By: <span class="author">' +
    $theNewAuthor +
    ' </span></p></div>' +
    ' <div class="comments">' +
    commentsTemplate +
    '</div>';
  (' </div></div>');

  // helpful to see the above in the console, just to make sure it's formatting right
  console.log(
    'The HTML template being added to the posts is \n' + postTemplate
  );

  // make a new post class for the grabbed values to be appended
  $('#posts').append(postTemplate);

  // add event listeners for each newly appended post
  listenForRemovePost();
  toggleCommentsSection();
});

// Register a click event on each post's "remove" link
const listenForRemovePost = function () {
  $('.remove-post-link').click(function () {
    // remove the one we want by targeting the specific post using 'this'
    $(this).closest('.post').remove();
  });
};

const toggleCommentsSection = function () {
  $('.view-comments-link').click(function () {
    // we'll refer to this a lot; easier to traverse by initializing
    let $currentPost = $(this).closest('.post');

    // if the comment class isn't visible, we want to make it visible
    // using display rather than visibility so that it doesn't take up space when hidden
    if ($currentPost.find('.comments').css('display') === 'none') {
      $currentPost.find('.comments').css('display', 'inline-block');
    } else {
      // otherwise if the comment class is showing, we want to hide it upon click
      console.log('Clicking comments link is setting comments to hidden');
      $currentPost.find('.comments').css('display', 'none');
    }
  });
};

listenForRemovePost();
toggleCommentsSection();
