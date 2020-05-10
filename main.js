//Create array to maintain userPosts
var $userPosts = []

//A post including userMessage and userName will need to be submitted when the button is clicked
$('#submit').click(function () {
  var userMessageInput = $('#postMessage').val();
  var userNameInput = $('#postName').val();
  //Edge cases for if userName or userMessage are empty will alert
  if (userMessageInput.length === 0 || userNameInput.length === 0) {
    alert('You must enter your name and a message to post.')
  } else {
    //Post the name and message to the website
    // TODO: add a remove button
    $('.userPosts').append('<p>' + userMessageInput + '</p>' + '<p class="userName">' + 'Posted by: ' + userNameInput + '</p>' + '<button class="delete">' + '&#10007' + '</button>');
    //push the userMessage, userName, and a comment area(to be filled later) into $userPosts
    $userPosts.push({
        message: userMessageInput,
        name: userNameInput,
        comments: []
      })

    //add a (TODO: UNIQUE) comment section for each post
    $('.userName').append('<div class="postComments">' +
    '<input id="commentMessage" type="text" class="form-control comment" placeholder="Comment">' + '</input>' +
    '<input id="commentName" type="text" class="form-control comment" placeholder="Name">' + '</input>' + '</div>' +
    '<button id="comment" class="btn btn-primary">' + 'Comment' + '</button>')
}});

//A user should be able to remove the post
$('.delete').click(function() {
  $(this).closest('.userPosts').remove();
});








//A unique comment section with commentorName and commentorMessage will need to be appended to each post
// $('#comment').click(function () {
//   var commentMessage = $('#commentMessage').val();
//   $('.userPosts').append('<p>' + commentMessage + '</p>');
// });
//
// $('#comment').click(function () {
//   var commentName = $('#commentName').val();
//   $('.userPosts').append('<p>' + 'Posted By: ' + commentName + '</p>');
// });
