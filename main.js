//When post button is clicked, post name & message above add new post, add remove and comment buttons with new posts

var addNewPost = $('button').on('click', function (e) {
  e.preventDefault();

  var userName = $('#name').val();
  var comment = $('#message').val();


  $('.posts').prepend('<div class="individual-post"><strong>'+ userName+ '</strong><br>'+ comment +'<br><div class="icons"><i class="far fa-trash-alt"></i>  <i class="far fa-comments" id="comment'+userName+'"></i><div  class="individual-comment'+userName+'"</div></div><br><hr></div>')

  //when trash icon is clicked, delete posts
  var deletePost = $('.fa-trash-alt').on('click', function() {
    $(this).closest('.individual-post').remove();
  });

  //when comments is clicked small form for text and username (post button)
  var renderCommentForm = $('#comment'+userName).on('click', function() {
    $(".individual-comment"+userName).append(commentForm);
    comments();
  });

});

  //1. click comments link and open small form for text and username & post button
var comments = function() {
  $('.commentSubmit').on('click', function(e) {
    e.preventDefault();
    var commentUser = $('#commentName').val();
    var commentContent = $('#commentContent').val();

  //2. when user clicks post comment, add to list of comments with a delete button
    $(this).closest('.commentForm').html('<div class="individual-comment">'+ commentContent+ ' posted by <strong>'+ commentUser + '</strong> '+ deleteButton +'</div>')

  //3. clicking delete button next to a comment will delete that individual comment
    var deleteComment = $('.fa-times').on('click', function() {
      $(this).closest('.individual-comment').remove();
    });
  })
};





var iconBar = '<i class="far fa-trash-alt"></i>  <i class="far fa-comments"></i>'
var commentForm = '<div class="commentForm"><form><input id="commentContent" type="text" class="commentContent" placeholder="Comment Text"><input id="commentName" type="text" class="commentUse" placeholder="User Name"><button class="commentSubmit" type="submit" class="btn btn-primary mb-2">Post Comment</button></form></div>'
var deleteButton = '<i class="fas fa-times"></i>'
