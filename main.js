const posts = $('.posts');
let counter = 1;


// Grabs the input of user and builds the post then adds it to the post list
document.getElementById('add-post').addEventListener('click', function (e) { 
  e.preventDefault();
  const userName = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  posts[0].innerHTML += 
  `<div id="comment${counter}" class="userpost">` 
  + '<div>' + message + '</div>' 
  + '<div>Posted By: <b>' + userName + '</b></div>'
  + '<div class="icon-row"><i class="far fa-window-close delete"></i>'
  + '<i class="far fa-comment comment"></i></div>';
  
  counter++;
  addDeleteListeners();
  addPostMouseOverListeners();
  });

  // Adds event listens to all delete icons and if clicked removes that post
  const addDeleteListeners = function() {
    document.querySelectorAll(".delete").forEach(function(elem) {
      elem.addEventListener("click", function() {
        elem.parentElement.parentElement.remove();
      });
    });
  }
  
  // Toggles the icon row to show or not show when post is moused over
  const addPostMouseOverListeners = function() {
  $('.userpost').each(function () {
   $(this).mouseenter(function () {
  if($(this).find(".icon-row").hasClass('show')) {
    $(this).find(".icon-row").removeClass('show');
  } else {
    $(this).find(".icon-row").addClass('show');
  }
});
  $(this).mouseleave(function () {
    if($(this).find(".icon-row").hasClass('show')) {
      $(this).find(".icon-row").removeClass('show');
    } else {
      $(this).find(".icon-row").addClass('show');
    }
});
});
}
