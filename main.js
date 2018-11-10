var fullPagePostSource = $('#full-page-post-section').html();
var fullPagePostTemplate = Handlebars.compile(fullPagePostSource);
var $commentsDisplaySection = $('#comments');
var posts = [];

//master unique id generators
var id = 0;
var commentId = 0;

//when post button is clicked, the user input text and name are built into a new post
$('#post-button').click(() => {
  newText = $('#message').val();
  newUsername = $('#name').val();
  id++;
  newPost = {
    postText: newText,
    username: newUsername,
    comments: [],
    id: id
  };
  posts.push(newPost);
  renderPosts();
  $('#message').val("");
  $('#name').val("");
})

//builds the top line for each post with remove post & comments show/hide links
var createTopLine = (post => {
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
    var postId = '#single-' + $(this).data('post-id');
    $(postId).children('.comment-area').toggle();
  }

  //allow a user to edit the post & username by individual post
  var handleEditClick = function(e) {
    e.preventDefault();
    //$(this).parent().parent().show();
    $(this).nextAll('.edit-section').show();
    //('.edit-input').show();
    var $editMessageInput = $(this).nextAll('.edit-section').children('.edit-message');
    var $editUserInput = $(this).nextAll('.edit-section').children('.edit-user');
    var $editButton = $(this).nextAll('.edit-section').children('.edit-button');
    //identify the correct post to edit
    var postToEdit = posts.find(post => 'post' + post.id === $(this).data('post-id'));

    //pre-fill the current values into the inputs
    $editMessageInput.val(postToEdit.postText);
    $editUserInput.val(postToEdit.username);

    //when the user clicks to submit changes, update the values, hide the section, & re-render
    $editButton.click(function() {
      postToEdit.postText = $editMessageInput.val();
      postToEdit.username = $editUserInput.val();
      $(this).hide();
      renderPosts();
    })
  }

  var handleFullPageClick = function(e) {
    e.preventDefault();
    //identify the specific post to render
    var postToDisplay = posts.find(post => 'post' + post.id === $(this).data('post-id'));
    var $fullMainPage = $('.full-main-page');
    var $fullCommentsPage = $('.full-comments-page');
    var $fullPagePost = $(fullPagePostTemplate(postToDisplay));
    $commentsDisplaySection.append($fullPagePost);
    renderCommentLinesOnly(postToDisplay,$commentsDisplaySection);
    //hide the original page and show the comments page
    $fullMainPage.hide();
    $fullCommentsPage.show();
    //clear out the comments section, hide the comments page, & show the original page
    $('#back-link').click(function(e) {
      e.preventDefault();
      $commentsDisplaySection.empty();
      $fullMainPage.show();
      $fullCommentsPage.hide();
      renderPosts();
    })
    $('#post-comment-button').click(function() {
      var newCommentText = $('#new-comment-message').val();
      var newCommentUser = $('#new-comment-name').val();
      commentId++;
      var newComment = {
        commentText : newCommentText,
        commentUser : newCommentUser,
        commentId : commentId
      }
      postToDisplay.comments.push(newComment);
      $commentsDisplaySection.empty();
      $commentsDisplaySection.append($fullPagePost);
      renderCommentLinesOnly(postToDisplay,$commentsDisplaySection);
      $('#new-comment-message').val("");
      $('#new-comment-name').val("");
    })

  }

  //build the line from the handlebars template
  var topLineSource = $('#top-line-template').html();
  var topLineTemplate = Handlebars.compile(topLineSource);
  var $topLine = $(topLineTemplate(post));

  //individually bind click handlers to each link
  $topLine.on('click', '.remove-post', handleRemoveClick);
  $topLine.on('click', '.comments-show-hide', toggleComments);
  $topLine.on('click', '.edit-post', handleEditClick);
    $topLine.on('click', '.full-page-view', handleFullPageClick);

  //return the line to the posting click handler to assemble with the post text
  return $topLine;
})

