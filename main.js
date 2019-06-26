var PostList = function() {
  // Array for all of the posts to be held in and manipulated
  var posts = [];

  // Template for creating posts, each post is contained in a post-item class div
  var postTemplate = function(p) {
    var pTemplate =
      '<div class="post-item">' +
      '<p>' + '<a class="remove-post" href="#">' + 'Remove  ' + '</a>' +
      '<a class="comment-toggle" href="#">' + 'Comments  ' + '</a> ' + 'Message: ' + p.text + '</p>' +
      '<p>Posted by: ' + p.name + '</p>' +
      '<div class="comments hide">' + '</div>' +
      '<div class = "comment-input hide">' + '<input name="comment-name" type="text" placeholder="User Name"></input>' +
      '<input name="comment-message" type="text" placeholder="Comment Text"></input>' +
      '<button type="button" class="btn btn-primary comment-button">Post</button>' +
      '</div>' +
      '</div>' +
      '<hr>';
    return pTemplate;
  }

  //Template for adding comments to posts
  var commentTemplate = function(c) {
    var cTemplate =
      '<div class="comment-item"><p>' + c.text +
      ' Posted by: ' + c.name +
      '   <a class="remove-comment" href="#"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></p></div>';
    return cTemplate;
  }

  //Function to render the posts which will also render the comments for each post
  var renderPosts = function() {
    $('.posts').empty();
    posts.forEach(function(post, index) {
      $('.posts').append(postTemplate(post));
      renderComments(index);
    })

  }

  //Function only for use by my remove functions that creates a new array
  //By removing the item at the index passed into the function.  Making a generic
  //function because I will be removing both posts and comments.
  var _removeItem = function(array, arrayIndex) {
    var tempArray1 = array.slice(0, arrayIndex);
    var tempArray2 = array.slice(arrayIndex+1, array.length);
    //Using the ES6 spread operator to combine my arrays
    tempArray1.push(...tempArray2);
    return tempArray1;
  }


  //Renders the comment for the post at the specified index, doesnt have
  //to rebuild the entire page
  var renderComments = function(postIndex) {
    $('.comments').eq(postIndex).empty();
    posts[postIndex].comments.forEach(function(c) {
      $('.comments').eq(postIndex).append(commentTemplate(c));
    })
  }

  //Function to add a post to the posts array when the button is clicked
  var addPost = function(name, text) {
    var post = {
      name: name,
      text: text,
      comments: [],
    }
    posts.push(post);
    renderPosts();
  }

  //Function for removing posts using my _removeItem function
  var removePost = function(postIndex) {
    posts = _removeItem(posts, postIndex);
    renderPosts();
  }

  //Function for removing comments using my _removeItem function
  var removeComment = function(postIndex, commentIndex) {
    posts[postIndex].comments = _removeItem(posts[postIndex].comments, commentIndex);
    renderComments(postIndex);
  }

  //Function to add a comment to the posts at the specified post index
  var addComment = function(name, text, postIndex) {
    var comment = {
      name: name,
      text: text,
    }
    posts[postIndex].comments.push(comment);
    renderComments(postIndex);
  }

  //All the returns needed for functionality outside of the PostList
  return {
    removePost: removePost,
    removeComment: removeComment,
    addPost: addPost,
    addComment: addComment
  }
}

var postObject = PostList();
var $postButton = $('.post-button');
var $body = $('body');

//Event listener for creating a post
$postButton.on('click', function() {
  var $name = $('#name').val();
  var $msg = $('#message').val();
  //Checks to make sure both the name and the message field have values
  if ($name !== '' && $msg !== '') {
    postObject.addPost($name, $msg);
    //Resets the text boxes to blank
    $('#name').val('');
    $('#message').val('');
  } else {
    alert('Please enter both a name and message in your post');
  }
});

//Event listener for hiding and showing both the comments and the input text boxes / button
$body.on('click', '.comment-toggle', function() {
  $(this).closest('.post-item').children('.comments').toggleClass('hide');
  $(this).closest('.post-item').children('.comment-input').toggleClass('hide');
});

//Event listener for adding a comment
$body.on('click', '.comment-button', function() {
  var $cName = $(this).closest('.comment-input').children('input[name="comment-name"]').val();
  var $cMsg = $(this).closest('.comment-input').children('input[name="comment-message"]').val();
  var index = $(this).closest('.post-item').index('.post-item');
  //Checks for the comment name and message being populated
  if ($cName !== '' && $cMsg !== '') {
    postObject.addComment($cName, $cMsg, index);
    $(this).closest('.comment-input').children('input[name="comment-name"]').val('');
    $(this).closest('.comment-input').children('input[name="comment-message"]').val('');
  } else {
    alert('Please enter both a name and message in your comment');
  }
})

//Event listener that removes a post at the specified index
$body.on('click', '.remove-post', function() {
  var index = $(this).closest('.post-item').index('.post-item');
  postObject.removePost(index);
})

//Event listener that removes a comment at the specified index
$body.on('click', '.remove-comment', function() {
  var postIndex = $(this).closest('.post-item').index('.post-item');
  var commentIndex = $(this).closest('.comment-item').index('.comment-item');
  postObject.removeComment(postIndex, commentIndex);
})
