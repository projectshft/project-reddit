//  Main message function  ====================================================
//  This takes data from two forms once the Post button is pressed.
//  $('#message') corresponds to
var postCount = 0;

var postMessage = function() {

  //  Creating variables for name & message input fields

  var nameTextField = $('#name').val();

  var messageTextField = $('#message').val();

  // This takes the form data and creates a new div with the the post text and username
  // along with an X button for clearning post data.

  $('.user-posts').append('<div class=text-post><li>' + '<button type="button" id="removeUserPostButton" class="btn-link button-editPost">remove</button>' + '<button type="button" id="editUserPostButton" class="btn-link button-editPost">edit</button>'
  + '  ' + messageTextField + '<li><p>Posted By: <strong>' + nameTextField + ' ' + '<button type="button" id="removeUserPostButton" class="btn-link button-editPost"><strong>X</strong></button>' + '</strong></li></div>');



// Iterating postCount to track posts for deletion via postCount number (TBD)
  postCount++;

  $('#removeUserPostButton').on('click', 'li', function() {
    $(this).remove();
  });

};

// When the Post button is clicked, the function first checks to see if the text areas
// are left blank and will alert the user if so. If there is text, postMessage is invoked.
// This will display a new div containing an unordered list with the post contents
// Users will have the option of editing or removing the post.
// Any comments will result in a new line item for the unordered list.

$('#button-submitForm').click(function() {

  var nameTextField = $('#name').val();

  if (nameTextField == '') {
    alert('Input can not be left blank');
  } else {
    postMessage();
  }
  bindEvents();

});


var bindEvents = function() {

  $('#removeUserPostButton').click(function() {
    $(this).remove();
  });
}
