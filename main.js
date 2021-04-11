$('#submit').on('click', function () {
  //Gets the user input for both the name and message boxes.
  var $name = $('#name').val();
  var $text = $('#message').val();

  //Creates a div, then one paragraph element to contain the message, a second paragraph element
  //to contain the poster name, then adds on a button for Removing the Comment and a buttong for
  //adding a comment to that specific comment.
  $('.posts').append('<div class="post"><p>' + $text + '<p>Posted By: ' + $name + '<p><button class="remove-button" id="removeButton">Delete Comment</button>' + '<button class="add-comments-button" id="addCommentsButton">Add Comment</button>' + '</p></p></p><hr></div>');

  //Resets the form fields back to blank
  $('form :input').val('');

});

$('.posts').on('click', '.remove-button', function (e) {
  $(this).closest('.post').remove();
});

$('.posts').on('click', '.add-comments-button', function (e) {
  console.log('its working');
});