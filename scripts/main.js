var submissions = [];
var usernameSubmission = '';
var messageSubmission = '';
var messageID = 0;
var commentID = 0;
var prependedMessageList = '';
var usernameCommentSubmission = '';
var commentSubmission = '';
var currentPostID = 0;
var appendPostBox = '';


//add click listener to capture and push submitted username and message to submissions array and v.DOM.
$('#post-submit').on('click', function() {
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
        message: messageSubmission,
        comments: []
      };
      console.log('this is the object that was just submitted: ', currentSubmission);
      //add the currentSubmission to the submissions array.
      submissions.push(currentSubmission);
      console.log('this is the current value of the submissions array: ', submissions);
      //in addition to adding the submission to an object and pushing to an array,
      //I think I may also want to immediately add them directly to the page.
      prependedMessageList = $('.message-list').prepend(
        '<div class="post-box">'+
          '<div class="row submit-target" style="padding:0px 10px 0px 20px">'+
            '<div class="username col-11">'
              +usernameSubmission+
            '</div>'+
            '<div class="delete-icon col-1">'+
              '<button type="button" class="btn delete-'+messageID+'" data-id="'+messageID+'" style="padding:0px;"><i class="fas fa-trash"></i></button>'+
            '</div>'+
            '<div class="message-box col-11">'
              +messageSubmission+
            '</div>'+
            '<div class="comments-icon col-1">'+
              '<div class="comments-spacing-div">'+
                '<button type="button" class="btn comment-'+messageID+'" data-id="'+messageID+'" style="padding:0px;"><i class="fas fa-comment"></i></button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'
      );
      //add event listener to trash icon to delete relevant comment
      $('.delete-'+messageID).on('click', function() {
        //assign relative messageID to a variable that can be accessed within the filer() below
        var relativeID = $(this).attr('data-id')
        //ensure the correct object is being targeted by relativeID by setting up an array to be referenced in the upcoming filter
        var targetSubmission = submissions.filter(function(index){
          return index.id == relativeID;
        });
        //filter the submissions array to delete the relative object from the array
        submissions = submissions.filter(function(index){
          return index.id != targetSubmission[0].id;
        });

        console.log('This is the new submissions array:' ,submissions);
        //remove the post from the html
        $(this).closest('.post-box').remove();
      });
      //add event listener to comment icon to take the user to a "new page" that focuses on the relative post
      $('.comment-'+messageID).on('click', function() {
        //hide all prepended html via it's containing div
        $('.message-list').addClass('hide');
        //hide post input fields and reveal comment input fields
        $('.post-input-fields').addClass('hide');
        $('.comment-input-fields').removeClass('hide');
        //assign relative ID to a variable that can be used to filter out an array containing only the relative object
        var relativeID = $(this).attr('data-id')
        //filter out only the relative object
        var targetSubmission = submissions.filter(function(index){
          return index.id == relativeID;
        });

        console.log(targetSubmission);
        //add focusPost html
        prependedMessageList = $('.posts-background').prepend(
          '<div class="post-focus col-lg-10 overflow-auto">'+
            '<div class="post-box c-target">'+
              '<div class="row submit-target" style="padding:0px 10px 0px 20px">'+
                '<div class="username col-11">'
                  +targetSubmission[0].username+
                '</div>'+
                '<div class="back-icon col-1">'+
                  '<button type="button" class="btn back-btn" style="padding:0px;"><i class="fas fa-arrow-alt-circle-left"></i></button>'+
                '</div>'+
                '<div class="message-box col-11">'
                  +targetSubmission[0].message+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'
        );
        //poing the currentPostID towrad the corrent ID
        currentPostID = targetSubmission[0].id
        //add click listener on the back button that removes the .post-focus html,
        //un-hides .message-list and .post-input-fields, and hides the .comment-input-fields.
        $('.back-btn').on('click', function() {
          console.log('Back button was clicked.');
          $(this).closest('.post-focus').remove();
          $('.message-list').removeClass('hide');
          $('.post-input-fields').removeClass('hide');
          $('.comment-input-fields').addClass('hide');
        });
        //check to see if there are previous comments. If there are, append them and and a delete event listener.
        if (targetSubmission[0].comments.length > 0) {
          targetSubmission[0].comments.forEach(function(index) {
            console.log('current targetsubmission[0],', targetSubmission[0])
            //natch the commentID to the current comment's ID
            commentID = index.id;
            //append the comment and it's html to the page.
            appendPostBox = $('.c-target').append(
              '<div class="post-box" style="background-color:#C7D3DD">'+
                '<div class="row submit-target" style="padding:0px 10px 0px 20px">'+
                  '<div class="username col-11">'
                    +index.username+
                  '</div>'+
                  '<div class="delete-icon col-1">'+
                    '<button type="button" class="btn delete-'+commentID+'" data-id="'+commentID+'" style="padding:0px;"><i class="fas fa-trash"></i></button>'+
                  '</div>'+
                  '<div class="message-box col-11">'
                    +index.comment+
                  '</div>'+
                '</div>'+
              '</div>'
            );
            //add an click listener to delete the correct comment from the submissions array and v.DOM.
            $('.delete-'+commentID).on('click', function() {
              //assign relative messageID to a variable that can be accessed within the filer() below
              var relativeID = $(this).attr('data-id')
              //initialize an object to use assign in the forEach loop
              var targetIndex = {};
              //for some reason submissions[currentPostID - 1].comments.indexOf(targetIndex); returns an error saying submissions[currentPostID - 1] is undefined. Doing it this way in line 160 works.
              var submissionsShortcut = submissions[currentPostID - 1].comments
              //find the comment who's ID matches click event's data ID
              submissions.forEach(function(index){
                index.comments.forEach(function(index){
                  if (index.id == relativeID) {
                  console.log('this is the index.id: ', index.id);
                  console.log('this is the relativeID:, ', relativeID);
                  targetIndex = index;
                };
                });
              });
              //get the index to splice
              var indexToSplice = submissionsShortcut.indexOf(targetIndex);
              //splice the comment from the array
              submissions[currentPostID - 1].comments.splice(indexToSplice, 1);
              console.log('This is the new submissions array:' ,submissions);
              //remove the post from the html
              $(this).closest('.post-box').remove();
            });
          });
        };
      });
    };
  //clear the input fields
  $('#usernameInput').val('');
  $('#messageInput').val('');
});
//add click listener to capture and push submitted username and commit to submissions array and v.DOM.
$('#comment-submit').on('click', function() {
  //add if statements to check that inputs are populated. If one is empty, output an error but DON'T reset fields -- that shit's annoying.
  if ($.trim($('#commentUsernameInput').val()) == '' && $.trim($('#commentInput').val()) == '') {
    alert('Please enter a username and comment.');
  } else if ($.trim($('#commentUsernameInput').val()) == ''){
    alert('Please enter a username.');
  } else if ($.trim($('#commentInput').val()) == ''){
    alert('Please enter a comment.');
  } else {
      //assign comments to relative global variables
      usernameCommentSubmission = $('#commentUsernameInput').val();
      commentSubmission = $('#commentInput').val();
      //add a commentID
      commentID += 1;
      //create new object to store comment input values
      var currentComment = {
        id: commentID,
        username: usernameCommentSubmission,
        comment: commentSubmission
      };

      console.log('This is the current submissions array: ', submissions)
      console.log('This is the object that was just submitted: ', currentComment);
      //use reduce to find the relavant post object's index so that we can push
      //the currentComments object into the submission[i].comment array
      var targetPushIndex = submissions.reduce(function(index, line, indexOf) {
        if (line.id == currentPostID){
          index = indexOf;
        }
        return index;
      }, 0);
      //push the currentComments object onto submissions[]'s appropriate object's comments array
      submissions[targetPushIndex].comments.push(currentComment);
      //append the comment and it's html to the page.
      appendPostBox = $('.c-target').append(
        '<div class="post-box" style="background-color:#C7D3DD">'+
          '<div class="row submit-target" style="padding:0px 10px 0px 20px">'+
            '<div class="username col-11">'
              +currentComment.username+
            '</div>'+
            '<div class="delete-icon col-1">'+
              '<button type="button" class="btn delete-'+commentID+'" data-id="'+commentID+'" style="padding:0px;"><i class="fas fa-trash"></i></button>'+
            '</div>'+
            '<div class="message-box col-11">'
              +currentComment.comment+
            '</div>'+
          '</div>'+
        '</div>'
      );
      //add an click listener to delete the correct comment from the submissions array and v.DOM.
      $('.delete-'+commentID).on('click', function() {
        //assign relative messageID to a variable that can be accessed within the filer() below
        var relativeID = $(this).attr('data-id')
        //initialize an object to use assign in the forEach loop
        var targetIndex = {};
        //for some reason submissions[currentPostID - 1].comments.indexOf(targetIndex); returns an error saying submissions[currentPostID - 1] is undefined. Doing it this way in line 241 works.
        var submissionsShortcut = submissions[currentPostID - 1].comments
        //find the comment who's ID matches click event's data ID
        submissions.forEach(function(index){
          index.comments.forEach(function(index){
            if (index.id == relativeID) {
              console.log('this is the index.id: ', index.id);
              console.log('this is the relativeID:, ', relativeID);
              targetIndex = index;
            };
          });
        });
        //get the index to splice
        var indexToSplice = submissionsShortcut.indexOf(targetIndex);
        //splice the comment from the array
        submissions[currentPostID - 1].comments.splice(indexToSplice, 1);
        console.log('This is the new submissions array:' ,submissions);
        //remove the post from the html
        $(this).closest('.post-box').remove();
      });
    }
    //clear the input fields
    $('#commentUsernameInput').val('');
    $('#commentInput').val('');
});
