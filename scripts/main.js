var submissions = [];
var usernameSubmission = '';
var messageSubmission = '';

//build a click listener to capture and push submitted username and message to submissions array.
$('.btn-submit').on('click', function() {
  //assign submissions to relative global variables
  usernameSubmission = $('#usernameInput').val();
  messageSubmission = $('#messageInput').val();
  //assign them to properties of an object that can be pushed to the submissions array.
  var currentSubmission = {
    username: usernameSubmission,
    message: messageSubmission
  }

  console.log('this is the object that was just submitted: ', currentSubmission);

  //add the currentSubmission to the submissions array.
  submissions.push(currentSubmission);

  console.log('this is the current value of the submissions array: ', submissions);

  //clear the input fields
  $('#usernameInput').val('');
  $('#messageInput').val('');  
});
