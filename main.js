var posts = [];
var edits = []; 

var emptyPosts = function () {
  posts = [];
};

var emptyComments = function () {
  posts[0]['comment'] = [];
};

var emptyEdits = function () {
  edits = []; 
}; 

var newPost = function () {
  emptyPosts();

  var $userText = $('#post-text').val();
  var $userName = $('#name').val(); 

  var post = {
    post: $userText,
    name: $userName,
    comment: []
  };

  posts.push(post); 
  renderPost();
};

var renderPost = function () {
  $('.posts').append('<div class="post-el"><p class="post">' + '<button type="button" class="btn btn-link edit-button">edit</button>' + '<button type="button" class="btn btn-link remove-button">remove</button>' + '<button type="button" class="btn btn-link comment-button">comment</button><button type="button" class="btn btn-link comments-button">comments</button>'  + '<span class="post-text">' + posts[0].post + '</span>' + '<span class="name-text">' + ' - Posted By: ' + posts[0].name + '</span>' + '<hr></p></div>'); 

  $('form :input').val(''); //resets inputs in main form  
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

var newComment = function () {

  emptyComments(); 

  var $userComment = $('#post-comment').val();
  var $userCommentName = $('#name-comment').val();

  var commentObj = {
    userComment: $userComment,
    userName: $userCommentName
  };

  posts[0]['comment'].push(commentObj); 
  renderComments();
};

var renderComments = function () {
  $submitCommentButton = $('#submit-comment');
  $submitCommentButton.parents('.post').append('<div class="comment-el"><p class="posted-comment">' + '<button type="button" class="btn btn-link remove-comment">remove</button>' + posts[0]["comment"][0].userComment + ' - Posted by: ' + posts[0]["comment"][0].userName + '</p></div>');

  $('form :input').val(''); //resets input in comment form

  $submitCommentButton.parents('.post').children('.comments-button').css('display', 'inline'); 
  $submitCommentButton.parents('.post').children('.comment-button').css('display', 'none'); 
  $submitCommentButton.parents('.post').children('.comment-el').hide(); 

  $('#comments-form').hide();
  //moves comment form 
  $('.posts').append($('#comments-form'));
};

var toggleComments = function () {
  $(this).parents('.post').children('.comment-el').toggle();
  $(this).parent('.post').append($('#comments-form'));
  $('#comments-form').toggle();
};

var openEditPost = function () { 
  //opens/adds edit form and grabs post content that gets edited
  emptyEdits(); 

  $content = $(this).siblings('.post-text').text();
  $name = $(this).siblings('.name-text').text();

  var post = {
    content: $content,
    name: $name
  }; 

  edits.push(post); 
  console.log(edits)

  $(this).parent().append(('<input type="text" placeholder="Edit post" class="edit-post form-control"/>'));
  $(this).parent().append(("<button type=\"button\" class=\"btn btn-primary btn-xs save-edit-button\">Submit Edit</button>")); 

  renderEdits();
};

var renderEdits = function () {
  var $edits = $('.edit-post').val();

  $(this).parent().replaceWith('<div class="post-el"><p class="post">' + '<button type="button" class="btn btn-link edit-button">edit</button>' + '<button type="button" class="btn btn-link remove-button">remove</button>' + '<button type="button" class="btn btn-link comment-button">comment</button><button type="button" class="btn btn-link comments-button">comments</button>'  + '<span class="post-text">' + $edits + '</span>' + '<span class="name-text">' + edits[0].name + '</span>'+ '</p></div>');
};

//event listeners

//adds new posts on submit button and renders them
//prevents empty submissions
$('#submit').on('click', function () {
  $('#main-form').submit(function(e) {
    if ($.trim($("#post-text").val()) === "" || $.trim($("#name").val()) === "") {
        e.preventDefault();
        return false;
    } else {
      newPost(); 
    };
  });
});

//removes posts
$('.posts').on('click', '.remove-button', removePost); 

//opens initial comments button
$('.posts').on('click', '.comment-button', openComment);

//adds new comments and renders them
$('#submit-comment').on('click', newComment);

//removes comments
$('.posts').on('click', '.remove-comment', removeComment); 

//toggles comments and opens comment form
$('.posts').on('click', '.comments-button', toggleComments);

//opens and adds edit form--also grabs post content and name 
$('.posts').on('click', '.edit-button', openEditPost); 

//submit edit posts
$('.posts').on('click', '.save-edit-button', renderEdits); 



