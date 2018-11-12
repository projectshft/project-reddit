var posts = [];

//function that creates new post upon entering text and clicking post button
var makeNewPost = $('#post-button').click(function() {
  //variable declaration for input values and handlebars template
  var $postContent = $('#post-content').val();
  var $userName = $('#user-name').val();
  var postSource = $('#post-template').html();
  var postTemplate = Handlebars.compile(postSource);
  var newPost = postTemplate({post: $postContent, user: $userName});
  //add post content as an object to the posts array for data management
  posts.push({postContent: $postContent, userName: $userName});
  $('#posts').append(newPost);
});



//function to delete post
var deletePost = $(document).on('click', '#remove', function () {
    $(this).parent().parent().remove();
  //   var postWithContent = posts.filter(function (instance) {
  //   //unfortunately deletes all content in the posts array at this point
  //   // if (instance.postContent === $('postContent').val()) {
  //   //   return false;
  //   // }
  // });
});


//function to post comment
var displayComments = $(document).on('click', '#show-comments', function () {
  var commentFormSource = $('#comment-form-template').html();
  var commentFormTemplate = Handlebars.compile(commentFormSource);
  var commentForm = commentFormTemplate();
  $('#user-line').prepend(commentForm);
});

//function to hide Comments
var hideComments = function () {
  $(document).on('click', '#show-comments', function () {
    $('.comment-form').remove();
  })
};



//function to post a new comment
var postComment = $(document).on('click', '#comment-button', function () {
  var $commentText = $('#comment-text').val();
  var $commentUserName = $('#comment-user').val();
  var commentSource = $('#comment-template').html();
  var commentTemplate = Handlebars.compile(commentSource);
  var newComment = commentTemplate({comment: $commentText, user: $commentUserName});
  $('#content-line').append(newComment);
});


//function to delete comment
var deleteComment = $(document).on('click', '#delete-comment-button', function() {
  $(this).parent().remove();
});
