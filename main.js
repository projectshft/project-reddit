// Project Reddit
// A simple form that takes in a users name and post, posts it to page and allows comments and removal upon click.

var postContent = function() {

  //These variables will store the input values of the user-text and user-name.
  var userText = $('#user-text').val();
  var userName = $('#user-name').val();

  //The incrementing postNumber variable will be used to create unique anchor-tag ids for the "remove" link and "comments" link generated for each post.
  postNumber += 1;
  var removeId = 'remove' + postNumber;
  var commentsId = 'comments' + postNumber;
  var postId = 'post' + postNumber;

  //This template creates the html DOM structure for the post.
  var template =
    '<div class="container page-header">' +
    '   <div class="row">' +
    '      <p class="post"><a href="#" id="' + removeId + '" > remove </a><a href="#" id="' + commentsId + '"> comments </a>  ' + userText + '</p>' +
    '      <p>Posted By: <b>' + userName + '</b></p>' +
    '   </div>' +
    '</div>';

  //This will check for received input then will select the 'section' tag and append the template with its user variables to the DOM. Text fields will be cleared.
  if (userText && userName) {
    $('section').append(template);
    clearTextFields();
  }

  //Statements will prepare the remove and comments links for a click event.
  $("#" + removeId).click(removePost);
  $("#" + commentsId).click(viewComments)
};

//Function will clear the user text fields.
var clearTextFields = function() {
  $('#user-text').val('');
  $('#user-name').val('');
}

// Function will reveal the comments section
var viewComments = function() {

  if (!$(this).hasClass("initialized-comments")) {
    var commentTemplate =
      '<div class="container">' +
      '   <div class="row">' +
      '      <div class="col-md-3">' +
      '         <input type="text" class="form-control" id="comment-text" placeholder="Comment Text">' +
      '      </div>' +
      '      <div class="col-md-3">' +
      '         <input type="text" class="form-control" id="comment-user" placeholder="User Name">' +
      '      </div>' +
      '      <div class="col-md-3">' +
      '         <button type="button" id="comment-button" class="btn btn-primary">Post Comment</button>' +
      '      </div>' +
      '   </div>' +
      '</div>';


    //This statement adds the comment after the original user-text but before the original post's user name.
    $(this).closest('.post').append(commentTemplate);

    //This statement renders the "Post Comments" button active.
    $(this).next('.container').find('button').click(postComments);

    /*This statements adds class to the comments link, to render the conditional
    for the "viewComments" function false. */
    $(this).addClass("initialized-comments");
  }

  //This function toggles the comment section in and out of view.
  var toggleComments = function() {
    $(this).nextAll().toggle();
  }

  $(this).click(toggleComments);
}

//This function posts the lastest comments to the original post.
var postComments = function() {

  var commentText = $(this).closest(".row").find('#comment-text').val();
  var commentUser = $(this).closest('.row').find('#comment-user').val();
  var fullCommentMessage = '<p>' + commentText + ' By: <b>' + commentUser + ' </b><button type="button" class="btn-group-xs btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></p>';

  //This function will remove the latest comment on the original post
  var removeComment = function() {
    (this).closest('p').remove();
  };

  // This conditional tests to ensure that the CommentText input and commentUser are defined. If so, the removal will be succesful
  if (commentText && commentUser) {
    $(this).closest('.container').before(fullCommentMessage);
    $(this).closest('.row').find('#comment-text').val("");
    $(this).closest('.row').find('#comment-user').val("");
    $(this).closest('p').find('span').click(removeComment);
  }
}

//This function will remove a post and its comments after clicking on the corresponding remove button
var removePost = function() {
  $(this).closest('.container').remove();
}

//This click activity will run the postContent function upon clicking the submit button.
$('#button').click(postContent);
var postNumber = null;
