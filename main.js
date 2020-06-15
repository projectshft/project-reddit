var postButton = $('#submit-post');

var allPosts = [];
var postIndex = 0;

// Creating Post objects
var PostModule = function(message, name, id) {
  return {
    message: message,
    name: name,
    id: id,
    listElementId: null,
    removeButton: null,
    commentButton: null,
    submitComment: null,
    allComments: [],
    commentIndex: 0
  }
}

// Creating Comment objects
var CommentModule = function(message, name, id) {
  return {
    message: message,
    name: name,
    id: id,
    listElementId: null,
    removeButton: null,
  }
}


$(postButton).on('click', function() {

  var postMessage = $('#message').val();
  var postName = $('#name').val();
  allPosts.push(PostModule(postMessage, postName, postIndex));
  postIndex++;

  var removeButtonHTML = '<a href="#" class="remove-button">remove </a>';
  var commentButtonHTML = '<a href="#" class="comment-button">comment </a>';
  var commentFormHTML = '<form class="form-inline comments" onsubmit="event.preventDefault();" style="display:none;">' + '<ul class="comment-list"></ul>' + '<input type="text" class="form-control comment-message" placeholder="Comment Text"></input>' + '<input type="text" class="form-control comment-name" placeholder="User Name"></input>' + '<button id="submit-comment" class="btn btn-primary">Post Comment</button>' + '</form>';

  $('.post-list').empty();

  allPosts.forEach(function(post) {

    $('.post-list').append('<li id="' + post.id + '" class="post">' + '<p>' + removeButtonHTML + commentButtonHTML + post.message + '</p>' + commentFormHTML + '<p>Posted by: <strong>' + post.name + '</strong></p><hr></li>');

    //
    post.listElementId = '#' + post.id;

    // Dynamically creates commentButton based on listElementId
    post.commentButton = $(post.listElementId).find('.comment-button');
    // Toggles .comments (child of selected post)
    $(post.commentButton).on('click', function() {
      $(post.listElementId).find(".comments").toggle();
    });

    // Dynamically creates removeButton based on listElementId
    post.removeButton = $(post.listElementId).find('.remove-button');
    // On click, removes post from DOM and the selected post from allPosts
    $(post.removeButton).on('click', function() {
      $(post.listElementId).remove();
      allPosts = allPosts.filter(function(item) {
        if (item.id !== post.id) {
          return item
        }
      })
    });

    post.submitComment = $(post.listElementId).find('#submit-comment');
    $(post.submitComment).on('click', function() {

      var commentMessage = $(post.listElementId).find('.comment-message').val();
      var commentName = $(post.listElementId).find('.comment-name').val();
      post.allComments.push(CommentModule(commentMessage, commentName, post.commentIndex)); // 0
      post.commentIndex++;

      // Emptying before for loop
      $(post.listElementId).find('.comment-list').empty();

      post.allComments.forEach(function(comment) {
        $(post.listElementId).find('.comment-list').append('<li id="' + comment.id + '" class="comment">' + comment.message + ' Posted by: <strong>' + comment.name + ' </strong><i class="fa fa-times remove-comment-button"></i></li>');

        comment.listElementId = '#' + comment.id;

        comment.removeButton = $(comment.listElementId).find('.remove-comment-button');
        // On click, removes post from DOM and the selected post from allPosts
        $(comment.removeButton).on('click', function() {
          $(comment.listElementId).remove();
          post.allComments = post.allComments.filter(function(item) {
            if (item.id !== comment.id) {
              return item
            }
          })
        });
      });

    });

  })

})
