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
  $('.post').append($('#blank-comment-form'));

  //Adds a horizontal line after hidden comment box
  $('.posts').append('<hr>');

   //Resets the form fields back to blank
   $('form :input').val('');
});

//When Post button is clicked, this will post the message as a parent thread.
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
  $('.posts').append($('#blank-comment-form'));
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