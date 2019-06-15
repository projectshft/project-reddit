var uniqueId = 0;
//create post functionality


$('.post-button').click(function(){
  uniqueId ++;
  var $postText = $('#user-post-text').val();
  var $userName = $('#user-post-name').val();
  $('.list-group-flush').append('<li class = "list-group-item">'
    + '<button type="button" class="btn btn-primary btn-sm remove-button"> remove</button>'
    + '<button type="button" class="btn btn-primary btn-sm comment-button"> comments</button>'
    + $postText + '<br>' + "Posted By: "
    + '<b>'+$userName +'</b>'
    + '<div class="collapse comments-display card card-body">'
    + '<ul id="comments' + uniqueId +'">'+'</ul>'
    + '<input type="text" class ="comment-text" placeholder="Comment Text"> <input type="text" placeholder="User Name" class="comment-user">'
    + '<button type="button" class="btn btn-primary btn-sm post-comment-button"> Post Comment</button>'
    + '</div>' + '</li>');

    //binding remove and commenting clicks to new elements
    bindRemoveEvent();
    bindToggleCommentsEvent();
    bindPostCommentEvent();
});


//add remove functionality
var bindRemoveEvent = function(){
  $('.remove-button').click(function(){
    var postToDelete = $(this).closest('.list-group-item');
    postToDelete.remove();
  });
};

//bug here in toggle
var bindToggleCommentsEvent = function(){
  $('.comment-button').click(function(){
    var commentsToToggle = $(this).siblings('.comments-display');
     commentsToToggle.toggle();
  });
};

//working here
var bindPostCommentEvent = function(){
  $('.post-comment-button').click(function(){
    $("#comments" + uniqueId).append('</li>' + $('.comment-text').val() + " Posted By: " + $('.comment-user').val() + '</li>' + '</br>');
  });
};
