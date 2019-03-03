var submissions = [];
var usernameSubmission = '';
var messageSubmission = '';
var messageID = 0;
var prependedMessageList = '';

//add click listener to capture and push submitted username and message to submissions array.
$('.btn-submit').on('click', function() {
  //add if statements to check that inputs are populated. If one is empty, output an error but DON'T reset fields -- that shit's annoying.
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
    //add a messageID
    messageID += 1;
    //assign them to properties of an object that can be pushed to the submissions array.
    var currentSubmission = {
      id: messageID,
      username: usernameSubmission,
      message: messageSubmission
    };
    console.log('this is the object that was just submitted: ', currentSubmission);
    //add the currentSubmission to the submissions array.
    submissions.push(currentSubmission);
    console.log('this is the current value of the submissions array: ', submissions);
    //in addition to adding the submission to an object and pushing to an array, I think I may also want to immediately add them directly to the page.
    prependedMessageList = $('.message-list').prepend(
      '<div class="post-box">'+
        '<div class="row submit-target" style="padding:0px 10px 0px 20px">'+
          '<div class="username col-11">'
            +usernameSubmission+
          '</div>'+
          '<div class="delete-icon col-1">'+
            '<button type="button" class="btn delete-btn delete-'+messageID+'" data-id="'+messageID+'" style="padding:0px;"><i class="fas fa-trash"></i></button>'+
          '</div>'+
          '<div class="message-box col-11">'
            +messageSubmission+
          '</div>'+
          '<div class="comments-icon col-1">'+
            '<div class="comments-spacing-div">'+
              '<button type="button" class="btn" style="padding:0px;"><i class="fas fa-comment"></i></button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'
    );
    //add event listener to trash icon to delete relevant comment
    $('.delete-'+messageID).on('click', function() {
      //assign relative messageID to a variable that can be accessed within the filer() below
      var relativeID = $(this).attr('data-id')
      //filter the submissions array to delete the relative object from the array
      submissions = submissions.filter(function(index){
        return index.id != relativeID;
      });
      console.log('This is the new submissions array:' ,submissions);
      //remove the post from the html
      $(this).closest('.post-box').remove();
    });
    //clear the input fields
    $('#usernameInput').val('');
    $('#messageInput').val('');
  };
});
