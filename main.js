var posts = [];
var currentIndex;
var currentPost;  

//adds new posts based on inputs in main-form and renders them-also stores inputs in posts array with unique id
var newPost = function () {
  var $userText = $('#post-text').val();
  var $userName = $('#name').val(); 

  var post = {
    id: uuidv4(), 
    post: $userText,
    name: $userName,
    comment: []
  };

  posts.push(post); 

  //each new post is the last post in the posts array
  $postText = posts[posts.length-1].post;  
  $postName = posts[posts.length-1].name; 
  $postId = posts[posts.length-1].id;

  renderPost();
 
  //adds uniqu id to each post-el div 
  $post = $('.post-el'); 
  $post.last().attr('id', $postId); 
};

var renderPost = function () {
  //$('#submit').unbind(); 
   $('.posts').append('<div class="post-el"><p class="post">' + '<button type="button" class="btn btn-link edit-button">edit</button>' + '<button type="button" class="btn btn-link remove-button">remove</button>' + '<button type="button" class="btn btn-link comment-button">comment</button><button type="button" class="btn btn-link comments-button">comments</button>'  + '<span class="post-text">' + $postText + '</span>' + '<span class="name-text">' + ' - Posted By: ' + $postName + '</span>' + '<hr></p></div>'); 

  $('form :input').val(''); //resets main form  
};

var removeItemsFromPosts = function (array1) {
  for (let i = 0; i < array1.length; i++) {
    const element = array1[i]; 

    if ($currentPostId === element.id) {
      currentIndex = array1.indexOf(element); 
    };
  };
  array1.splice(currentIndex, 1); 
};

var removePost = function () {
  $currentPostId = $(this).parents('.post-el').attr('id'); 
  removeItemsFromPosts(posts); 

  $('.posts').append($('#comments-form')); //moves comment-form so it doesn't get deleted
  $(this).parents('.post-el').remove(); 
};

var openComment = function () {
  $(this).parent('.post').append($('#comments-form')); //comments form opens beneath the comment selected
  $('#comments-form').show();
};

var removeComment = function () {
  $(this).parent('.post').append($('#comments-form'));
  $(this).parents('.comment-el').remove();
};

//adds new comments to posts array based on inputs in comments-form and renders them
var newComment = function () {
  var $userComment = $('#post-comment').val();
  var $userCommentName = $('#name-comment').val();
  
  var commentObj = {
    userComment: $userComment,
    userName: $userCommentName
  };
//finds current post based on unique id of element being clicked
  $currentPostId = $(this).parents('.post-el').attr('id'); 
  
  for (let i = 0; i < posts.length; i++) {
    const element = posts[i]; 
    if ($currentPostId === element.id) {
      currentIndex = posts.indexOf(element); 
      posts[currentIndex]['comment'].push(commentObj);
      currentPost = posts[currentIndex]; 
    };
  };
  
  commentArray = currentPost['comment'];
  currentComment = commentArray[commentArray.length-1];

  renderComments();
};

var renderComments = function () {
  $submitCommentButton = $('#submit-comment');
  $submitCommentButton.parents('.post').append('<div class="comment-el"><p class="posted-comment">' + '<button type="button" class="btn btn-link remove-comment">remove</button>' + currentComment.userComment + ' - Posted by: ' + currentComment.userName + '</p></div>');

  $('form :input').val(''); //resets form

  $submitCommentButton.parents('.post').children('.comments-button').css('display', 'inline'); 
  $submitCommentButton.parents('.post').children('.comment-button').css('display', 'none'); 
  $submitCommentButton.parents('.post').children('.comment-el').hide(); 

  $('#comments-form').hide();
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

//grabs post content from posts array and renders them
var newEdit = function () {
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



