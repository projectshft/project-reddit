
var makePost = function() {
  $('#new-post').on('submit', function() {
    var userName = $('#name').val();
    var userMessage = $('#message').val();

    var commentBox = '<form id="new-comment" style="margin-top:30px;" onsubmit="event.preventDefault();"><div class="comment-input"><div class="form-group"><input id="comment" type="text" class="form-control" placeholder="Comment Text" required></input></div><div class="form-group"><input id="user-name" type="text" class="form-control" placeholder="Your Name" required></input></div><button id="submit-comment" type="submit" class="btn btn-primary">Submit Comment</button></div>';

    var postTemplate = '<div class="post"><p><a class="remove">remove</a> <a class="comments">comments</a> ' + userMessage + ' - Posted By: ' + userName + '</p><div class="comment-list"></div>' + commentBox + '<hr>';

    // adds postTemplate to the .posts div
    $('.posts').append(postTemplate);
    // resets post input boxes
    $('form').trigger('reset');

    makeComment();
    showComments();
    removePost();
  }) 
};

var makeComment = function() {
  $('#new-comment').on('submit', function () {
    var userName = $('#user-name').val();
    var commentText = $('#comment').val();

    var commentTemplate = '<div class="comment comment-input"><p><a class="remove">remove</a> ' + commentText + ' Posted by: ' + userName + '</p></div>';

    $('.comment-list').append(commentTemplate);
    $('form').trigger('reset');

    removeComment();
  })
}

var removeComment = function() {
  $('.remove').on('click', function() {
    $(this).closest('div.comment').remove();
  });
}

var removePost = function() {
  $('.remove').on('click', function() {
    // removes the closes post div above the remove that was clicked
    $(this).closest('div.post').remove();
  });
}

var showComments = function() {
  $('.comments').on('click', function() {
    if ($('.comment-input').css('display') == 'none') {
      $('.comment-input').show();
    } else {
      $('.comment-input').hide();
    }
  });
}

// showComments can show/hide comment inputs - only works on bottom post && only works for all comments - need to find way to create unique id's for every post comment box



makePost();