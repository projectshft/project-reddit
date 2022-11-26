
var makePost = function() {
  $('.btn').on('click', function() {
    var userName = $('#name').val();
    var userMessage = $('#message').val();
    
    var commentBox = '<form style="margin-top:30px;" onsubmit="event.preventDefault();"><div class="comment-input"><div class="form-group"><input id="comment" type="text" class="form-control" placeholder="Comment Text"></input></div><div class="form-group"><input id="user" type="text" class="form-control" placeholder="Your Name"></input></div><button id="submit-comment" class="btn btn-primary">Submit Comment</button></div>';

    var postTemplate = '<div class="post"><p><a class="remove">remove</a> <a class="comments">comments</a> ' + userMessage + ' - Posted By: ' + userName + '</p>' + commentBox + '<hr>';

    $('.posts').append(postTemplate);
    $("form").trigger("reset");
  
    makeComments();
    removePost();
  }) 
};

var makeComments = function() {
  $('.comments').on('click', function() {
    if ($('.comment-input').css('display') == 'none') {
      $('.comment-input').show();
    } else {
      $('.comment-input').hide();
    }
  });
}
// makeComments can show/hide comment inputs - only works on bottom post && only works for all comments - need to find way to create unique id's for every post comment box

var removePost = function() {
  $('.remove').on('click', function() {
  $(this).closest('div.post').remove();
  });
}

makePost();