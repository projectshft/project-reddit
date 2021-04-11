$('#submit').on('click', function () {
  //Gets the user input for both the name and message boxes.
  var $name = $('#name').val();
  var $text = $('#message').val();

  //Creates a div, then one paragraph element to contain the message, a second paragraph element
  //to contain the poster name, then adds on a button for Removing the Comment and a buttong for
  //adding a comment to that specific comment.
  $('.posts').append('<div class="post"><p>' + $text + '<p>Posted By: ' + $name + '<p><button class="remove-button" id="removeButton">Delete Comment</button>' + '<button class="add-comments-button" id="removeButton">Add Comment</button>' + '</p></p></p><hr></div>');

});

$('.posts').on('click', 'button', function (e) {
  $(this).closest('.post').remove();
});