//create empty posts array
var posts = [
  // { 
  //   text: 'hey', 
  //   author: 'bob', 
  //   comments: [
  //     { text: 'oh hi', author: 'linda'},
  //     { text: 'oh hi', author: 'linda'}
  //   ]
  // },
  // { 
  //   text: 'hey', 
  //   author: 'bob', 
  //   comments: [
  //     { text: 'oh hi', author: 'linda'},
  //     { text: 'oh hi', author: 'linda'}
  //   ]
  // },
]
var $posts = $('.posts');

var addPost = function (user, text) {
  var postObject = {
    text: text,
    author: user
  }
  posts.push(postObject);
};


var renderPosts = function () {
  $('#postsHTML').empty();

  //for loop to iterate through addposts
  for (let i = 0; i < posts.length; i++) {
    var post = posts[i];

    var commentsContainer = '<div class="comments-container">' + '<div class=comments-list></div>' +
      '<input type="text" class="comment-name" placeholder="Comment Text">' + '<input type="text" class="comment-user" placeholder="User Name"><button class="btn btn-primary add-comment">Post Comment</button> </div>';

    $('#postsHTML').append('<div class="post">'
      + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
      commentsContainer + '<div> Posted By: <strong>' + post.author + '</strong></div> <hr/> </div> ');
  }
};



var HTMLcomments = function () {
  $('#commentsHTML').append(HTMLcomments);
}

var HTMLremove= function () {
  $('#removeHTML').append(HTMLremove);
}


//event listener to grab new post inputs
$('#bPost').on('click', function () {

  var userName = $('.name').val();

  var userText = document.getElementsByClassName('postText')[0].value;
  
  // if userName = null || userText = null  {
  //   return "Please enter a valid response"
  // }
  // else {
  

  addPost(userName, userText);
  renderPosts();
});


//event listener for remove button
$('#postsHTML').on('click', '.remove', function (e) {
  var postIndex = $(e.currentTarget).closest('.post').index();

  posts.splice(postIndex, 1);

  renderPosts();
});

//event listener for comments button
$('#postsHTML').on('click', '.bComments', function() {
  postsHTML.innerHTML
  console.log("You clicked comments")
});

renderPosts();
// renderComments();

