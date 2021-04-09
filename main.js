
//named functions

var submitPost = function () {
  var $userText = $('#post-text').val();
  var $userName = $('#name').val(); 

  $('.posts').append('<div class="post-el"><p class="post">' + '<button type="button" class="btn btn-link remove-button">remove</button>' + '<button type="button" class="btn btn-link comment-button">comment</button><button type="button" class="btn btn-link comments-button">comments</button>'  + $userText + ' - Posted By: ' + $userName +'<hr></p></div>'); 
  //$('.posts').append($('#comments-form')); 
};

var removePost = function () {
  $('.posts').append($('#comments-form')); //moves comment-form so it doesn't get deleted
  $(this).parents('.post-el').remove(); 
};

var openComment = function () {
  $(this).parent('.post').append($('#comments-form')); //comments form opens beneath the comment selected
  $('#comments-form').show();
  //add opening current comments as well
};

var removeComment = function () {
  $(this).parents('.comment-el').remove();
};

var submitComment = function () {

  var $userComment = $('#post-comment').val();
  var $userCommentName = $('#name-comment').val();

  //adds comments
  $(this).parents('.post').append('<div class="comment-el"><p class="posted-comment">' + '<button type="button" class="btn btn-link remove-comment">remove</button>' + $userComment + ' - Posted by: ' + $userCommentName + '</p></div>');

  $(this).parents('.post').children('.comments-button').css('display', 'inline'); 
  $(this).parents('.post').children('.comment-button').css('display', 'none'); 

  $(this).parents('.post').children('.comment-el').show();

  //moves comment form 
  $('.posts').append($('#comments-form')); 

  //$('#comments-form').hide();
};


var toggleComments = function () {
  $(this).parents('.post').children('.comment-el').toggle();
  $(this).parent('.post').append($('#comments-form'));
  $('#comments-form').toggle();
};


//event listeners

//submits posts
$('#submit').on('click', submitPost); //work on preventing empty submissions

//removes posts
$('.posts').on('click', '.remove-button', removePost); 

//opens initial comments button
$('.posts').on('click', '.comment-button', openComment);

//submits comments
$('#submit-comment').on('click', submitComment); 

//removes comments
$('.posts').on('click', '.remove-comment', removeComment); 

//toggles comments and opens comment form
$('.posts').on('click', '.comments-button', toggleComments);




