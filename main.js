var postButton = $('#submit-post');
var allPosts = [];

// Creating Post objects
var PostModule = function(message, name, id) {
  return {
    message: message,
    name: name,
    id: id,
    listElementId: null,
    removeButton: null,
    commentButton: null,
    submitComment: null
  }
}

var postIndex = 0;

$(postButton).on('click', function() {

  var postMessage = $('#message').val();
  var postName = $('#name').val();
  allPosts.push(PostModule(postMessage, postName, postIndex));
  console.log(allPosts)
  postIndex++;

  var removeButtonHTML = '<a href="#" class="remove-button">remove </a>';
  var commentButtonHTML = '<a href="#" class="comment-button">comment </a>';
  var commentFormHTML = '<form class="form-inline comments" onsubmit="event.preventDefault();" style="display:none;">' + '<ul class="comment-list"></ul>' + '<input type="text" class="form-control comment-message" placeholder="Comment Text"></input>' + '<input type="text" class="form-control comment-name" placeholder="User Name"></input>' + '<button id="submit-comment" class="btn btn-primary">Post Comment</button>' + '</form>';

  $('.post-list').empty();

  allPosts.forEach (function (post) {

    $('.post-list').append('<li id="' + post.id + '" class="post">' + '<p>' + removeButtonHTML + commentButtonHTML + post.message + '</p>' + commentFormHTML + '<p>Posted by: <strong>' + post.name + '</strong></p><hr></li>');

    post.listElementId = '#' + post.id;

    post.commentButton = $(post.listElementId).find('.comment-button');
    $(post.commentButton).on('click', function() {
      $(post.listElementId).find(".comments").toggle();
    });

    post.removeButton = $('.remove-button');
    $(post.removeButton).on('click', function() {
      $(".post").remove();
      // delete from the array
    });

    post.submitComment = $('#submit-comment');
    $(post.submitComment).on('click', function() {
      // $('.comment-list').empty();
      var commentMessage = $('.comment-message').val();
      var commentName = $('.comment-name').val();

      $('.comment-list').append('<li><p id="comment">' + '<p>' + commentMessage + ' Posted by: <strong>' + commentName + '</strong></p></li>')
    });

  });

});
