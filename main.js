//originally idGenerator was to generate id for each post in previous forum exercise, but jQuery made things easier.
//currently being used to generated number for users who didn't input username.
var idGenerator = function() {
  return Math.floor(Math.random() * 100000);
};

//-------------------------Main Page Post Button Function------------------------------//
//Each time post submit button is click, calls the addpost function and 'push' result to DOM.
//allows blank username, but not blank message.
$("form").submit(function(e) {
  e.preventDefault();
  //User's Input
  var userName = $('#name').val();
  var messageText = $('#message').val();
  //assign user a random username if user did not input username.
  if (userName.length === 0) {
    userName = 'Guest' + idGenerator();
    //else if prevents user flooding username.length.
  } else if (userName.length > 16) {
    alert("Don't think this username exist in our database. Try less than 16 characters.");
    return 0;
  }

  //resets message to blank, but keep user name, not necessary for user who typed in, but useful for guest user who wants to keep their id.
  $('#name').val(userName);
  $('#message').val('');

  //adds post to DOM.
  $(".frontPage").append(addPost(userName, messageText));
});

//-------------------------Add Post Function------------------------------//
var addPost = function(userName, messageText) {
  //templates
  var postMessage = '<div class="row" style="order:0;"><div class="col-md-7 postMessage"><span class="msg">' + messageText + '</span><br />';
  var postComment = '<div class="container commentsData hide"></div><span class="commentBarLoc"></span></div><div class="col-md-1 toggleComment">Comment(s)</div>';
  var postUserName = '<div class="col-md-2 postContent paddedTop">' + userName + '</div>';
  var postUpVote = '<div class="col-md-2 postContent"><button class="btn btn-xs upVote"><i class="fas fa-thumbs-up"></i></button>';
  var postDnVote = '<button class="btn btn-xs dnVote"><i class="fas fa-thumbs-down"></i></button>';
  var postEdit = '<button class="btn btn-xs editButton"><i class="far fa-edit"></i></button>';
  var postDelete = '<button class="btn btn-xs deleteButton"><i class="fa fa-trash" aria-hidden="true"></i></i></button></div>';
  var $completePostTemplate = $(postMessage + postComment + postUserName + postUpVote + postDnVote + postEdit + postDelete);

  //with add, must come delete.
  $completePostTemplate.find(".deleteButton").click(deletePost);
  //edit feature codes are in extensions folder editPost.js
  $completePostTemplate.find(".editButton").click(toggleEditBar);
  //Upvote and downvote function
  $completePostTemplate.find(".upVote").click(upVote);
  $completePostTemplate.find(".dnVote").click(dnVote);
  //toggle to show comments
  $completePostTemplate.find(".toggleComment").click(mainPageComment);

  return $completePostTemplate;
};

//-------------------------Posts' Tools Functions------------------------------//
// As function name describe, this deletes the closest parent class with .row class(in this case, it's the post's row)
var deletePost = function() {
  $(this).closest('.row').remove();
};

//using .css to change the order of post, higher the number the further top it is (reverse column flex)
var upVote = function() {
  var vote = parseInt($(this).closest('.row').css('order'));
  $(this).closest('.row').css('order', vote + 1);
};
//using .css to change the order of post, lower the number the further down it is (reverse column flex)
var dnVote = function() {
  var vote = parseInt($(this).closest('.row').css('order'));
  $(this).closest('.row').css('order', vote - 1);
};

var mainPageComment = function() {
  //hide other post's comments, and reveal only on the post being clicked.
  $('.commentsData').addClass('hide');
  $(this).closest('.row').find('.commentsData').removeClass('hide');

  // 1st remove all other editbar and comment bar, then add it's own comment bar IF it doesn't have one. Preventing multiple Bar open at the same time.
  if ($(this).closest('.row').find('.commentBar').length === 0) {
    $('.editBar').remove();
    $('.commentBar').remove();

    var commentBarTemplateStart = '<div class="row commentBar">';
    var commentBarTemplateInput = '<textarea type="text" class="commentInput col-md-7" placeholder="New comment" style="color: black;background-color: ##6997e0;" required></textarea>';
    var userBarTemplateInput = '<input type="text" class="commentUserInput col-md-3" placeholder="Username" style="color: black;background-color: ##6997e0;" required></input>';
    var submitTemplateButton = '<button type="button" class="commentPostButton btn btn-custom">Comment</button></div>';
    var $completeComment = $(commentBarTemplateStart + commentBarTemplateInput + userBarTemplateInput + submitTemplateButton);

    //add click function to the comment button >>  when clicked,add comment and username to dom, then remove comment bar
    $completeComment.find(".commentPostButton").click(commentButtonFunction);
    //append bar to commentBarLoc span
    $(this).closest('.row').find('.commentBarLoc').append($completeComment);
  } else { // if it already has an comment bar, then remove it, effectively toggle on and off, also hides the comments.
    $(this).closest('.row').find('.commentsData').addClass('hide');
    $('.editBar').remove();
    $('.commentBar').remove();
  }
};

//--------------------------Comment Buttons Function-----------------//
var commentButtonFunction = function() {
  //this function runs when add comment button is clicked
  var comment = $('.commentInput').val();
  var commentUser = $('.commentUserInput').val();
  var removeComment = '<i class="fa fa-times" style="padding-top: 3px;"></i>';
  var $commentTemplate = $('<div class="row comments">' + comment + ' <strong>&nbsp;- Posted by:&nbsp;</strong> ' + commentUser + '&nbsp;' + removeComment + '</div>');

  // stop users from posting blank comment or blank username
  if (comment.length === 0 || commentUser.length === 0) {
    alert('Must fill username and message.');
    return 0;
  }
  //adding removeComment Function to the comment.
  $commentTemplate.find('.fa').click(removeCommentCustom);
  // append comment and username, then resets it to blank.
  $(this).parent().parent().closest('.row').find('.commentsData').append($commentTemplate);
  $('.commentInput').val('');
  $('.commentUserInput').val('');
};

var removeCommentCustom = function() {
  $(this).closest('.comments').remove();
};
