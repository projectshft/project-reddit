/*
I know that I need to add unique IDs to every post div that is created so that I can then post the reply
comments to the associated unique post/thread. I tried utilizing the data attributes option, and also
considered converting the posts div into an array and using index numbers for each post ID so I could
call them later on, but couldn't get anything to function properly. 

I also know that the comment reply form is showing up at the end of the posts div instead of directly after
the comment that the "Add Comment" button is clicked on. I tried moving it to the end of the post div, but
without the unique ID number issue fixed and functioning, I couldn't figure out how to append the form
to the single unique post (which is the same thing that is happening when I do reply to an existing comment,
it posts my reply to all comments instead of just the single one it is supposed to - I know this is related to
the unique ID issue) - considered adding the same index on the end of the add-comment button click
function and iterate through using i and i++, but couldn't figure out the correct way to do the syntax. 

There were alot of challenges for me on this project. Conceptually I feel like I know what I need to do, I 
just am really struggling with the syntax and specific way to write what needs to happen.
Will continue to work through these issues but wanted to commit where I was at.
*/

//When Post button is clicked, this will post the message as a parent thread.
$('#submit').on('click', function () {
  //Gets the user input for both the name and message boxes.
  var $name = $('#name').val();
  var $text = $('#message').val();

  //Creates a div, then one paragraph element to contain the message, a second paragraph element
  //to contain the poster name, then adds on a button for Removing the Comment and a buttong for
  //adding a comment to that specific comment.
  $('.posts').append('<div class="post"><p>' + $text + '<p>Posted By: ' + $name + '<p><button class="remove-button" id="removeButton">Delete Comment</button>' + '<button class="add-comments-button" id="addCommentsButton">Add Comment</button>' + '</p></p></p></div>');

  //Adds on a blank comment form to the comment but hides it. 
  $('#blank-comment-form').hide();
  $('.posts').append($('#blank-comment-form'));

  //Adds a horizontal line after hidden comment box
  $('.posts').append('<hr>');

   //Resets the form fields back to blank
   $('form :input').val('');
});

//When Post Reply button is clicked, this will post the message as reply to the specific comment.
$('#submit-comment').on('click', function () {
  //Gets the user input for both the name and message boxes.
  var $commentName = $('#comment-name').val();
  var $commentText = $('#comment-message').val();

  //Creates a div, then one paragraph element to contain the message, a second paragraph element
  //to contain the poster name, then adds on a button for Removing the Comment and a buttong for
  //adding a comment to that specific comment.
  $('.post').append('<div class="sub-post"><p>' + $commentText + '<p>Posted By: ' + $commentName + '<p><button class="remove-button" id="removeButton">Delete Comment</button>' + '<button class="add-comments-button" id="addCommentsButton">Add Comment</button>' + '</p></p></p></div>');

  //Resets the form fields back to blank
  $('form :input').val('');

  //Adds on a blank comment form to the comment but hides it. 
  $('#blank-comment-form').hide();
  $('.post').append($('#blank-comment-form'));
});

//Deletes the entire thread when the delete button is removed.
$('.posts').on('click', '.remove-button', function (e) {
  $(this).closest('.post').remove();
});

//When the Add Comment button is clicked, this adds a blank comment form below the current thread
//so the user can add a new comment to thread.
$('.posts').on('click', '.add-comments-button', function (e) {
  console.log('its working');
  $('#blank-comment-form').show();
});