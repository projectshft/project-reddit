var submissions = [];
var usernameSubmission = '';
var messageSubmission = '';
var messageID = 0;

//build a click listener to capture and push submitted username and message to submissions array.
$('.btn-submit').on('click', function() {
  //add if statements to check that inputs are populated. If one is empty, output an error but DON'T reset fields -- that shit's annoying.
  console.log($('#usernameInput').val());
  if ($.trim($('#usernameInput').val()) == '' && $.trim($('#messageInput').val()) == '') {
    alert('Please enter a username and message.');
  } else if ($.trim($('#usernameInput').val()) == ''){
    alert('Please enter a username.');
  } else if ($.trim($('#messageInput').val()) == ''){
    alert('Please enter a message.');
  } else {
    //assign submissions to relative global variables
    usernameSubmission = $('#usernameInput').val();
    messageSubmission = $('#messageInput').val();
    //assign them to properties of an object that can be pushed to the submissions array.
    var currentSubmission = {
      username: usernameSubmission,
      message: messageSubmission
    };

    console.log('this is the object that was just submitted: ', currentSubmission);

    //add the currentSubmission to the submissions array.
    submissions.push(currentSubmission);

    console.log('this is the current value of the submissions array: ', submissions);

    //add a messageID
    messageID += 1;

    //in addition to adding the submission to an object and pushing to an array, I think I may also want to immediately add them directly to the page.
    $('.message-list').prepend(
      '<div class="post-box">'+
        '<div class="row submit-target" style="padding:0px 10px 0px 20px">'+
          '<div class="username col-11">'
            +usernameSubmission+
          '</div>'+
          '<div class="delete-icon-'+messageID+' col-1">'+
            '<button type="button" class="btn" style="padding:0px;"><i class="fas fa-trash"></i></button>'+
          '</div>'+
          '<div class="message-box col-11">'
            +messageSubmission+
          '</div>'+
          '<div class="comments-icon'+messageID+' col-1">'+
            '<div class="comments-spacing-div">'+
              '<button type="button" class="btn" style="padding:0px;"><i class="fas fa-comment"></i></button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>');

    console.log('this is the current messageID: ', messageID)

    //clear the input fields
    $('#usernameInput').val('');
    $('#messageInput').val('');
  };
});
