//named functions
var submitPost = function () {
  var $userText = $('#post-text').val();
  var $userName = $('#name').val(); 

  $('.posts').append('<div class="post-el"><p class="post">' + '<button type="button" class="btn btn-link edit-button">edit</button>' + '<button type="button" class="btn btn-link remove-button">remove</button>' + '<button type="button" class="btn btn-link comment-button">comment</button><button type="button" class="btn btn-link comments-button">comments</button>'  + $userText + ' - Posted By: ' + $userName +'<hr></p></div>'); 

  $('form :input').val(''); //resets inputs in main form  
  //$('.posts').append($('#comments-form')); 
};

var openEditPost = function () {
  //console.log('edit')
  $(this).parent().append(('<input type="text" placeholder="Edit post" class="edit-post form-control"/>'));
  $(this).parent().append(("<button type=\"button\" class=\"btn btn-primary btn-xs save-edit-button\">Submit Edit</button>")); 
};

var submitEdits = function () {
  var $edits = $('.edit-post').val();
  $(this).parent(':not(button, input)').html($edits);
};

var removePost = function () {
  $('.posts').append($('#comments-form')); //moves comment-form so it doesn't get deleted
  $(this).parents('.post-el').remove(); 
};

var openComment = function () {
  $(this).parent('.post').append($('#comments-form')); //comments form opens beneath the comment selected
  $('#comments-form').show();
};

var removeComment = function () {
  $(this).parents('.comment-el').remove();
};

var submitComment = function () {

  var $userComment = $('#post-comment').val();
  var $userCommentName = $('#name-comment').val();

  //adds comments
  $(this).parents('.post').append('<div class="comment-el"><p class="posted-comment">' + '<button type="button" class="btn btn-link remove-comment">remove</button>' + $userComment + ' - Posted by: ' + $userCommentName + '</p></div>');

  $('form :input').val(''); //resets input in comment form

  $(this).parents('.post').children('.comments-button').css('display', 'inline'); 
  $(this).parents('.post').children('.comment-button').css('display', 'none'); 
  $(this).parents('.post').children('.comment-el').hide(); 

  $('#comments-form').hide();
  //moves comment form 
  $('.posts').append($('#comments-form')); 

};

var toggleComments = function () {
  $(this).parents('.post').children('.comment-el').toggle();
  $(this).parent('.post').append($('#comments-form'));
  $('#comments-form').toggle();
};

//event listeners
//submits posts
$('#submit').on('click', function () {
  $('#main-form').submit(function(e) {
    if ($.trim($("#post-text").val()) === "" || $.trim($("#name").val()) === "") {
        e.preventDefault();
        return false;
    } else {
      submitPost(); 
    };
  });
});

//open edit posts
$('.posts').on('click', '.edit-button', openEditPost); 

//submit edit posts
$('.posts').on('click', '.save-edit-button', submitEdits); 

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




