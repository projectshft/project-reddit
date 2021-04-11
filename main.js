var posts = [];
var currentIndex;
var currentPost; 

//adds new posts based on inputs in main-form and renders them
var newPost = function () {
  //emptyPosts();
  var $userText = $('#post-text').val();
  var $userName = $('#name').val(); 

  var post = {
    id: uuidv4(), 
    post: $userText,
    name: $userName,
    comment: []
  };

  posts.push(post); 

  $postText = posts[posts.length-1].post;  
  $postName = posts[posts.length-1].name; 
  $postId = posts[posts.length-1].id;

  renderPost();
 
  $post = $('.post-el'); 
  $post.last().attr('id', $postId); 
};

//adds html and appropriate data inputs to dom
var renderPost = function () {
  //$('#submit').unbind(); 
   $('.posts').append('<div class="post-el"><p class="post">' + '<button type="button" class="btn btn-link edit-button">edit</button>' + '<button type="button" class="btn btn-link remove-button">remove</button>' + '<button type="button" class="btn btn-link comment-button">comment</button><button type="button" class="btn btn-link comments-button">comments</button>'  + '<span class="post-text">' + $postText + '</span>' + '<span class="name-text">' + ' - Posted By: ' + $postName + '</span>' + '<hr></p></div>'); 

  $('form :input').val(''); //resets main form  
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
  $(this).parent('.post').append($('#comments-form'));
};


//adds new comments based on inputs in comments-form and renders them
var newComment = function () {

  var $userComment = $('#post-comment').val();
  var $userCommentName = $('#name-comment').val();
  
  var commentObj = {
    userComment: $userComment,
    userName: $userCommentName
  };

  $currentPostId = $(this).parents('.post-el').attr('id'); 
 
  for (let i = 0; i < posts.length; i++) {
    const element = posts[i]; 

    if ($currentPostId === element.id) {
      currentIndex = posts.indexOf(element); 
      posts[currentIndex]['comment'].push(commentObj);
      currentPost = posts[currentIndex]; 
      
    };
  };
  renderComments();
};

//adds html and appropriate data inputs to dom--changes comment to comments after a comment is made
var renderComments = function () {
  $submitCommentButton = $('#submit-comment');
  $submitCommentButton.parents('.post').append('<div class="comment-el"><p class="posted-comment">' + '<button type="button" class="btn btn-link remove-comment">remove</button>' + currentPost['comment'].userComment + ' - Posted by: ' + currentPost['comment'].userCommentName + '</p></div>');

  $('form :input').val(''); //resets form

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

//adds and opens edit form when edit button clicked
var openEditPost = function () { 

  $(this).parent().append(('<input type="text" placeholder="Edit post" class="edit-post form-control"/>'));
  $(this).parent().append(("<button type=\"button\" class=\"btn btn-primary btn-xs save-edit-button\">Submit Edit</button>")
  ); 
};

//grabs post content from edit-post input
var newEdit = function () {
  //emptyEdits(); 

  $currentPostId = $(this).parents('.post-el').attr('id'); 
 
  for (let i = 0; i < posts.length; i++) {
    const element = posts[i]; 

    if ($currentPostId === element.id) {
      currentIndex = posts.indexOf(element); 
      currentPost = posts[currentIndex]; 
    };
  };

  var $edits = $('.edit-post').val();
  currentPost.post = $edits; 

  renderEdits(); 
};

//replaces post with edits and removes edit form
var renderEdits = function () {
  var $saveEdit = $('.save-edit-button');
  var $editInput = $('.edit-post');  

  $saveEdit.siblings('.post-text').replaceWith('<span class="post-text">' + currentPost.post + '</span>');
  $saveEdit.siblings('.post-name').replaceWith('<span class="name-text">' + currentPost.name + '</span>');

  $saveEdit.remove(); 
  $editInput.remove(); 
};

//event listeners

//adds posts
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

//adds comments
$('#submit-comment').on('click', newComment);

//removes comments
$('.posts').on('click', '.remove-comment', removeComment); 

//toggles comments and opens comments-form
$('.posts').on('click', '.comments-button', toggleComments);

//opens and adds edit input 
$('.posts').on('click', '.edit-button', openEditPost); 

//edits posts
$('.posts').on('click', '.save-edit-button', newEdit); 



