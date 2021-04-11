document.getElementById('submit').addEventListener('click', function () {
  //Gets the user input for both the name and message boxes.
  var $name = $('#name').val();
  var $text = $('#message').val();

  //Selects the posts div and creates a new div inside of it to hold the new post.
  var postsDiv = $('.posts').append('<div></div>');

  //Appends the message typed in the message box to the posts div
  $('.posts').append('<p>' + $text + '</p>');

  //Appends the name of the poster to the posts div
  $('.posts').append('<p>Posted By: ' + $name + '</p>');

  //Adds a button labeled "Delete Comment" to the posts div
  $('.posts').append('<button class="remove-button" id="removeButton">Delete Comment</button>');

  //Adds a button labeled "Add Comment" to the posts div
  $('.posts').append('<button class="add-comments-button" id="removeButton">Add Comment</button>');

  //Draws a horizontal line after the new post is created.
  $('.posts').append('<hr></hr>');
});

$('.posts').on('click', 'button', function (e) {
  this.parentNode.remove();
});