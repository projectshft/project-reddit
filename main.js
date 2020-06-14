var postButton = $('#submit-post');

var allPosts = [];

$(postButton).on('click', function () {

  $('.post-list').empty();

  var removeButton = '<a href="#" id="remove-button">remove </a>'
  var commentButton = '<a href="#" id="comment-button">comment </a>'

  var postMessage = $('#message').val();

  var commentForm = '<form class="form-inline comments" onsubmit="event.preventDefault();" style="display:none;"><input id="message-comment" type="text" class="form-control" placeholder="Comment Text"></input><input id="name-comment" type="text" class="form-control" placeholder="User Name"></input><button id="submit-comment" class="btn btn-primary">Post Comment</button></form>';

  var postName = $('#name').val();

  // This is where using allPosts might come in handy. We create a separate ID above using a for loop,
  // and then prepend in a loop down here. The ID woul+ d be for matching dropdowns.
  $('.post-list').append('<li class="post"><p id="post-1">' + '<p>' + removeButton + commentButton + postMessage + '</p>' + '<ul class="comment-list"><ul>' + commentForm + '<p>Posted by: <strong>' + postName + '</strong></p><hr></li>');

  var commentButton = $('#comment-button');

  $(commentButton).on('click', function () {
     $(".comments").toggle();
  });

  var removeButton = $('#remove-button');
  $(removeButton).on('click', function () {
     $(".post").remove();
  });

  var submitComment = $('#submit-comment');

  $(submitComment).on('click', function() {

    $('.comment-list').empty();
     var commentMessage = $('#message-comment').val();
     var commentName = $('#name-comment').val();

     $('comment-list').append('<li><p id="comment-1">' + '<p>' + commentMessage + '</p>' + + '<p>Posted by: <strong>' + commentName + '</strong></p><hr></li>')
  });

});
