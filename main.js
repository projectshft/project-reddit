const posts = $('.posts');
/* When add post is clicked this function grabs the values of the username and message inputs,
   builds a post, and then adds it to the post list */
$('#add-post').on('click', function (e) { 
  e.preventDefault();
  const userName = $('#username').val();
  const message = $('#message').val();

  // Builds out the HTML for each new post
  posts[0].innerHTML +=
    '<div class="userpost">'
    + '<div class="post-text"><div>' + message + '</div>' 
    + '<div>Posted By: <b>' + userName + '</b></div></div>'
    + '<div class="comment-text"></div>' 
    + '<div class="icon-row"><i class="far fa-window-close delete"></i>'
    + '<i class="far fa-comment comment"></i></div>' 
    + '<div class="add-comment"><h5>Add Comment</h5>'
    + '<input class="comment-username" type="text" placeholder="User Name">'
    + '<input class="comment-message" type="text" placeholder="Comment Text" Text"></input>'
    + '<button type="submit" class="btn btn-primary post-comment">Add Comment</button></div>';
  
  deletePostListener();
  addPostMouseOverListeners();
  commentAddListener();
  addCommentListener();
});

/* When add comment is clicked this function grabs the values of the username and comment inputs,
   builds a post, and then adds it to the comment list */
const addCommentListener = function () {
  $('.post-comment').each(function () {
    $(this).on("click", function(e) {  
    e.preventDefault();
    const userName = $(this).closest(".add-comment").find('.comment-username').val();
    const message = $(this).closest(".add-comment").find('.comment-message').val();
    const commentSection = $(this).closest('.userpost').find('.comment-text');

    // Builds out HTML of a new comment
    commentSection[0].innerHTML +=
      '<div class="comment-post">'
      + '<div class="comment-text"><div>' + message + '</div>' 
      + '<div>Posted By: <b>' + userName + '</b>'
      + '<div class="comment-icon-row"><i class="far fa-window-close delete-comment"></i></div></div>';
    
    deleteCommentListener();    
    });
  });
}

// Adds click event listeners to all delete post icons and if clicked removes that post
const deletePostListener = function() {
  $(".delete").each(function() {
    $(this).on("click", function() {
      this.parentElement.parentElement.remove();
    });
  });
}

// Adds click event listeners to all delete comment icons and if clicked removes that comment
const deleteCommentListener = function() {
  $(".delete-comment").each(function() {
    $(this).on("click", function() {
      this.parentElement.parentElement.parentElement.remove();
    });
  });
}

// Adds click event listeners to all comment icons and if clicked shows the add comment area
const commentAddListener = function() {
  $(".comment").each(function() {
    $(this).on("click", function() {
      if($(this).closest(".icon-row").next(".add-comment").hasClass('show')) {
        $(this).closest(".icon-row").next(".add-comment").removeClass('show');
      } else {
        $(this).closest(".icon-row").next(".add-comment").addClass('show');
      }
    });
  });
}

/* This function handles when a post area has the mouse enter or leave it along with what
   happens when those events occur such as showing or hiding certain features */   
const addPostMouseOverListeners = function() {
  
  // Checks if the icon row is showing and shows or hides it if the targeted post is moused into or out of
  const checkIconRowShow = function() {
    if($(this).find(".icon-row").hasClass('show')) {
      $(this).find(".icon-row").removeClass('show');
    } else {
      $(this).find(".icon-row").addClass('show');
    }
  }

  // Checks if add comment section is showing or not and hides it if the mouse leaves the current post area
  const checkCommentAddShow = function () {
    if($(this).find(".add-comment").hasClass('show')) {
      $(this).find(".add-comment").removeClass('show');
    }
  }

  // For each user post handles what happens when the mouse enters or leaves the post area
  $('.userpost').each(function() {
    $(this).mouseenter(checkIconRowShow);
    $(this).mouseleave(checkIconRowShow);
    $(this).mouseleave(checkCommentAddShow);
  });
}
