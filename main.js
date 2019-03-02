const posts = $('.posts');
/* When add post is clicked this function grabs the values of the username and message inputs,
   builds a post, and then adds it to the post list */
$('#add-post').on('click', function (e) { 
  e.preventDefault();
  const userName = $('#username').val();
  const message = $('#message').val();

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
const addCommentListener = function() {
$('.post-comment').each(function () {
  $(this).on("click", function(e) {  
  e.preventDefault();
  const userName = $('.comment-username').val();
  const message = $('.comment-message').val();
  const commentSection = $(this).closest('.userpost').find('.comment-text');

  commentSection[0].innerHTML +=
    '<div class="comment-post">'
    + '<div class="comment-text"><div>' + message + '</div>' 
    + '<div>Posted By: <b>' + userName + '</b>'
    + '<div class="comment-icon-row"><i class="far fa-window-close delete-comment"></i></div></div>';
  
  deleteCommentListener();
  
});
});
}

// Adds event listens to all delete icons and if clicked removes that post
const deletePostListener = function() {
  $(".delete").each(function() {
    $(this).on("click", function() {
      this.parentElement.parentElement.remove();
    });
  });
}

const deleteCommentListener = function() {
  $(".delete-comment").each(function() {
    $(this).on("click", function() {
      this.parentElement.parentElement.parentElement.remove();
    });
  });
}

// Adds event listens to all comment icons and if clicked shows the add comment area
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

// Toggles the icon row to show or not when a post area is moused into or out of
const addPostMouseOverListeners = function() {
  const checkIconRowShow = function() {
    if($(this).find(".icon-row").hasClass('show')) {
      $(this).find(".icon-row").removeClass('show');
    } else {
      $(this).find(".icon-row").addClass('show');
    }
  }

  $('.userpost').each(function() {
    $(this).mouseenter(checkIconRowShow);
    $(this).mouseleave(checkIconRowShow);   
  });
}
