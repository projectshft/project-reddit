var appFunctions = function() {
  // posts protected inside module
  var posts = [];
  // counter provides unique id
  var counter = 0;
  // take input values and push them to posts array as single object
  var createPost = function() {
    var postText = $('#postText').val();
    var postUser = $('#postUser').val();
    counter ++
    // also pust in a comments array for use in posting and deleting comments
    posts.push({postText: postText, postUser: postUser, postID: counter, comments: []})
  }

  var renderPosts = function() {
    // empty all posts every time
    $('#post-section').empty();
    // setup handlbars for post template
    var source = $('#post-template').html();
    var template = Handlebars.compile(source);
    // loop through each post as the template object
    posts.forEach(function(post) {
      var newHTML = template(post)
      $('#post-section').append(newHTML);
    })
  }

  var removePost = function(eventButton) {
    // find index of post and then splice that index from posts
    var index = $('.individual-post').index(eventButton.closest('.individual-post'))
    posts.splice(index, 1)
  }

  var postComment = function(eventButton) {
    // stay dry. don't reuse eventButton.closest('form') multiple times
    var form = eventButton.closest('form')
    // set up input values
    var $commentText = form.find('.commentText').val()
    var $commentUser = form.find('.commentUser').val();
    // find index of post to locate it to add comments to it
    var index = $('.individual-post').index(eventButton.closest('.individual-post'))
    posts[index].comments.push({commentText: $commentText, commentUser: $commentUser})
  }

  var renderComment = function() {
    var commentSource = $('#comment-template').html();
    var commentTemplate = Handlebars.compile(commentSource);
    // loop through each post as the template object, then render all comments
    posts.forEach(function(post, index) {
      // find individual post and use its index to find its comments section
      var $commentsSection = $('.individual-post').eq(index).find('.comments-section')
      // if you don't empty the comments first, it will add comments multiple times
      $commentsSection.empty()
      // loop through comments to render each one
      for (i = 0; i < post.comments.length; i ++) {
        var commentHTML = commentTemplate(post.comments[i]);
        $commentsSection.append(commentHTML);
      }
    });
  }

  var deleteComment = function() {

  }

  return {
    createPost: createPost,
    renderPosts: renderPosts,
    removePost: removePost,
    postComment: postComment,
    renderComment: renderComment,
    removeComment: removeComment
  }
}


var controls = appFunctions();


$('#post-button').click(function(){
  controls.createPost();
  controls.renderPosts();
});

$('#post-section').on('click', '.remove', function() {
  controls.removePost($(this));
  controls.renderPosts();
})

$('#post-section').on('click', '.comments', function() {
  commentGroup = $(this).closest('p').closest('div').find('div')
  commentGroup.toggle()
  commentGroup.find('div').toggle()
})

$('#post-section').on('click', '.post-comment', function() {
  controls.postComment($(this));
  controls.renderComment();
})

$('#post-section').on('click', '.post-comment', function() {
  controls.removeComment($(this));
  controls.renderComment();
})
