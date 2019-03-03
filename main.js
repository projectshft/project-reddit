const posts = $('.posts');

/* When add post is clicked this function grabs the values of the username and message inputs,
   builds a post, and then adds it to the posts list */

$('#add-post').on('click', function() { 
  const postUserName = $('#username').val();
  const postMessage = $('#message').val();

  if(postUserName && postMessage) {  // Checks if the user and message inputs are not empty

    // Builds out the HTML for each new post and adds it to the page
    posts[0].innerHTML +=
      '<div class="userpost">'
      + '<div class="post-text"><div class="post-message">' + postMessage + '</div>' 
      + '<div>Posted By: <b>' + postUserName + '</b>'
      + '<div class="icon-row"><i class="far fa-comment comment" data-toggle="tooltip" title="Add Comment"></i>'
      + '<i class="fas fa-edit edit-post-show" data-toggle="tooltip" title="Edit Post"></i>'
      + '<i class="fas fa-eye-slash hide-comment" data-toggle="tooltip" title="Hide/Show Comments"></i>'
      + '<i class="far fa-window-close delete" data-toggle="tooltip" title="Delete Post"></i>'
      + '<div class="hidden-comments">Comments Hidden</div></div>'
      + '<div class="timestamp">' + getTimeStamp() + '</div></div>'
      + '<form class="input-area edit-post">'
      + '<div class="form-group"><input class="edit-message" type="text" placeholder="Edit Post" />'
      + '<button type="button" class="btn btn-primary edit-button">Edit Post</button></div></form>'
      + '<div class="comment-post show"></div>' 
      + '<div class="comment-section"><form class="input-area add-comment"><h5>Add Comment</h5>'
      + '<div class="form-group"><input class="comment-username" type="text" placeholder="User Name" /></div>'
      + '<div class="form-group"><input class="comment-message" type="text" placeholder="Comment Text" /></div>'
      + '<button type="button" class="btn btn-primary post-comment">Add Comment</button></form></div>';      

    // Resets the user name and message fields back to empty after adding a post
    $('#username').val(''); 
    $('#message').val('');

    deletePostListener();
    commentButtonListener();
    addCommentButtonListener();
    hideCommentsButtonListener();
    editPostShowListener();
    editPostButtonListener();
  } else {
    alert("User Name and Message Text must not be empty");
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

      if(commentUserName && commentMessage) { // Checks if the user and message inputs are not empty

        // Builds out HTML of a new comment
        commentSection[0].innerHTML +=
          '<div class="comment-text"><div class="comment-message-text">' + commentMessage + '</div>' 
          + '<div>Posted By: <b>' + commentUserName + '</b>'
          + '<div class="comment-icon-row"><i class="fas fa-edit edit-comment-show" data-toggle="tooltip" title="Edit Comment"></i>'
          + '<i class="far fa-window-close delete-comment" data-toggle="tooltip" title="Delete Comment"></i></div>'
          + '<div class="timestamp">' + getTimeStamp() + '</div></div>'
          + '<div class="edit-comment">'
          + '<div><input class="edit-comment-message" type="text" placeholder="Edit Comment" />'
          + '<button type="button" class="btn btn-primary edit-comment-button">Edit Comment</button></div></div>';  

        // Resets the user name and message fields back to empty after adding a comment
        $(this).closest(".add-comment").find('.comment-username').val('');
        $(this).closest(".add-comment").find('.comment-message').val('');

        $(this).closest(".add-comment").removeClass('show-add-comment'); 

        deleteCommentListener();
        editCommentShowListener();
        editCommentButtonListener();
      } else {
        alert("User Name and Comment Text must not be empty")
      }
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

// Adds click event listeners to all edit post icons and if clicked shows the edit post area
const editPostShowListener = function() {
  $(".edit-post-show").each(function() {
    $(this).on("click", function() {
      if($(this).closest(".post-text").find(".edit-post").hasClass('show-add-comment')) {
        $(this).closest(".post-text").find(".edit-post").removeClass('show-add-comment');
      } else {
        const currentPostText = $(this).closest(".post-text").find(".post-message").html();
        $(this).closest(".post-text").find(".edit-message").val(currentPostText);
        $(this).closest(".post-text").find(".edit-post").addClass('show-add-comment');
      }
    });
  });
}

// Adds click event listeners to all edit post icons and if clicked shows the edit post area
const editPostButtonListener = function() {
  $(".edit-button").each(function() {
    $(this).on("click", function() {
      const editedPostText =  $(this).closest(".form-group").find(".edit-message").val();
      $(this).closest(".post-text").find(".post-message").html(editedPostText + ' (edited on: ' + getTimeStamp() + ')');
      $(this).closest(".edit-post").removeClass('show-add-comment'); // Hides add comment section when button is clicked
    });
  });
}

/* This function adds click event listeners to all of the edit comment icons that will show and hide the edit
   comment section. It also grabs the value of the current comment text and sets the edit comment input field to
   that value.  */

const editCommentShowListener = function() {
  $(".edit-comment-show").each(function() {
    $(this).on("click", function() {
      if($(this).closest(".comment-text").find(".edit-comment").hasClass('show-add-comment')) {
        $(this).closest(".comment-text").find(".edit-comment").removeClass('show-add-comment');
      } else {
        const currentCommentText = $(this).closest(".comment-text").find(".comment-message-text").html();
        $(this).closest(".comment-text").find(".edit-comment-message").val(currentCommentText);
        $(this).closest(".comment-text").find(".edit-comment").addClass('show-add-comment');
      }
    });
  });
}

/* This function adds click event listeners to all edit comment buttons.  When an edit comment button is clicked the location of the
   current comment is grabbed and the HTML value is replaced by the value in the edit comment input field.  The edit comment
   section is then hidden from view. */

const editCommentButtonListener = function() {
  $(".edit-comment-button").each(function() {
    $(this).on("click", function() {
      const editedCommentText =  $(this).closest(".edit-comment").find(".edit-comment-message").val();
      $(this).closest(".comment-text").find(".comment-message-text").html(editedCommentText + ' (edited on: ' + getTimeStamp() + ')');
      $(this).closest(".edit-comment").removeClass('show-add-comment'); 
    });
  });
}

// Adds click event listeners to all hide comments icons and if clicked shows or hides a posts comments
const hideCommentsButtonListener = function() {
  $(".hide-comment").each(function() {
    $(this).on("click", function() {
      if($(this).closest(".post-text").find(".comment-post").hasClass('show')) {
        $(this).closest(".post-text").find(".comment-post").removeClass('show');
        $(this).closest(".icon-row").find(".hidden-comments").addClass('comments-hidden');
      } else {
        $(this).closest(".post-text").find(".comment-post").addClass('show');
        $(this).closest(".icon-row").find(".hidden-comments").removeClass('comments-hidden');
      }
    });
  });
}

// This function creates and returns a timestamp 
const getTimeStamp = function () {
  const currentDate = new Date(); 
  const timeStamp = 
    (currentDate.getMonth()+1) + "/"
    + currentDate.getDate()  + "/" 
    + currentDate.getFullYear() + " @ "  
    + currentDate.getHours() + ":"  
    + (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes() + ":"
    + (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();
  return timeStamp;
}