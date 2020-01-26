var posts = []


var render = function () {
    $('.posts').empty();

 for (var i = 0; i < posts.length; i ++) {
   // for (var j = 0; j < posts.comments.length; j ++) {
   //   if(posts[i] == comments[j]) {

   $('.posts').append(
       '<div class="post">' + '<a href="#" class="removes">remove</a> ' + '<button class="btn-comments">comments</button>' + ' ' + '<br>' +
       posts.message + '<div class="comments-container hide">' + '<input type="text" class="comment-input" placeholder="Comment">' +
       '<input type="text" class="commenter-name" placeholder="Name"><button class="btn btn-primary submit-comment">Submit</button></div>' +
       '<div> Posted By: <strong>' + posts.name + '</strong></div>' + '<hr>' + '</div>');

   $('.posts').append('<div class = "comments">' + posts.comments.comment + ' Posted By: <strong>' +
      posts.comments.name + '</strong>' + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
      }
    }
  
// Events
// Submit Post Event

$('button').click(function() {
// Edge cases for if user leaves post message blank, post name blank, or both blank
  if ($('#message').val() == '' && $('#name').val() == '') {
    alert('Name and message can not be left blank')
  } else if ($('#message').val() == '') {
    alert('Message can not be left blank');
  } else if ($('#name').val() == '') {
    alert('Name can not be left blank')
  } else {

// Store user input to be accessed later in posts array
  var userName = $('#name').val();
  var userMessage = $('#message').val();

  posts.push({ message: userMessage, name: userName, comments: []});
  render()
  }
});

// Remove Post Event
$('.posts').on('click', '.removes', function() {
  $(this).closest('.post').remove();
});

// Toggle Comments Open/Closed Event
$('.posts').on('click', '.btn-comments', function() {
  $(this).siblings(".hide").toggleClass("show")
});

// Submit Comment Event
$('.posts').on('click', '.submit-comment', function() {
// Edge cases for if user leaves comment input blank, comment name blank, or both blank
  if ($('.comment-input').val() == '' && $('.commenter-name').val() == '') {
    alert('Name and comment can not be left blank')
  } else if ($('.comment-input').val() == '') {
    alert('Comment can not be left blank');
  } else if ($('.commenter-name').val() == '') {
    alert('Name can not be left blank')
  } else {

// Store comment input to be accessed later in posts array
  var userComment = $('.comment-input').val();
  var commenterName = $('.commenter-name').val();

// Add comments div containing, user comment, commenter name and close button
// Publish comment on the page
  // $('.posts').closest('.post').append('<div class = "comments">' + userComment + ' Posted By: <strong>' +
  //   commenterName + '</strong>' + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
    posts.comments.push([{comment: userComment , name: userName}])
    render()
  }
})

// Remove Comment Event
$('.posts').on('click', '.close', function() {
  $(this).closest('.comments').remove();
});
