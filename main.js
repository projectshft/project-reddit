
const makePost = function() {
  $('.btn').on('click', function() {
    let userName = $('#name').val();
    let userMessage = $('#message').val();

    let postTemplate = '<div class="post"><p><a class="remove">remove</a> <a class="comments">comments</a> ' + userMessage + ' - Posted By: ' + userName + '</p>';

    let commentTemplate = '<form style="margin-top:30px;" onsubmit="event.preventDefault();"><div class="comment-input"><div class="form-group"><input id="comment" type="text" class="form-control" placeholder="Comment Text"></input></div>\n\n<div class="form-group"><input id="user" type="text" class="form-control" placeholder="Your Name"></input></div><button id="submit-comment" class="btn btn-primary">Submit Comment</button><hr></div>';

    $('.posts').append(postTemplate, commentTemplate);
    $("form").trigger("reset");
  
    makeComments();
    removePost();
  }) 
};



makePost();


const makeComments = function() {
  $('.comments').on('click', function() {
    if ($('.comment-input').css('display') == 'none') {
      console.log('yes');
      $('.comment-input').show();
    } else {
      $('.comment-input').hide();
    }
  });
}
// makeComments can show/hide comment inputs - <hr> is hidden - does not work for a specific post - only works for all comments
const removePost = function() {
  $('.remove').on('click', function() {
  $(this).closest('div.post').remove();
  });
}
