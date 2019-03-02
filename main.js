//When post button is clicked, post name & message above add new post, add remove and comment buttons with new posts

var addNewPost = $('button').on('click', function (e) {
  e.preventDefault();

  var userName = $('#name').val();
  var comment = $('#message').val();

  $('.posts').append('<div class="individual-post"><strong>'+ userName+ '</strong><br>'+ comment +'<br><div class="icons">'+ iconBar + '</div><br><hr></div>')

  //when trash icon is clicked, delete posts
  var deletePost = $('.fa-trash-alt').on('click', function() {
    $(this).closest('.individual-post').remove();
  });

  //when comments is clicked small form for text and username (post button)
  var renderCommentForm = $('.fa-comments').on('click', function() {
    $(this).closest('.icons').append(commentForm)
  });

});

// var comments = $('button').on('click', function(e) {
//   e.preventDefault();
//   var commentUser = $('')
//
// })


  //1. click comments link and open small form for text and username & post button

  //2. when user clicks post add to list of comments

  //3. when comment is posted, add X and when clicked, deletes posts

var iconBar = '<i class="far fa-trash-alt"></i>  <i class="far fa-comments"></i>'
var commentForm = '<form><input type="text" class="commentContent" placeholder="Comment Text"><input type="text" class="commentUse" placeholder="User Name"><button type="submit" class="btn btn-primary mb-2">Post Comment</button>'
