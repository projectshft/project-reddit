//When post button is clicked, post name & message above add new post, add remove and comment buttons with new posts

var addNewPost = $('button').on('click', function (e) {
  e.preventDefault();

  var userName = $('#name').val();
  var comment = $('#message').val();

  $('.posts').append('<li>Posted by: <strong>' + userName + '</strong></li>')
  $('.posts').append('<li>' + comment + '</li>')
  $('.posts').append('<button id="remove"><li><i class="far fa-trash-alt"></i></button>   <button id="comment"><i class="far fa-comments"></button></i></li>' )

//when comments is clicked small form for text and username (post button)
  var renderCommentForm = $('.comment').on('click', function() {
    $(this).html(commentForm)
  });
});




  //1. click comments link and open small form for text and username & post button

  //2. when user clicks post add to list of comments

  //3. when comment is posted, add X and when clicked, deletes posts

var commentForm = '<form><input type="text" class="commentContent" placeholder="Comment Text"><input type="text" class="commentUse" placeholder="User Name"><button type="submit" class="btn btn-primary mb-2">Post Comment</button>'