// get the text & user name and build a new comment into the comment array, along with pushing the comment input to the bottom
var createCommentLine = (post => {
  //update the posts array with the new comment
  var postComment = function() {
    //find the correct post and get its index
    var idToSearch = $(this).closest('.single-post').attr('id');
    var postToComment = posts.find(post => "single-post" + post.id === idToSearch);
    var postToCommentIndex = posts.indexOf(postToComment);
    //build the new comment object with the values in the inputs
    var newCommentText = $(this).prevAll('.comment-text').val();
    var newCommentUser = $(this).prevAll('.comment-user').val();
    commentId++;
    var newComment = {
      commentText : newCommentText,
      commentUser : newCommentUser,
      commentId : commentId
    }
    //add it to the correct posts and then render the comments on that post
    posts[postToCommentIndex].comments.push(newComment);
    renderComments(postToComment);
  }
  //build the comment input section to put under the newest comment and return it to append
  var commentInputSource = $('#comment-input-template').html();
  var commentInputTemplate = Handlebars.compile(commentInputSource);
  var $commentLine = $(commentInputTemplate());
  //individually bind the post comment button to the right post and return it to be rendered
  $commentLine.on('click', '.comment-button', postComment);
  return $commentLine;
})

//create the comment removal icon for each post
var createCommentRemovalIcon = function(index,comment) {

  //find the correct post and filter it out of the comments array
  var removeComment = function() {
    var removeId = $(this).data('comment-id');
    posts[index].comments = posts[index].comments.filter(commentToRemove => commentToRemove.commentId != comment.commentId);
    if ($('.full-main-page').css('display') === 'none') {
      var $fullPagePost = $(fullPagePostTemplate(posts[index]));
      $commentsDisplaySection.empty();
      $commentsDisplaySection.append($fullPagePost);
      renderCommentLinesOnly(posts[index],$commentsDisplaySection);
    } else {
    renderComments(posts[index]);
  }
  }
  //build the comment removal icon, bind the click listener, and return it to be rendered
  var commentRemovalIconSource = $('#comment-removal-icon-template').html();
  var commentRemovalIconTemplate = Handlebars.compile(commentRemovalIconSource);
  var $commentRemovalIcon = $(commentRemovalIconTemplate(comment));
  $commentRemovalIcon.on('click', removeComment);
  return $commentRemovalIcon;
}

//clear out the posts section and re-print the current status
var renderPosts = function() {
  var $postsSection = $('#posts');
  $postsSection.empty();
  var postSource = $('#post-template').html();
  var postTemplate = Handlebars.compile(postSource);
  //build each post out of a top line followed by the post text and author, then render the comments for it
  posts.forEach(post => {
    var $topLine = createTopLine(post);
    var newPost = postTemplate(post);
    $postsSection.append($topLine);
    $postsSection.append(newPost);
    renderComments(post);
  })
}

//clear out the comments and then re-print them for a particular post
var renderComments = function(post) {
  //grab the matching post and clear the comments section
  var $commentAreaId = $("#comments-post" + post.id);
  $commentAreaId.empty();
  //build the comment template and then render each comment with its removal icon
  renderCommentLinesOnly(post,$commentAreaId);
  //add a comment input section at the bottom of all the comments
  var commentInput = createCommentLine(post);
  $commentAreaId.append(commentInput);
};

var renderCommentLinesOnly = function (post, sectionToAppend) {
  var commentSource = $('#comment-template').html();
  var commentTemplate = Handlebars.compile(commentSource);
  post.comments.forEach(comment => {
    var newComment = commentTemplate(comment);
    var commentRemoval = createCommentRemovalIcon(posts.indexOf(post),comment);
    sectionToAppend.append(newComment);
    sectionToAppend.append(commentRemoval);
  })
}

//prevent enter key from submitting the form so it doesn't send a query & refresh
$('form').on('keypress', function(e) {
    if (event.keyCode === 13) {
        e.preventDefault();
    }
})

//sanitize inputs
//style updates
