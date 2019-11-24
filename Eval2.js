//create empty posts array
var posts = []
var $posts = $('.posts');


var addPost = function (user, text) {
  var postObject = {
    text: text,
    author: user,
    comments: []
  }
  posts.push(postObject);
};


var renderPosts = function () {
  $('#postsHTML').empty();

  //for loop to iterate through addposts
  for (let i = 0; i < posts.length; i++) {
    var post = posts[i];

    var commentsContainer = '<div class="comments-container">' + '<div class=comments-list></div>' +
      '<input type="text" class="comment-name" placeholder="Comment Text" required>' + '<input type="text" class="comment-user" placeholder="User Name" required><button class="btn btn-primary add-comment">Post Comment</button> </div>';

    $('#postsHTML').append('<div class="post">'
      + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
      commentsContainer + '<div> Posted By: <strong>' + post.author + '</strong></div> <hr/> </div> ');
  }
};

var renderComments = function () {
  $('.comments-list').empty();

  for (var i = 0; i < posts.length; i += 1) {
    // the current post in the iteration
    var post = posts[i];

    // finding the "post" element in the page that is equal to the
    // current post we're iterating on
    var $post = $('.posts').find('.post').eq(i);

    // iterate through each comment in our post's comments array
    for (var j = 0; j < post.comments.length; j += 1) {
      // the current comment in the iteration
      var comment = post.comments[j];

      // append the comment to the post we wanted to comment on
      $post.find('.comments-list').append(
        '<div class="comment">' + comment.text +
        ' Posted By: <strong>' + comment.name + ' </strong><a class="remove-comment"><i class="fa fa-times" aria-hidden="true"></i></a> ' +
        '</div>'
      );
    };
  };
};

var createComment = function (text, name, postIndex) {
  var comment = { text: text, name: name };

  // pushing the comment into the correct posts array
  posts[postIndex].comments.push(comment);
};

//event listener to grab new post inputs
$('#bPost').on('click', function () {
  
  var userName = $('.name').val();
  var userText = $('.postText')[0].value;

  //checking for blank inputs and not allowing them to post
  if (userName == "" || userText == "") {
    alert("Please enter a valid response")
  } else {
  addPost(userName, userText);
  renderPosts();
  }
});


//event listener for remove button
$('#postsHTML').on('click', '.remove', function (e) {
  var postIndex = $(e.currentTarget).closest('.post').index();
  posts.splice(postIndex, 1);
  renderPosts();
});

//event listener for create comment
$('#postsHTML').on('click', '.add-comment', function (e) {
  console.log('add comment clicked')
  var text = $(e.currentTarget).siblings('.comment-name').val();
  var name = $(e.currentTarget).siblings('.comment-user').val();

  // finding the index of the post in the page
  var postIndex = $(e.currentTarget).closest('.post').index();

  createComment(text, name, postIndex);
  renderComments();
});




