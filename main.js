//master array which holds all posts and comments data
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
  //empty the input boxes to prepare for the next post
  $('#message').val("");
  $('#name').val("");
})

//builds the top line for each post with remove, comments show/hide, edit, & full page view links
var createTopLine = (post => {

  //remove the post with a matching id when the remove link is clicked.
  var handleRemoveClick = function(e) {
    e.preventDefault();
    var removeId = $(this).data('post-id');
    posts = posts.filter(post => post.id !== removeId);
    renderPosts();
  }

  //show/hide the comments section & input area by individual post.
  var toggleComments = function(e) {
    e.preventDefault();
    var postId = '#single-' + $(this).data('post-id');
    $(postId).children('.comment-area').toggle();
  }

  //allow a user to edit the post & username by individual post
  var handleEditClick = function(e) {
    e.preventDefault();
    //show the section corresponding to the clicked post and get the correct inputs
    $(this).nextAll('.edit-section').show();
    var $editMessageInput = $(this).nextAll('.edit-section').children('.edit-message');
    var $editUserInput = $(this).nextAll('.edit-section').children('.edit-user');
    var $editButton = $(this).nextAll('.edit-section').children('.edit-button');

    //identify the correct post to edit in the array and then pre-fill those values
    var postToEdit = posts.find(post => 'post' + post.id === $(this).data('post-id'));
    $editMessageInput.val(postToEdit.postText);
    $editUserInput.val(postToEdit.username);

    //when the user submits changes: update the values, hide the section, & re-render
    $editButton.click(function() {
      postToEdit.postText = $editMessageInput.val();
      postToEdit.username = $editUserInput.val();
      $(this).hide();
      renderPosts();
    })
  }

  var handleFullPageClick = function(e) {
    e.preventDefault();
    //identify the specific post to render & the page divs to toggle in and out
    var postToDisplay = posts.find(post => 'post' + post.id === $(this).data('post-id'));
    var $fullMainPage = $('.full-main-page');
    var $fullCommentsPage = $('.full-comments-page');

    //hide the main page & show the comments page, then render the single post
    $fullMainPage.hide();
    $fullCommentsPage.show();
    renderSinglePostPage(postToDisplay);

    // when a user goes back, hide the post & comments page and show the main page
    $('#back-link').click(function(e) {
      e.preventDefault();
      //turn off the button listener because it will be re-added each time
      $('#post-comment-button').off();
      //clear out the comments section
      $('#comments').empty();
      $fullMainPage.show();
      $fullCommentsPage.hide();
      renderPosts();
    })

    //when a user posts a comment, it will render on the current page & will be stored with its post
    $('#post-comment-button').on('click', function() {
      var newCommentText = $('#new-comment-message').val();
      var newCommentUser = $('#new-comment-name').val();
      //add the comment to the posts array, then re-render so it displays
      addNewComment(postToDisplay, newCommentText, newCommentUser);
      renderSinglePostPage(postToDisplay);
      //empty the input boxes to prepare for the next comment
      $('#new-comment-message').val("");
      $('#new-comment-name').val("");
    })
  }

  //build the top line for a post from the handlebars template
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

// create the comment line for the main page
var createCommentInputLine = (post => {

  //update the posts array with the new comment
  var postComment = function() {
    //find the correct post and get its index
    var idToSearch = $(this).closest('.single-post').attr('id');
    var postToComment = posts.find(post => "single-post" + post.id === idToSearch);
    var postToCommentIndex = posts.indexOf(postToComment);
    //build and add the new comment object, then display all comments
    var newCommentText = $(this).prevAll('.comment-text').val();
    var newCommentUser = $(this).prevAll('.comment-user').val();
    addNewComment(posts[postToCommentIndex], newCommentText, newCommentUser);
    renderComments(postToComment);
  }

  //build the comment input section to put under the newest comment
  var commentInputSource = $('#comment-input-template').html();
  var commentInputTemplate = Handlebars.compile(commentInputSource);
  var $commentInputLine = $(commentInputTemplate());

  //individually bind the post comment button to the right post and return it to be rendered
  $commentInputLine.on('click', '.comment-button', postComment);
  return $commentInputLine;
})

//create the comment removal icon for each post
var createCommentRemovalIcon = function(index, comment) {

  //find the correct post and filter it out of the comments array
  var removeComment = function() {
    var removeId = $(this).data('comment-id');
    posts[index].comments = posts[index].comments.filter(commentToRemove => commentToRemove.commentId != comment.commentId);

    //re-render the comments for the correct page - either single post or all posts
    if ($('.full-main-page').css('display') === 'none') {
      renderSinglePostPage(posts[index]);
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

//add a new comment into the posts array at the selected post with a unique ID
var addNewComment = function(post, newCommentText, newCommentUser) {
  commentId++;
  var newComment = {
    commentText: newCommentText,
    commentUser: newCommentUser,
    commentId: commentId
  }
  //add it to the correct posts and then render the comments on that post
  post.comments.push(newComment);
}

//clear out the posts section on the main page and re-render it with updates
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

//main page: clear out the comments and then render them for a particular post
var renderComments = function(post) {
  var $commentAreaId = $("#comments-post" + post.id);
  $commentAreaId.empty();
  //build the comment template and then render each comment with its removal icon
  renderCommentLines(post, $commentAreaId);
  //add a comment input line at the bottom of all the comments
  var commentInput = createCommentInputLine(post);
  $commentAreaId.append(commentInput);
};

//render the full single post & comments page
var renderSinglePostPage = function(post, ) {
  var fullPagePostSource = $('#full-page-post-section').html();
  var fullPagePostTemplate = Handlebars.compile(fullPagePostSource);
  var $commentsDisplaySection = $('#comments');
  var $fullPagePost = $(fullPagePostTemplate(post));
  $commentsDisplaySection.empty();
  $commentsDisplaySection.append($fullPagePost);
  renderCommentLines(post, $commentsDisplaySection);
}

//build a comment line with a removal icon for each comment on the post
var renderCommentLines = function(post, sectionToAppend) {
  var commentSource = $('#comment-template').html();
  var commentTemplate = Handlebars.compile(commentSource);
  post.comments.forEach(comment => {
    var newComment = commentTemplate(comment);
    var commentRemoval = createCommentRemovalIcon(posts.indexOf(post), comment);
    sectionToAppend.append(newComment);
    sectionToAppend.append(commentRemoval);
  })
}
