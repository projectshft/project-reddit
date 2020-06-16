
var allPosts = [];
var postIndex = 0;

// HTMl reused consistently
var removeButtonHTML = '<a href="#" class="remove-button">remove </a>';
var commentButtonHTML = '<a href="#" class="comment-button">comment </a>';
var commentListHTML = '<ul class="comment-list"></ul>';
var commentFormHTML = '<form class="form-inline comments" onsubmit="event.preventDefault();" style="display:none;">' + '<input type="text" class="form-control comment-message" placeholder="Comment Text"></input>' + '<input type="text" class="form-control comment-name" placeholder="User Name"></input>' + '<button id="submit-comment" class="btn btn-primary">Submit Comment</button>' + '</form>';

// Using this module to create Post objects
var PostModule = function(message, name, id) {
  return {
    message: message,
    name: name,
    id: id,
    postListElementId: null,
    removeButton: null,
    commentButton: null,
    submitComment: null,
    allComments: [], // We keep track of all comments for each post in this array
    commentIndex: 0 // commentIndex is used for creating a unique id for each comment in the array
  }
}

// Creating Comment objects
var CommentModule = function(message, name, id) {
  return {
    message: message,
    name: name,
    id: id,
    commentListElementId: null,
    deleteComment: null,
  }
}

var renderPosts = function (post) {
  $('.post-list').append('<li id="' + post.id + '" class="post">' + removeButtonHTML + commentButtonHTML + post.message  + commentListHTML + commentFormHTML + 'Posted by: <strong>' + post.name + '</strong><hr></li>');

  //
  post.postListElementId = '#' + post.id;

  // Dynamically creates removeButton based on listElementId
  renderRemoveButton(post);
  // Dynamically creates commentButton based on listElementId
  renderCommentButton(post);
  renderComments(post);
  renderSubmitCommentButton(post);
}

var renderRemoveButton = function (post) {

  post.removeButton = $(post.postListElementId).find('.remove-button');
  $(post.removeButton).on('click', function() {

    allPosts = allPosts.filter(function(item) {
      if (item.id !== post.id) {
        return item
      }
    })

    $('.post-list').find(post.postListElementId).remove();
    console.log("Post" + post.postListElementId + " was clicked on remove")
  });
}

var renderCommentButton = function (post) {

  post.commentButton = $(post.postListElementId).find('.comment-button');
  // Toggles .comments (child of selected post)
  $(post.commentButton).on('click', function() {
    $(post.postListElementId).find(".comments").toggle();
    console.log("Post" + post.postListElementId + " was clicked on toggle");
  });
}


var renderComments = function (post) {

  post.allComments.forEach(function(comment) {
    $(post.postListElementId).find('.comment-list').append('<li id="' + comment.id + '" class="comment">' + comment.message + ' Posted by: <strong>' + comment.name + ' </strong><i class="fa fa-times remove-comment-button"></i></li>');

    comment.commentListElementId = '#' + comment.id;

    renderDeleteCommentButton(comment, post);

  });
}

var renderDeleteCommentButton = function(comment, post) {
  comment.deleteComment =  $(comment.commentListElementId).find('.remove-comment-button');
  // On click, removes post from DOM and the selected post from allPosts
  $(comment.deleteComment).on('click', function() {

    post.allComments = post.allComments.filter(function(item) {
      if (item.id !== comment.id) {
        return item
      }
    })

    $(comment.commentListElementId).remove();
  });
}

var renderSubmitCommentButton = function(post) {
  post.submitComment = $(post.postListElementId).find('#submit-comment');
  $(post.submitComment).on('click', function() {

    var commentMessage = $(post.postListElementId).find('.comment-message').val();
    var commentName = $(post.postListElementId).find('.comment-name').val();
    post.allComments.push(CommentModule(commentMessage, commentName, post.commentIndex)); // 0
    post.commentIndex++;

    $('.post-list').empty();

    allPosts.forEach(function(p) {
      renderPosts(p);
    });
  });
}


var postButton = $('#submit-post');
// On submission, we *try* to re-render the entire DOM.
$(postButton).on('click', function() {

  var postMessage = $('#message').val();
  var postName = $('#name').val();
  var newPost = PostModule(postMessage, postName, postIndex);
  allPosts.push(newPost);
  postIndex++;

  $('.post-list').empty();

  allPosts.forEach(function(p) {
    renderPosts(p);
  });

});


// Weird bug...
// If the first existing post has more comments, we can't get toggle to work
// and it takes two clicks to delete the post wiht fewer commetns
//
// It's like that extra comment throws off the comment toggle and the remove button
// Clicks are being registered though
//
//
// And if I delete the number of comments on the first post, such that
// it is less than or equal to the number of comments on the post below it,
// it works
//
//
// I think the way I'm doing it, I have to refresh the whole page
//
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// The delete button HIDES the first comment on the first postName
// the second time deletes the post it was clicked on.
//
// Something's not being dynamically created when the second comment is made
