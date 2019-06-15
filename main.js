
//create post functionality


$('.post-button').click(function(){

  var $postText = $('#user-post-text').val();
  var $userName = $('#user-post-name').val();
  $('.list-group-flush').append('<li class = "list-group-item">'
    + '<button type="button" class="btn btn-primary btn-sm remove-button"> remove</button>'
    + '<button type="button" class="btn btn-primary btn-sm comment-button"> comments</button>'
    + $postText + '<br>' + "Posted By: "
    + '<b>'+$userName +'</b>'+'</li>');
    //binding remove and commenting clicks to new elements
    bindRemoveEvent();
    bindShowCommentsEvent();
});


//add remove functionality
var bindRemoveEvent = function(){
  $('.remove-button').click(function(){
    var postToDelete = $(this).closest('.list-group-item');
    postToDelete.remove();
  });
};

var bindShowCommentsEventCommentEvent = function(){
  $('.comment-button').click(function(){
     $('.list-group-item').append('<div><input type="text" id="user-comment" placeholder="Post Comment">'+ '<button type="input"' + 'class="btn btn-primary">Comment</button></div>');
  });
};

//add commenting functionality
// var createCommentField = function(){
//   $('.list-group-item').append('<div><input type="text" id="user-post-text" placeholder="Post Comment">'+ '<button type="input"' + 'class="btn btn-primary">Comment</button></div>');
// };
// '<button type = "button" class = "btn btn-outline-primary btn-sm">Remove</button>'
