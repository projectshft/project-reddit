// Array that stores in the users posts
var posts = [{ text: 'We landed on the moon', name: 'Harry', comments: [{ name: 'We did it!', text: 'Lloyd' }] }];

//This function takes in users post info from text fields when clicked and pushes it to posts array 
var postInput = function () {
  var $postText = $('#postText').val();

  if ($postText.length < 1) {
    alert('Please enter a new post')
    return false;
  };

  var $yourName = $('#your-name').val();

  if ($yourName.length < 1) {
    alert('Please enter your name')
    return false;
  };

  //This pushes new posts to the posts array 
  posts.push({ text: $postText, name: $yourName, comments: [] });
  renderPosts();
};

// This function appends posts and comments to the page for the user to see 
var renderPosts = function () {

  //This clears all posts and comments from the page so that there are no duplicates 
  $('.post-display').empty();

  for (var i = 0; i < posts.length; i++) {
    
    // This for loop cycles through all the posts and posts all of them to the page 
    // when it recieves a new post
    var postTemplate ='<div class="postpara">';
    postTemplate += '<button class=" btn btn-success show-comments" onclick = "toggleComments(' + i + ')">' + "comments" + '</button>';
    postTemplate += '<button type="button" class="close closepost" aria-label="Close">'
    postTemplate += '<span aria-hidden="true">&times;</span>' + '</button>';
    postTemplate += '<div class="added-posts">' + posts[i].text + '</div>';
    postTemplate += '<div class="pb-3 mt-4 mb-2 border-bottom">' + 'Posted By: ' + '<b>' + posts[i].name + '</b>' + '</div>';
    postTemplate += '<form class="navbar-form navbar-left" id="config-comment" role="search">';
    postTemplate += '<div class="form-group"></div>' + '<input type="text" class="comment-text" placeholder="Comment Text">';
    postTemplate += '<input type="text" class="usernameInput" placeholder="Username">';
    postTemplate += '<button type="button" class="btn btn-primary commentBtn-' + i + '"  onclick = "commentInput(' + i + ')">Post Comment</button>' + '</form>';
    postTemplate += '<div class="comments-container-' + i + '"></div>';
    postTemplate += '</div>';


    $('.post-display').append(postTemplate);
    //This for-loop cycles through all the comments and posts all of them to the page 
    //when it recieves a new comment 
    for (var j = 0; j < posts[i].comments.length; j++) {

      var commentTemplate = '<div class=commentBlock>' +
        '<button type="button" class="close closecomment" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '<div class="added-post">' + posts[i].comments[j].text + '</div>' +
        '<div class="pb-3 mt-4 mb-2 border-bottom">' + 'Comment By: ' + '<b>' + posts[i].comments[j].name + '</b>' + '</div>'; +
        '<div class="container">'; +
        '</div>';

      $(`.comments-container-${i}`).append(commentTemplate);
    }
  }
};


// This function takes information from the comment fields and pushes it to the posts array 
// within the right post that it recieved a comment on
var commentInput = function (postNumber) {

  var $commentText = $(`.commentBtn-${postNumber}`).siblings('.comment-text').val();

  if ($commentText.length < 1) {
    alert('Please enter text')
    return false;
  };

  var $usernameInput = $(`.commentBtn-${postNumber}`).siblings('.usernameInput').val();

  if ($usernameInput.length < 1) {
    alert('Please enter username')
    return false;

  };
  var comment = { name: $usernameInput, text: $commentText };
  posts[postNumber].comments.push(comment);
  renderPosts();
};


renderPosts();

// function that resets form after submission and listens for added posts 
$("#postBtn").click(function (e) {
  e.preventDefault();
  postInput();
  $("#configform").trigger("reset");
});

// this function allows a user to close a particular post 
$('.post-display').on('click', '.closecomment', function () {
  var postIndex = $(this).closest('.postpara').index();
  var commentIndex = $(this).closest(`.commentBlock`).index();
  posts[postIndex].comments.splice(commentIndex, 1);
  renderPosts();
});

$('.post-display').on('click', '.closepost', function () {
  var index = $(this).closest('.postpara').index();
  posts.splice(index, 1);
  renderPosts();
});

//This function allows the user to toggle to show or hide comments for each post
var toggleComments = function () {
  $(`.commentBlock`).toggle();
};


//HTML + CSS ------------------------check
// Add a post------------------------check
//click function on post button -----check
// collect values from form ---------check
//put values in a posts array -------check
//clear text boxes ------------------check
// display posts---------------------check
//add comment to post----------------check
// display comments------------------check
//delete a comment-------------------check
// toggle comments box show/hide-----check
//delete a post----------------------check
