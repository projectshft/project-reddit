var posts = [];


//function that creates new post upon entering text and clicking post button
var makeNewPost = $('#post-button').click(function() {
  //variable declaration for input values
  var $postContent = $('#post-content').val();
  var $userName = $('#user-name').val();
  posts.push({postContent: $postContent, userName: $userName});
  renderPost();
});

//function to render comments
var renderPost = function () {
  //declare varables for handlebars template and interpolation
  var postSource = $('#post-template').html();
  var postTemplate = Handlebars.compile(postSource);
  for (let i = 0; i < posts.length; i++) {
    var newPost = postTemplate({post: posts[i].postContent, user: posts[i].userName});
  }
  $('#posts').append(newPost);
};



//function to delete post
var deletePost = $(document).on('click', '.remove', function () {
  var $postData = $(this).parent().find('.post-data').html();
  var $userData = $(this).parent().find('.user-data').html();
  //loop to remove content from posts array
  var filteredPosts = posts.filter(function(post) {
    if (post.postContent !== $postData && post.userName !== $userData) {
      return true;
    }
  });
  posts = filteredPosts;
  $(this).parent().parent().remove();
});


//function to display comments
var displayComments = $(document).on('click', '.show-comments', function () {
  var $commentForm = $(this).parent().find('.comment-form');
  $($commentForm).toggle();
});



//function to add comment data to array and invoke function to render comments
var makeNewComment = $(document).on('click', '#comment-button', function () {
  var $commentText = $('#comment-text').val();
  var $commentUserName = $('#comment-user').val();
  var commentSource = $('#comment-template').html();
  var commentTemplate = Handlebars.compile(commentSource);
  var newComment = commentTemplate({comment: $commentText, user: $commentUserName});
  $(this).parent().parent().prepend(newComment);
  // for (let i = 0; i < posts.length; i++) {
  //   if (posts[i].postContent === $postData && posts[i].userName === $userData) {
  //     posts[i].comments = {$commentUserName: $commentText};
  //   }
  // }
});

//function to delete comment
var deleteComment = $(document).on('click', '#delete-comment-button', function() {
  $(this).parent().remove();
});
