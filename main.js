const posts = $('.posts');

/* When add post is clicked this function grabs the values of the username and message inputs,
   builds a post, and then adds it to the posts list */

$('#add-post').on('click', function() { 
  const postUserName = $('#username').val();
  const postMessage = $('#message').val();

  if(postUserName && postMessage) {  // Checks if the user inputs are not empty

    // Builds out the HTML for each new post
    posts[0].innerHTML +=
      '<div class="userpost">'
      + '<div class="post-text"><div>' + postMessage + '</div>' 
      + '<div>Posted By: <b>' + postUserName + '</b>'
      + '<div class="icon-row"><i class="far fa-comment comment" data-toggle="tooltip" title="Add Comment"></i>'
      + '<i class="fas fa-edit" data-toggle="tooltip" title="Edit Post"></i>'
      + '<i class="fas fa-eye-slash hide-comment" data-toggle="tooltip" title="Hide/Show Comments"></i>'
      + '<i class="far fa-window-close delete" data-toggle="tooltip" title="Delete Post"></i></div>'
      + '<div class="timestamp">' + getTimeStamp() + '</div></div>'
      + '<div class="comment-post show"></div>' 
      + '<form class="input-area add-comment"><h5>Add Comment</h5>'
      + '<div class="form-group"><input class="comment-username" type="text" placeholder="User Name" /></div>'
      + '<div class="form-group"><input class="comment-message" type="text" placeholder="Comment Text" /></div>'
      + '<button type="button" class="btn btn-primary post-comment">Add Comment</button></form>';

    // Resets the user name and message fields back to empty after adding a post
    $('#username').val(''); 
    $('#message').val('');

    deletePostListener();
    commentButtonListener();
    addCommentButtonListener();
    hideCommentsButtonListener();
  }
});

/* When add comment is clicked this function grabs the values of the username and comment inputs,
   builds a post, and then adds it to the comment list */

const addCommentButtonListener = function() {
  $('.post-comment').each(function() {
    $(this).on("click", function() {  
      const commentUserName = $(this).closest(".add-comment").find('.comment-username').val();
      const commentMessage = $(this).closest(".add-comment").find('.comment-message').val();
      const commentSection = $(this).closest('.userpost').find('.comment-post');

      // Builds out HTML of a new comment
      commentSection[0].innerHTML +=
        '<div class="comment-text"><div>' + commentMessage + '</div>' 
        + '<div>Posted By: <b>' + commentUserName + '</b>'
        + '<div class="comment-icon-row"><i class="fas fa-edit" data-toggle="tooltip" title="Edit Comment"></i>'
        + '<i class="far fa-window-close delete-comment" data-toggle="tooltip" title="Delete Comment"></i></div>'
        + '<div class="timestamp">' + getTimeStamp() + '</div></div>';  

      // Resets the user name and message fields back to empty after adding a comment
      $(this).closest(".add-comment").find('.comment-username').val('');
      $(this).closest(".add-comment").find('.comment-message').val('');

      $(this).closest(".add-comment").removeClass('show-add-comment'); // Hides add comment section when button is clicked

      deleteCommentListener();
    });
  });
}

// Adds click event listeners to all delete post icons and if clicked removes that post
const deletePostListener = function() {
  $(".delete").each(function() {
    $(this).on("click", function() {
      let confirmDeletePost = confirm("Are you sure you want to delete this post?");
      if(confirmDeletePost) {
        $(this).closest('.userpost').remove();
      }
    });
  });
}

// Adds click event listeners to all delete comment icons and if clicked removes that comment
const deleteCommentListener = function() {
  $(".delete-comment").each(function() {
    $(this).on("click", function() {
      let confirmDeleteComment = confirm("Are you sure you want to delete this comment?");
      if(confirmDeleteComment) {
        $(this).closest('.comment-text').remove();
      }
    });
  });
}

// Adds click event listeners to all comment icons and if clicked shows the add comment area
const commentButtonListener = function() {
  $(".comment").each(function() {
    $(this).on("click", function() {
      if($(this).closest(".post-text").find(".add-comment").hasClass('show-add-comment')) {
        $(this).closest(".post-text").find(".add-comment").removeClass('show-add-comment');
      } else {
        $(this).closest(".post-text").find(".add-comment").addClass('show-add-comment');
      }
    });
  });
}

const hideCommentsButtonListener = function() {
  $(".hide-comment").each(function() {
    $(this).on("click", function() {
      if($(this).closest(".post-text").find(".comment-post").hasClass('show')) {
        $(this).closest(".post-text").find(".comment-post").removeClass('show');
      } else {
        $(this).closest(".post-text").find(".comment-post").addClass('show');
      }
    });
  });
}

// This function creates and returns a timestamp when add post or add comment buttons are pushed
const getTimeStamp = function () {
  const currentdate = new Date(); 
  const timestamp = 
    (currentdate.getMonth()+1) + "/"
    + currentdate.getDate()  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":"
    + (currentdate.getSeconds() < 10 ? '0' : '') + currentdate.getSeconds();
  return timestamp;
}