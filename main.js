var ProjectReddit = function () {
    var posts = [];
  
    var $posts = $('.posts');
  
    var createPost = function (text, user) {
      posts.push({ text: text, name: user, comments: []});
    };
  
    /* Empty all posts, add from the posts array along with our
     new comments */
    var showPosts = function () {
      $posts.empty();
  
      for (var i = 0; i < posts.length; i += 1) {
        var post = posts[i];
  
        var commentsContainer = '<div class="comments-container">' + '<div class=comments-list></div>' +
        '<input type="text" class="comment-name" placeholder="Comment Text">' + '<input type="text" class="comment-user" placeholder="User Name"><button class="btn btn-primary add-comment">Post Comment</button> </div>';
  
        $posts.append('<div class="post">'
          + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
          commentsContainer + '<div> Posted By: <strong>' + post.name + '</strong></div> <hr> </div>');
      }
    };
  
    var showComments = function () {
      $('.comments-list').empty();
  
      for (var i = 0; i < posts.length; i += 1) {
        // the current post in the iteration
        var post = posts[i];
  
        /* find post element in page that is equal to the
         current post we are iterating on */
        var $post = $('.posts').find('.post').eq(i);
  
        // iterate through each comment in post's comments array
        for (var j = 0; j < post.comments.length; j += 1) {
          // current comment in iteration
          var comment = post.comments[j];
  
          // append the comment to post we wanted to comment on
          $post.find('.comments-list').append(
            '<div class="comment">' + comment.text +
            ' Posted By: <strong>' + comment.name + ' </strong><a class="remove-comment"></a> ' +
            '</div>'
          );
        };
      };
    };

   /* var removePost = function (currentPost) {
      var clickedPost = $(currentPost).closest('.post');
  
      var index = clickedPost.index();
  
      posts.parse(index, 1);
      clickedPost.remove();
    }; */