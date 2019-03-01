const posts = $('.posts');
/* When add post is clicked this function grabs the values of the username and message inputs,
   builds a post, and then adds it to the post list */
$('#add-post').on('click', function (e) { 
  e.preventDefault();
  const userName = $('#username').val();
  const message = $('#message').val();

  posts[0].innerHTML +=
  '<div class="userpost">'
  + '<div>' + message + '</div>' 
  + '<div>Posted By: <b>' + userName + '</b></div>'
  + '<div class="icon-row"><i class="far fa-window-close delete"></i>'
  + '<i class="far fa-comment comment"></i></div>';
  
  deletePostListener();
  addPostMouseOverListeners();
});

// Adds event listens to all delete icons and if clicked removes that post
const deletePostListener = function() {
  $(".delete").each(function() {
    $(this).on("click", function() {
      this.parentElement.parentElement.remove();
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
