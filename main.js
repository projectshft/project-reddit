var $postButton = $('#post');
var userPostNumber = 0;

$postButton.click(function() {
  //checking to ensure fields are entered not blank
  if ($('#name').val() === '' || $('#message').val() === '') {
    return alert('Please enter a name & post text');
  };
  
  //retrieving values of the form.
  var $userName = $('#name').val();
  var $userMessage = $('#message').val();
  //add a user count to make a unique post number for the class
  userPostNumber ++;

  //creating a parent div element for each user post that will contain the user's form details inside.
  $('.posts').append('<div class="userPost"></div>');
  
  //append message to newly created userPost div
  $('.userPost').last().append('<div class="individualPostMessage" id="message' + userPostNumber +'">' + $userMessage + '</div>');
  
  //add reply comment form that is hidden by default to newly created userPost div
  //first setting up variables to make jQuery more readable for adding reply comment form
  var $replyForm = '<div class="replyComment hidden"><form class="replyCommentForm form-inline" onsubmit="event.preventDefault();">';
  var $replyComment = '<input type="text" class="replyCommentDetails form-control mb-2 mr-sm-2" placeholder="Comment Text">'
  var $replyUserName = '<input type="text" class="replyCommentUserName form-control"  placeholder="Username">'
  var $postReplyCommentButton = '<button class="postReply btn btn-primary">Post Comment</button>'

  $('.userPost').last().append($replyForm + $replyComment + $replyUserName + $postReplyCommentButton + '</form></div>');
  
  //append name to newly created userPost div
  $('.userPost').last().append('<div class="individualPostName" id="name' + userPostNumber +'"> Posted By: <strong>' + $userName + '</strong></div>');
  
  //adding the words "remove" and "comments" to the user's post message from the form
  var $newMessage = $('.individualPostMessage').last();
  
  $('<span class="addComments">comment </span>').prependTo($newMessage);
  $('<span class="removeOption">remove </span>').prependTo($newMessage);
  
  //adding css to "comments" and "remove" words to indicate actions available for user
  $('.removeOption, .addComments').css({
    'color': 'blue',
    'cursor': 'pointer'
  });

  //adding css text-decoration to "comments" and "remove" on hover
  $('.removeOption, .addComments').on('mouseenter', function (event) {
    $(event.currentTarget).css('text-decoration', 'underline');
    $(event.currentTarget).css('text-decoration', 'underline');
  }).on('mouseleave', function (event) {
    $(event.currentTarget).css('text-decoration', 'none');
  });

  /*adding delete functionality to the "remove" option in each post. 
  The following removes the div element containing the post the user is selecting to remove.
  */
  $('.removeOption').click(function(event) {
    $(event.currentTarget).closest('.userPost').remove();
    $(event.currentTarget).closest('hr').remove();
  });

  //adding functionality to "comment" word in post to toggle comment reply form
  $('.addComments').unbind('click').click(function(event) {
    var $parentElement = $(event.currentTarget).closest('.individualPostMessage')
    
    $($parentElement).siblings('.replyComment').toggleClass('hidden');
  });

  //setting up functionality for users to reply to post with in the original post's comment form.
  $('.postReply').unbind('click').click(function(event) {
    var $replyInput = $('.replyCommentDetails').val();
    var $replyUserName = $('.replyCommentUserName').val();

    //adding user's reply comments to the post that the user filled the form in
    $(event.currentTarget).closest('.replyComment').prepend(`<p>${$replyInput} Posted By: <strong>${$replyUserName}</strong></p>`);

    //clearing input values
    $('input').val('');

  })

  //clearing form fields for next user input
  $('input').val('');
});

