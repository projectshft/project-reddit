// var button = document.getElementsByClassName('btn')[0];
//
// button.addEventListener('click', function () {
//   var userNameInput = document.getElementById('name').value;
//   var userName = document.createElement('h3');
//   var userNameElement = document.createTextNode(userNameInput);
//
//   userName.appendChild(userNameElement);
//
//   var userMessageInput = document.getElementById('message').value;
//   var userMessage = document.createElement('p');
//   var userMessageElement = document.createTextNode(userMessageInput);
//
//   userMessage.appendChild(userMessageElement);
//
//   var deleteButton = document.createElement('button');
//   deleteButton.setAttribute('id', 'delete-button');
//   deleteButton.innerHTML = ('Delete');
//
//   document.getElementsByClassName('posts')[0].append(userName);
//   document.getElementsByClassName('posts')[0].append(userMessage);
//   document.getElementsByClassName('posts')[0].append(deleteButton);
// });
//
//
// deleteButton.addEventListener('click', function () {
//   $("userMessage").innerHTML.remove();
// });


var errorBlankTextBox = '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="...">
    <strong class="mr-auto">Bootstrap</strong>
    <small class="text-muted">11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>'


//  Main message function  ====================================================
//  This takes data from two forms once the Post button is pressed.
//  $('#message') corresponds to

var postMessage = function () {

  // This prevents a blank post if a use just clicks Post
  // Text is required in the message area until a message can be posted.

  if ($('#message').val() === '') {
    return errorBlankTextBox();


  } else {


  // This takes the form data and creates a new div with the the post text
  // and username.

  $('.user-posts').append('<div class=text-post><li>' + $('#message').val() +
  '<li><p>Posted By: <strong>' + $('#name').val() + '</strong></li></div>')
  }
};


// When the Post button is clicked, postMessage is invoked
// This will display a new div containing an unordered list with the post contents
// Users will have the option of editing or removing the post.
// Any comments will result in a new line item for the unordered list
$('button').click(postMessage);
