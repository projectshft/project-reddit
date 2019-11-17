// Array that stores in the users posts
var posts = [];

//Function that takes in users post info from text fields when clicked and alerts user if fields are empty
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


  posts.push({ text: $postText, name: $yourName, comments: [] });
  drawPosts();
  //Variables that are able to take in and display the data that was previously stored in the array

  //This invokes the template variable and prepends the data to the site

};


var drawPosts = function () {

  $('.post-display').empty();

  for (var i = 0; i < posts.length; i++) {

    var template = '<div class="postpara">';
    template += '   <button type="button" class="close closepost" aria-label="Close">'
    template += '    <span aria-hidden="true">&times;</span>'
    template += '     </button>'
    template += '  <div class="added-posts">' + posts[i].text + '</div>';
    template += '  <div class="pb-3 mt-4 mb-2 border-bottom">' + 'Posted By: ' + '<b>' + posts[i].name + '</b>' + '</div>';
    template += ' <form class="navbar-form navbar-left" id="config-comment" role="search">';
    template += '  <div class="form-group"></div>';
    template += ' <input type="text" class="comment-text" placeholder="Comment Text">';
    template += ' <input type="text" class="usernameInput" placeholder="Username">';
    template += '  <button type="button" class="btn btn-primary" id="commentBtn">Post Comment</button>';
    template += ' </form>';
    template += ' <div class="comments-container"></div>';
    template += '</div>';



    $('.post-display').append(template);

    for (var j = 0; j < posts.comments; j++) {
      var templateComment = '<p>' +
        '<button type="button" class="close" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        ' <div class="add-post"></div>' +
        '  <div class="added-post">' + commentText + '</div>' +
        '  <div class="pb-3 mt-4 mb-2 border-bottom">' + 'Posted By: ' + '<b>' + usernameInput + '</b>' + '</div>'; +
          '  <div class="container">'; +
            '</p>';

      $addCommentFormElement.find('.comments-container').append(templateComment);
      drawPosts();

    }
  }
  // get a reference to the comment container 

};
//function for add comment events

var addCommentToPost = function () {
  // #TODO: Add comment to post in post array 
  $('.post-display').empty();

  var comment = { name: usernameInput, text: commentText };

  // var commentText = $addCommentFormElement.find$('.comment-text').val();
  var $commentText = $('.comment-text').val();

  if ($commentText.length < 1) {
    alert('Please enter text')
    return false;
  };

  // var usernameInput = $addCommentFormElement.find('.usernameInput').val();
  var $usernameInput = $('.usernameInput').val();
  
  if ($usernameInput.length < 1) {
    alert('Please enter username')
    return false;
  };


  // $('#commentBtn').click(function () {
  //   posts.comments.push(comment);
  //   drawPosts();
  // })

  var clicked = function () {
    posts[0].comments.push({ comment });
    drawPosts();
  }
  $('#commentBtn').click(clicked);

  //figure out what post this comment is on
  //add new comment object to posts[whateverpostnum].comments
  //draw posts



  // $clickedPost.find('.comments-container').push(templateComment).comment;


  // $('.post-display').find('.postpara').eq(i).find('.comments-container').append()




  $('.closepost').click(function () {
    var index = $(this).closest('.postpara').index();
    posts.splice(index, 1);
    drawPosts();
  });



  // Click listener that invokes postButtonClicked function when click is heard



  $('.post-display').on('click', $('#commentBtn'), function (e) {
    e.preventDefault();
    var $clickedCommentButton = $(e.currentTarget);
    //   console.log('click');


    //collapses the closet comment post to the click button 
    var $addCommentFormElement = $clickedCommentButton.closest('#config-comment');
    addCommentToPost($addCommentFormElement);


  });


};



// function that resets form after submission
$(document).ready(function () {
  $("#postBtn").click(function () {
    postButtonClicked();
    $("#configform").trigger("reset");
  });
});




// form reset for comment form
$(document).ready(function () {
  $("#commentBtn").click(function () {
    addCommentToPost();
    $("#config-comment").trigger("reset");
  });
});



//HTML + CSS ------------------------check
// Add a post------------------------check
//click function on post button -----check
// collect values from form ---------check
//put values in a posts array -------check
//clear text boxes ------------------check
// display posts---------------------check
//add comment to post----------------check
// display comments------------------check
//delete a comment
// toggle comments box show/hide
//delete a post
