var $postButton = $('#post');
var userPostNumber = 0;

$postButton.click(function () {
  //checking to ensure the main form fields are not blank before posting
  if ($('#name').val() === '' || $('#message').val() === '') {
    return alert('Please enter text into the "Post Text" & "Your Name" fields');
  };

  //retrieving values of the form
  var $userName = $('#name').val();
  var $userMessage = $('#message').val();
  //adding to the userPostNumber variable to assist in making a unique id number for posts
  userPostNumber++;

  //creating a parent div element for each user post that will contain the user's form details inside.
  $('.posts').append('<div class="userPost"></div>');

  //add message to newly created userPost div
  $('.userPost').last().append('<div class="individualPostMessage" id="message' + userPostNumber + '">' + $userMessage + '</div>');

  //adding reply comment form that is hidden by default to a newly created userPost div. The div will contain everything in each main post
  //first setting up variables to make jQuery more readable for adding reply comment form
  var $replyForm = '<div class="replyComment hidden"><form class="replyCommentForm form-inline" onsubmit="event.preventDefault();">';
  var $replyComment = '<input type="text" class="replyCommentDetails form-control mb-2 mr-sm-2" placeholder="Comment Text">'
  var $replyUserName = '<input type="text" class="replyCommentUserName form-control"  placeholder="Username">'
  var $postReplyCommentButton = '<button class="postReply btn btn-primary">Post Comment</button>'

  $('.userPost').last().append($replyForm + $replyComment + $replyUserName + $postReplyCommentButton + '</form></div>');

  //add the name from the "Your Name" input to the newly created userPost div below the replyCommentForm that is hidden on creation
  $('.userPost').last().append('<div class="individualPostName" id="name' + userPostNumber + '"> Posted By: <strong>' + $userName + '</strong></div>');

  //adding the words "remove" and "comments" to the user's post message from the form
  var $newMessage = $('.individualPostMessage').last();

  $('<span class="addComments">Comments </span>').prependTo($newMessage);
  $('<span class="removeOption">Remove -- </span>').prependTo($newMessage);

  //adding css to "comments" and "remove" words to indicate actions available for user
  $('.removeOption, .addComments').css({
    'color': '#45aeff',
    'cursor': 'pointer'
  });

  //adding css text-decoration to "comments" and "remove" on mouse hovering
  $('.removeOption, .addComments').on('mouseenter', function (event) {
    $(event.currentTarget).css('text-decoration', 'underline');
    $(event.currentTarget).css('text-decoration', 'underline');
  }).on('mouseleave', function (event) {
    $(event.currentTarget).css('text-decoration', 'none');
  });

  /*adding delete functionality to the "remove" word in each post. 
  The following removes the div parent element containing the post the user is selecting to remove.
  */
  $('.removeOption').click(function (event) {
    $(event.currentTarget).closest('.userPost').remove();
  });

  //adding functionality to "comment" word in post to toggle comment reply form
  $('.addComments').off('click').click(function (event) {
    var $parentElement = $(event.currentTarget).closest('.individualPostMessage');

    $($parentElement).siblings('.replyComment').toggleClass('hidden');
  });

  //setting up functionality for users to reply to post within the original post's comment form.
  $('.postReply').off('click').click(function (event) {
    //gathering input fields (Comment Text & Username) from the "Post Comment" button that was clicked
    var $replyInput = $(event.currentTarget).siblings('.replyCommentDetails').val();
    var $replyUserName = $(event.currentTarget).siblings('.replyCommentUserName').val();
    //checking to see if form has a value in it and sending an error message to the user if one or both fields are empty
    if ($replyInput === '' || $replyUserName === '') {
      return alert('CANNOT POST AN EMPTY COMMENT; PLEASE ENTER NAME AND COMMENT');
    };

    //adding the user's reply comments to the post that the form was filled in from
    $(event.currentTarget).closest('.replyComment').prepend(`<p class="individualReplyPost">${$replyInput} Posted By: <strong>${$replyUserName}</strong><span class="deleteSymbol glyphicon glyphicon-remove" role="button"></span></p>`);

    //adding functionality to "X" button to delete user's reply comment
    $('.glyphicon-remove').click(function (event) {
      $(event.currentTarget).closest('.individualReplyPost').remove();
    })
    //clearing input values for next input
    $('input').val('');
  });

  //clearing form fields for next user input
  $('input').val('');
});

