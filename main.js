
var posts = [];
var $postButton = $('.submit-post');
var $textInput = $('.post-text');
var $authorInput = $('.post-author');
var $posts = $('.posts');

//Add post to posts array
var addPost = function (author, content) {
  var postObj = {
    author: author,
    content: content,
    comments: []
  }
  posts.push(postObj);
}

//renders posts array to page
var renderPosts = function () {
  var postsHTML = posts.reduce(function (htmlString, post, index) {
    htmlString += '<div class="post" data-post="' + index.toString() + '"><p><span role="button" tabindex="0" class="remove-button remove-post">remove</span> <span role="button" tabindex="0" class="comments-button">comments</span> ' + post.content + ' - Posted By: ' + post.author + '</p>' + createCommentsHTML(index) + '<hr></div>';
    return htmlString;
  }, '<hr>')
  $posts.html(postsHTML);
}

//Updates page with new post
$postButton.on('click', function() {
  addPost($authorInput.val(), $textInput.val());
  renderPosts();
})

//Removes Post
$posts.on('click', '.remove-post', function(e) {
  var postNumber = $(e.target).closest('.post').data().post;
  posts.splice(postNumber,1);
  renderPosts();
})

// Removes Comment
$posts.on('click', '.remove-comment', function(e) {
  var postNumber = $(e.target).closest('.post').data().post;
  var commentNumber = $(e.target).data().comment;
  posts[postNumber].comments.splice(commentNumber,1);
  renderPosts();
})

var createCommentsHTML = function (postIndex) {
  var commentsHTML = '<div class="comments d-none">'
  commentsHTML += posts[postIndex].comments.reduce(function (htmlString, comment, index) {
    htmlString += '<p>'
      + '<span role="button" tabindex="0" class="remove-button remove-comment" data-comment="' + index + '">remove</span> '
      + comment.content + ' - Posted By: ' + comment.author
      + '</p>';
      return htmlString
  }, '')
  commentsHTML += '<div class="create-comment">'
    + '<input type="text" class="form-control comment-text" placeholder="Comment Text"/>'
    + '<br />'
    + '<input type="text" class="form-control comment-author" placeholder="Your Name"/>'
    + '<br />'
    + '<button class="btn btn-primary submit-comment">Submit Comment</button>'
    + '</div>'
    + '</div>';

  // var commentsHTML = '<div class="comments">'
  // + '<p>'
  // + '<span role="button" tabindex="0" class="remove-button remove-comment">remove</span>'
  // + 'Test Comment - Posted By: Bob'
  // + '</p>'
  // + '<div class="create-comment">'
  // + '<input type="text" class="form-control comment-text" placeholder="Comment Text"/>'
  // + '<br />'
  // + '<input type="text" class="form-control comment-author" placeholder="Your Name"/>'
  // + '<br />'
  // + '<button class="btn btn-primary submit-comment">Submit Comment</button>'
  // + '</div>'
  // + '</div>'
  return commentsHTML;
}

//Toggles comments display
//REfactor to utilize bootstrap instead of vanilla CSS
$posts.on('click', '.comments-button', function (e) {
  var $selectedPost = $(e.target).closest('.post');
  var $comments = $selectedPost.find('.comments');
  $comments.toggleClass('d-none')
  // if ($comments.css('display') === 'none') {
  //   $comments.css('display', 'block');
  // } else {
  //   $comments.css('display', 'none');
  // }
})

var addComment = function (author, content, postNum) {
  var commentObj = {
    author: author,
    content: content
  }
  posts[postNum].comments.push(commentObj);
}

//Updates page with new comment
$posts.on('click', '.submit-comment', function (e) {
  var postNumber = $(e.target).closest('.post').data().post;
  var $selectedPost = $(e.target).closest('.post')
  addComment($selectedPost.find('.comment-author').val(), $selectedPost.find('.comment-text').val(), postNumber);
  renderPosts();
})