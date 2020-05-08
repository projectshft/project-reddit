//Creating post element when post button is clicked
$('#post-button').click(function() {

  var postName = $('#name').val();

  var postMessage = $('#message').val();

  var removeLink = '<a class="remove-link" role="button" href="#">remove </a>';

  var commentLink = '<a class="comment-link" role="button" href="#">comments </a>';

  var commentForm = '<form id="comment-form">' +
    '<h3>Add a New Comment</h3>' +
    '<div class="form-group">' +
    '<textarea type="text" class="form-control comment-message" placeholder="Comment Text" required></textarea>' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" class="form-control comment-name" placeholder="Your Name" required></input>' +
    '</div>' +
    '<button type="button" class="btn btn-primary comment-button">Post</button>' +
    '</form>'

  //Create comment section
  var commentSection = '<section class="comments hide">' + commentForm + '</section>'

  //Create element to hold post html
  var post = '<article  class="post"><p>' + removeLink + commentLink +
    postMessage + '</p>' + commentSection + '<p class="username">Posted By: <strong>' +
    postName + '</strong></p></article><hr>';

  //Add post to posts section
  $('#posts').append(post);

  //Make comment section and form appear and disappear when comment button is clicked
  $('.comment-link').click(function() {
    console.log("I was clicked")
    var comments = $(this).parent().siblings('.comments');
    console.log(comments);
    $(comments).toggleClass("hide");
  });

});
