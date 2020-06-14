var postButton = $('#submit-post');

var allPosts = [];

// Creating Post objects
var PostModule = function(message, name) {

  var post = {
    message: message,
    name: name
  }

  return {
    post: post
  };
}

$(postButton).on('click', function() {

  var removeButton = '<a href="#" class="remove-button">remove </a>';
  var commentButton = '<a href="#" class="comment-button">comment </a>';
  var commentForm = '<form class="form-inline comments" onsubmit="event.preventDefault();" style="display:none;">' + '<ul class="comment-list"></ul>' + '<input type="text" class="form-control comment-message" placeholder="Comment Text"></input>' + '<input type="text" class="form-control comment-name" placeholder="User Name"></input>' + '<button id="submit-comment" class="btn btn-primary">Post Comment</button>' + '</form>';

  var postMessage = $('#message').val();
  var postName = $('#name').val();

  allPosts.push(PostModule(postMessage, postName));


  $('.post-list').empty();

  //
  for (i = 0; i < allPosts.length; i++) {

    $('.post-list').append('<li class="post">' + '<p>' + removeButton + commentButton + allPosts[i].post.message + '</p>' + commentForm + '<p>Posted by: <strong>' + allPosts[i].post.name + '</strong></p><hr></li>');

    var commentButton = $('.comment-button');
    $(commentButton).on('click', function() {
      $(".comments").toggle();
    });

    var removeButton = $('.remove-button');
    $(removeButton).on('click', function() {
      $(".post").remove();
    });

    var submitComment = $('#submit-comment');
    $(submitComment).on('click', function() {
      // $('.comment-list').empty();
      var commentMessage = $('.comment-message').val();
      var commentName = $('.comment-name').val();

      $('.comment-list').append('<li><p id="comment">' + '<p>' + commentMessage + ' Posted by: <strong>' + commentName + '</strong></p></li>')
    });
  }

});
