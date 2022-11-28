
var makePost = function() {
  $('#new-post').on('submit', function() {
    var post = {
      userName: $('#name').val(),
      userMessage: $('#message').val()
    }

    var source = $('#post-template').html();
    var template = Handlebars.compile(source);
    var newPost = template(post);

    // adds postTemplate to the .posts div
    $('.posts').append(newPost);
    // resets post input boxes
    $('form').trigger('reset');

    // call to other functions to allow user to implement them within each post.
    makeComment();
    showComments();
    removePost();
  }) 
};

// makeComment only works when there is one post.  How to get it to go
var makeComment = function(e) {
  $('#new-comment').on('submit', function () {
    var comment = {
      userName: $('#user-name').val(),
      commentText: $('#comment').val()
    }

    var source = $('#comment-template').html();
    var template = Handlebars.compile(source);
    var newComment = template(comment);

    $('.comment-list').append(newComment);
    $('form').trigger('reset');

    // call removeComment to allow user to remove comments within the posted comments
    removeComment();
  })
}

var removeComment = function() {
  $('.remove').on('click', function() {
    // removes the closest comment div above the remove that was clicked
    $(this).closest('div.comment').remove();
  });
}

var removePost = function() {
  $('.remove').on('click', function() {
    // removes the closest post div above the remove that was clicked (including all comments)
    $(this).closest('div.post').remove();
  });
}

// showComments can show/hide comment inputs - shows comments and input boxes for every post - need to find way to create unique id's for every post comment box.  
var showComments = function() { 
  $('.comments').on('click', function() {
    if ($('.comment-input').css('display') == 'none') {
      $('.comment-input').show();
    } else {
      $('.comment-input').hide();
    }
  });
}


makePost();