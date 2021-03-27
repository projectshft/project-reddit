
var posts = [];
var $postButton = $('.submit-post');
var $textInput = $('.post-text');
var $authorInput = $('.post-author');
var $posts = $('.posts');
var $individualPost = $('.individual-post');

//Add post to posts array
var addPost = function (author, content) {
  var postObj = {
    author: author,
    content: content,
    comments: []
  }
  posts.push(postObj);
}

//Removes Post from Array
var removePost = function (postNumber) {
  posts.splice(postNumber,1);
}

//Edits post in post array
var editPost = function (newContent, postNum) {
  posts[postNum].content = newContent;
}

//Adds comment to posts array
var addComment = function (author, content, postNum) {
  var commentObj = {
    author: author,
    content: content
  }
  posts[postNum].comments.push(commentObj);
}

//Renders page with all posts or individual post
var renderPage = function (postNumber = -1) {
  if(postNumber === -1) {
    renderAllPosts();
  } else {
    renderPost(postNumber)
  }
}

//Renders all posts in post array
var renderAllPosts = function () {
  $('.page-title').toggleClass('d-none', false);
  $('.create-post').toggleClass('d-none', false);
  $posts.toggleClass('d-none', false);
  $individualPost.toggleClass('d-none', true);
    var postsHTML = posts.reduce(function (htmlString, post, index) {
  htmlString += `<div class="post" data-post="${index.toString()}">
    <div class="main-post" role="button">
    <p class="my-1">
    <button type="button" class="close remove-post" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <a class="edit-button" href="#" role="button">edit</a> 
    ${post.content} - Posted By: ${post.author} - ${post.comments.length} comments</p>
    </div>
    <div class="create-edit d-none mb-3">
    <input type="text" class="form-control edit-content" placeholder="Edited Post"/><br />
    <button class="btn btn-primary submit-edit">Edit Post</button>
    </div>
    <hr></div>`
    return htmlString;
  }, '<hr>')
  $posts.html(postsHTML);
}

//Renders page with only selected post
var renderPost = function (postNum) {
  $('.page-title').toggleClass('d-none', true);
  $('.create-post').toggleClass('d-none', true);
  $posts.toggleClass('d-none', true);
  $individualPost.toggleClass('d-none', false);
    var postsHTML = `<hr><div class="post" data-post="${postNum.toString()}">
      <h2>${posts[postNum].content} - Posted By: ${posts[postNum].author}</h2>
      <p class="my-1">
      <a class="remove-post" href="#" role="button">remove</a> 
      <a class="edit-button" href="#" role="button">edit</a> 
      <div class="create-edit d-none mb-3">
      <input type="text" class="form-control edit-content" placeholder="Edited Post"/><br />
      <button class="btn btn-primary submit-edit">Edit Post</button>
      </div>
      <p class="mb-1">${posts[postNum].comments.length} comments:</p>
      ${createCommentsHTML(postNum)}
      <hr>
      <button class="btn btn-primary main-page-return">Go Back to Main Page</button>
      <button class="btn btn-primary add-comment">Add Comment</button>
      </div>`
  $individualPost.html(postsHTML);
}

//Creates HTML for comments section
var createCommentsHTML = function (postIndex) {
  var commentsHTML = '<div class="comments">'
  commentsHTML += posts[postIndex].comments.reduce(function (htmlString, comment, index) {
    htmlString += `<p class="my-1">
      <button type="button" class="close remove-comment" data-comment="${index}" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      ${comment.content} - Posted By: ${comment.author}
      </p>`;
    return htmlString;
  }, '')
  commentsHTML += `<div class="create-comment d-none">
    <input type="text" class="form-control comment-text" placeholder="Comment Text"/><br />
    <input type="text" class="form-control comment-author" placeholder="Your Name"/><br />
    <button class="btn btn-primary submit-comment">Submit Comment</button>
    </div></div>`;
  return commentsHTML;
}

//Updates page with new post
$postButton.on('click', function() {
  //Only creates new post if user has actually filled out both boxes
  if($authorInput.val() && $textInput.val()) {
    addPost($authorInput.val(), $textInput.val());
    renderPage();
    $authorInput.val('');
    $textInput.val('');
  }
})

//Toggles Edits display
$posts.on('click', '.edit-button', function (e) {
  var $selectedPost = $(e.target).closest('.post');
  var $editSection = $selectedPost.find('.create-edit');
  e.stopPropagation();
  $editSection.toggleClass('d-none')
})

//Updates Page with Edited Post
$posts.on('click', '.submit-edit', function (e) {
  var postNumber = $(e.target).closest('.post').data().post;
  var $selectedPost = $(e.target).closest('.post');
  editPost($selectedPost.find('.edit-content').val(), postNumber);
  renderPage();
})

//Removes post upon clicking x
$posts.on('click', '.remove-post', function(e) {
  var postNumber = $(e.target).closest('.post').data().post;
  removePost(postNumber)
  e.stopPropagation();
  renderPage();
})

// Changes page to displaying individual post on click
$posts.on('click', '.main-post', function (e) {
  var postNumber = parseInt($(e.target).closest('.post').data().post);
  renderPage(postNumber)
})

//Returns to Main Page displaying all posts
$individualPost.on('click', '.main-page-return', function (e) {
  renderPage();
})

//Toggles Edit Post option (single post display)
$individualPost.on('click', '.edit-button', function (e) {
  var $clickedElement = $(e.target);
  var $selectedPost = $clickedElement.closest('.post');
  $selectedPost.find('.create-edit').toggleClass('d-none');
})

//Edits post (single post display)
$individualPost.on('click', '.submit-edit', function (e) {
  var $clickedElement = $(e.target);
  var $selectedPost = $clickedElement.closest('.post');
  var postNumber = parseInt($selectedPost.data().post);
  editPost($selectedPost.find('.edit-content').val(), postNumber);
  renderPage(postNumber);
})

//Removes Post (Single post display)
$individualPost.on('click', '.remove-post', function (e) {
  var $clickedElement = $(e.target);
  var $selectedPost = $clickedElement.closest('.post');
  var postNumber = parseInt($selectedPost.data().post);
  removePost(postNumber);
  renderPage();
})

//Toggles add comment inputs
$individualPost.on('click', '.add-comment', function (e) {
  var $clickedElement = $(e.target);
  var $selectedPost = $clickedElement.closest('.post');
  $selectedPost.find('.create-comment').toggleClass('d-none');
})

//Adds new comment
$individualPost.on('click', '.submit-comment', function (e) {
  var $clickedElement = $(e.target);
  var $selectedPost = $clickedElement.closest('.post');
  var postNumber = parseInt($selectedPost.data().post);
  addComment($selectedPost.find('.comment-author').val(), $selectedPost.find('.comment-text').val(), postNumber);
  renderPage(postNumber);
})

// Removes Comment
$individualPost.on('click', '.remove-comment', function(e) {
  var $clickedElement = $(e.target);
  var $selectedPost = $clickedElement.closest('.post');
  var postNumber = parseInt($selectedPost.data().post);
  var commentNumber = $clickedElement.closest('.remove-comment').data().comment;
  posts[postNumber].comments.splice(commentNumber, 1);
  renderPage(postNumber);
})