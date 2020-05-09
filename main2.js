//Creating post element when post button is clicked
$('#post-button').click(function() {

  var postName = $('#name').val();

  var postMessage = $('#message').val();

  var removeLink = '<a class="remove-link" role="button" href="#">remove </a>';

  var commentLink = '<a class="comment-link" role="button" href="#">comments </a>';

 var commentSection = '<section class="comments>COMMENTS</section>';



//Create comment section
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

// $(commentSection).append(commentForm);


  //Create element to hold post html
  var post = '<article  class="post">' + removeLink + commentLink +
    postMessage + commentSection + '<p class="username">Posted By: <strong>' +
    postName + '</strong></p></article><hr>';
    var $comments = $('.comment-link');

    // $comments.on('click', function() {
    //   debugger
    //   $(this).siblings('.comments').toggleClass('hide');
    // })

    // var testPost = '<article class="post">POSTStest</article>'

    // $(testPost).append('<p>TEST 2</p>');
  //Add post to posts section
  $('#posts').append(post)

  $('.comment-link').on('click', function() {
    console.log("I was clicked")
    debugger
    var comments = $(event.target).closest('.post').find('.comments');
    $(comments).toggleClass('hide');


  });

  // $('#posts').append(testPost)
  // $('.post').append(commentLink).click(function() {$(event.target).siblings('.comments').toggleClass('hide')});

});

//Make comment section and form appear and disappear when comment button is clicked
// $('.comment-link').on('click', function() {
//   console.log("I was clicked")
//   debugger
//   var comments = $(this).closest('.post').find('.comments');
//   $(comments).toggleClass('hide');
//
//
// });
