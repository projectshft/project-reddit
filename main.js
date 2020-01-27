// Create an array to store post objects
var posts = []

var renderAllPosts = function() {
  // Clear all of the posts
  $('.posts').empty();

  // Loop through the posts array and add all of the objects in the array + new posts
  for (var i = 0; i < posts.length; i++) {

    $('.posts').append('<div class="post">' + '<a href="#" class="removes">remove</a> ' + '<button class="btn-comments">comments</button>' + ' ' + '<br>' +
      posts[i].message + '<div class="comments-section hide">' + '<div class="comments"></div>' + '<input type="text" class="comment-input" placeholder="Comment">' +
      '<input type="text" class="commenter-name" placeholder="Name"><button class="btn btn-primary submit-comment">Submit</button></div>' +
      '<div> Posted By: <strong>' + posts[i].name + '</strong></div>' + '<br>' + '</div>');
  };
};

var renderAllComments = function() {
  // Clear all of the comments
  $('.comments').empty();

  for (var i = 0; i < posts.length; i++) {
    // Loop through the comments array of the corresponding post and find the current comment
    for (var j = 0; j < posts[i].comments.length; j++) {

      // Add the comment to the post it belongs to
      $('.posts').find('.comments').append(posts[i].comments[j].comment + ' Posted By: <strong>' +
        posts[i].comments[j].name + '</strong>' + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>' + '<br>')
    };
  };
};
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

    var userName = $('#name').val();
    var userMessage = $('#message').val();

    posts.push({
      message: userMessage,
      name: userName,
      comments: []
    })
    renderAllPosts();
  };
});

// Remove Post Event
$('.posts').on('click', '.removes', function() {
  $(this).closest('.post').remove();
});

// Toggle Comments Open/Close Event
$('.posts').on('click', '.btn-comments', function() {
  $(this).siblings(".hide").toggleClass("show")
});

// Submit Comment Event
$('.posts').on('click', '.submit-comment', function() {

    var userComment = $('.comment-input').val();
    var commenterName = $('.commenter-name').val();

    // Find the index of the closest post to push the comment into the correct comment array
    var postIndex = $(this).closest('.post').index();

    posts[postIndex].comments.push({
      comment: userComment,
      name: commenterName
    });

    renderAllComments();
});

// Remove Comment Event
$('.posts').on('click', '.close', function() {
  $(this).closest('.comments').remove();
});
