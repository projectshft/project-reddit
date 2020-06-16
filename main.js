// allPosts keeps track of all post objects
// created from user entry. postIndex is used
// to generate unique ids for posts
// and comments.
var allPosts = [];
var postIndex = 0;

// HTMl for individual buttons and forms
// Created for readability
var removeButtonHTML = '<a href="#" class="remove-button">remove </a>';
var commentButtonHTML = '<a href="#" class="comment-button">comment </a>';
var commentListHTML = '<ul class="comment-list"></ul>';
var commentFormHTML = '<form class="form-inline comments" onsubmit="event.preventDefault();" style="display:none;">' + '<input type="text" class="form-control comment-message" placeholder="Comment Text"></input>' + '<input type="text" class="form-control comment-name" placeholder="User Name"></input>' + '<button id="submit-comment" class="btn btn-primary">Submit Comment</button>' + '</form>';

// Using this module to create Post objects
var PostModule = function(message, name, id) {
  return {
    message: message,
    name: name,
    id: "post-" + id,
    idHTML: "#post-" + id,
    removeButton: null,
    commentButton: null,
    submitComment: null,
    allComments: [], // We keep track of all comments for each post in this array
    commentIndex: 0 // commentIndex is used for creating a unique id for each comment in the array
  }
}

// Using this module to create comment objects
// Note that the idea of the comment's associated post
// is passed in to create the id
var CommentModule = function(message, name, postId, commentId) {
  return {
    message: message,
    name: name,
    id: "post-" + postId + "-comment-" + commentId,
    idHTML: "#post-" + postId + "-comment-" + commentId,
    deleteComment: null,
  }
}

// Appends all posts in allPosts to the DOM
var renderPosts = function(post) {
  $('.post-list').append('<li id="' + post.id + '" class="post">' + removeButtonHTML + commentButtonHTML + post.message + commentListHTML + commentFormHTML + 'Posted by: <strong>' + post.name + '</strong><hr></li>');

  // Dynamically creates buttons based on listElementId
  renderRemoveButton(post);
  renderCommentButton(post);
  renderComments(post);
  renderSubmitCommentButton(post);
}

// On click this button removes selected post from the DOM
// and filters it from allPosts
var renderRemoveButton = function(post) {

  post.removeButton = $(post.idHTML).find('.remove-button');
  $(post.removeButton).on('click', function() {

    allPosts = allPosts.filter(function(item) {
      if (item.id !== post.id) {
        return item
      }
    })

    $('.post-list').find(post.idHTML).remove();
  });
}

// On click, this button toggles the comment form
var renderCommentButton = function(post) {
  post.commentButton = $(post.idHTML).find('.comment-button');

  $(post.commentButton).on('click', function() {
    $(post.idHTML).find(".comments").toggle();
  });
}

// Appends all comments in the argument's allComments array
// to the DOM
var renderComments = function(post) {

  post.allComments.forEach(function(comment) {
    $(post.idHTML).find('.comment-list').append('<li id="' + comment.id + '" class="comment">' + comment.message + ' Posted by: <strong>' + comment.name + ' </strong><i class="fa fa-times remove-comment-button"></i></li>');

    comment.deleteComment = $(post.idHTML).find('.comment-list').find(comment.idHTML).find('.remove-comment-button');

    // On click, removes post from DOM and the selected post from allPosts
    $(comment.deleteComment).on('click', function() {
      post.allComments = post.allComments.filter(function(item) {
        if (item.id !== comment.id) {
          return item
        }
      })

      $(post.idHTML).find('.comment-list').find(comment.idHTML).remove();
    });
  });
}

// Dynamically creates comment submission button.
// Creates new comment from CommentModule and adds
// it to the post's allComments array, creating unique id
// based on the posts commentIndex. Then, re-renders
// comments for that post only.
var renderSubmitCommentButton = function(post) {

  post.submitComment = $(post.idHTML).find('#submit-comment');
  $(post.submitComment).on('click', function() {

    var commentMessage = $(post.idHTML).find('.comment-message').val();
    var commentName = $(post.idHTML).find('.comment-name').val();

    // User must fill in all fields
    if (commentMessage === "" || commentName === "") {
      alert("Please enter all fields")
    } else {
      // creates unique comment id based on the original post's id and the post's commentIndex
      post.allComments.push(CommentModule(commentMessage, commentName, post.id, post.commentIndex));
      post.commentIndex++;

      $(post.idHTML).find('.comment-list').empty();
      renderComments(post);
    }
  })
}


var postButton = $('#submit-post');
// On click, create new post with user entry
$(postButton).on('click', function() {

  var postMessage = $('#message').val();
  var postName = $('#name').val();

  // User must fill in all fields
  if (postMessage === "" || postName === "") {
    alert("please enter all fields")
  } else {

    // add post to allPosts with unique id based on
    // postIndex, increase post index,
    var newPost = PostModule(postMessage, postName, postIndex);
    allPosts.push(newPost);
    postIndex++;

    // then empty .post-list and rerender DOM.
    $('.post-list').empty();

    allPosts.forEach(function(post) {
      renderPosts(post);
    });
  }

});
