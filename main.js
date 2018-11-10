var $postButton = $('#post-button');
var $textInput = $('#message');
var $usernameInput = $('#name');
var $postsSection = $('#posts');
var source = $('#post-template').html();
var template = Handlebars.compile(source);
var posts = [];

//master unique id generators
var id = 0;
var commentId = 0;

//when post button is clicked, the user input text and name are built into a new post
$postButton.click(() => {
  newText = $textInput.val();
  newUsername = $usernameInput.val();
  id++;
  newPost = {
    postText: newText,
    username: newUsername,
    comments: [],
    id: id
  };
  posts.push(newPost);
  renderPosts();
})

//builds the top line of remove post & comments show/hide buttons
var createTopLine = (post => {
  var lineTemplate = '<div class="top-line"><a href="#" class="remove-post" data-post-id="' + post.id + '">remove </a><a href="#" class="comments-show-hide" data-post-id="post' + post.id + '">comments </a>'

  //remove the specific post when the remove link is clicked.
  var handleRemoveClick = function(e) {
    e.preventDefault();
    var removeId = $(this).data('post-id');
    posts = posts.filter(post => post.id !== removeId);
    renderPosts();
  }

  //show/hide the comments section by individual post.
  var toggleComments = function(e) {
    e.preventDefault();
    var postId = '#handlebars-' + $(this).data('post-id');
    $(postId).children('.comment-area').toggle();
    $commentArea.toggle();
  }

  //build the line and individually bind click handlers to each link
  var $topLine = $(lineTemplate);
  $topLine.on('click', '.remove-post', handleRemoveClick);
  $topLine.on('click', '.comments-show-hide', toggleComments);
  //return the line to the posting click handler to assemble with the post text
  return $topLine;
})

var createCommentLine = (post => {
  var commentTemplate = '<p><span class="comment-input-line"><input type="text" placeholder="Comment Text" class="comment-text"></input><input type="text" placeholder="User Name" class="comment-user"></input><button class="btn btn-sm btn-primary comment-button" type="button">Post Comment </button> </span>'

  // get the text & user name and build a new comment into the comment array on the correct post
  var postComment = function() {
    var idToSearch = $(this).closest('.single-post').attr('id');
    var postToComment = posts.find(post => "handlebars-post" + post.id === idToSearch);
    var postToCommentIndex = posts.indexOf(postToComment);
    var newCommentText = $(this).prevAll('.comment-text').val();
    var newCommentUser = $(this).prevAll('.comment-user').val();
    commentId++;
    var newComment = {
      commentText : newCommentText,
      commentUser : newCommentUser,
      commentId : commentId
    }
    posts[postToCommentIndex].comments.push(newComment);
    renderComments(postToComment);
    }

  var $commentLine = $(commentTemplate);
  $commentLine.on('click', '.comment-button', postComment);
  return $commentLine;
})

var createCommentRemovalIcon = function(index,comment) {
var commentRemovalTemplate = '<span class="glyphicon glyphicon-remove remove-comment" data-comment-id="' + comment.commentId + '"></span></p>';
  var removeComment = function() {
    var removeId = $(this).data('comment-id');
    posts[index].comments = posts[index].comments.filter(selectedComment => selectedComment.commentId !== comment.commentId);
    renderComments(posts[index]);
  }
  $commentRemovalIcon = $(commentRemovalTemplate);
  $commentRemovalIcon.on('click', removeComment);
  return $commentRemovalIcon;
}

//clear out the posts section and re-print the current status
var renderPosts = function() {
  $postsSection.empty();
  posts.forEach(post => {
    var $topLine = createTopLine(post);
    var newHTMLPost = template(post);
    $postsSection.append($topLine);
    $postsSection.append(newHTMLPost);
    renderComments(post);
  })
}

//clear out the comments and then re-print them for a particular post
var renderComments = function(post) {
  var commentAreaId = "#commentspost" + post.id;
  $(commentAreaId).empty();
  var source = $('#comment-template').html();
  var template = Handlebars.compile(source);
  var commentInput = createCommentLine(post);
  post.comments.forEach(comment => {
    var commentRemoval = createCommentRemovalIcon(posts.indexOf(post),comment);
    var newHTMLComment = template(comment);
    $(commentAreaId).append(newHTMLComment);
    $(commentAreaId).append(commentRemoval);
  })
  $(commentAreaId).append(commentInput);
};

//prevent enter from submitting
//sanitize inputs
//allow for editing posts
//render "separate" edit comments page
//style updates
