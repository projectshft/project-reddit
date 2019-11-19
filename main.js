// Array that stores in the users posts
var posts = [{ text: 'hello', name: 'dave', comments: [{ name: 'Dude', text: 'Sup' }] }];


//This function takes in users post info from text fields when clicked and pushes it to posts array 
var postButtonClicked = function () {
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
  drawPosts();

};

// This function appends posts and comments to the page for the user to see 
var drawPosts = function () {

  //This clears all posts and comments from the page so that there are no duplicates 
  $('.post-display').empty();

  for (var i = 0; i < posts.length; i++) {
    // This for loop cycles through all the posts and posts all of them to the page 
    // when it recieves a new post 
    var template = '<div class="postpara">';
    template += '  <button class=" btn btn-success show-comments" onclick = "toggleComments(' + i + ')">' + "comments" + '</button>';
    template += '   <button type="button" class="close closepost" aria-label="Close">'
    template += '    <span aria-hidden="true">&times;</span>'
    template += '     </button>'
    template += '  <div class="added-posts">' + posts[i].text + '</div>';
    template += '  <div class="pb-3 mt-4 mb-2 border-bottom">' + 'Posted By: ' + '<b>' + posts[i].name + '</b>' + '</div>';
    template += ' <form class="navbar-form navbar-left" id="config-comment" role="search">';
    template += '  <div class="form-group"></div>';
    template += ' <input type="text" class="comment-text" placeholder="Comment Text">';
    template += ' <input type="text" class="usernameInput" placeholder="Username">';
    template += '  <button type="button" class="btn btn-primary commentBtn-' + i + '"  onclick = "addCommentToPost(' + i + ')">Post Comment</button>';
    template += ' </form>';
    template += ' <div class="comments-container-' + i + '"></div>';
    template += '</div>';



    $('.post-display').append(template);
    //This for-loop cycles through all the comments and posts all of them to the page 
    //when it recieves a new comment 
    for (var j = 0; j < posts[i].comments.length; j++) {
      var templateComment = '<p class=commentBlock>' +
        '<button type="button" class="close closecomment" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        ' <div class="add-post"></div>' +
        '  <div class="added-post">' + posts[i].comments[j].text + '</div>' +
        '  <div class="pb-3 mt-4 mb-2 border-bottom">' + 'Comment By: ' + '<b>' + posts[i].comments[j].name + '</b>' + '</div>'; +
          '  <div class="container">'; +
            '</p>';

      $(`.comments-container-${i}`).append(templateComment);
    }
  }
};


// This function takes information from the comment fields and pushes it to the posts array 
// within the right post that it recieved a comment on
var addCommentToPost = function (postNumber) {

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
  drawPosts();
};



// function that resets form after submission
$(document).ready(function () {
  drawPosts();
  $("#postBtn").click(function (e) {
    e.preventDefault();
    postButtonClicked();
    $("#configform").trigger("reset");
  });

  // this function allows a user to close a particular post 
  $('.closepost').click(function () {
    var index = $(this).closest('.postpara').index();
    posts.splice(index, 1);
    drawPosts();
  });

  //This allows user to close a particular comment 
  $('.closecomment').click(function () {
    var postIndex = $(this).closest('.postpara').index();
    var commentIndex = $(this).closest(`.commentBlock`).index();
    posts[postIndex].comments.splice(commentIndex, 1);
    drawPosts();
  });
});

//This function allows the user to toggle to show or hide commemts for each post
var toggleComments = function (i) {
  console.log('click comments')
  $(`.comments-container-${i}`).toggle();

}


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
// toggle comments box show/hide
//delete a post----------------------check
