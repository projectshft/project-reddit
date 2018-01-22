//todo: add spacing - margin? - between text inputs
$( document ).ready(function(){
$('.post-button').click(function(){
  var commentsToggle = '<p class="comments small">comments</p><div class="replies hidden"><input type="text" class ="comment-text" placeholder="Comment Text"><input type"text" class="commenter-name" placeholder="User Name"><button class="btn btn-primary post-comment">Post Comment</button></div>';
  var post = $('.input-post').val();
  var name = $('.input-name').val();
  var fullPost = `<div>${commentsToggle}<p class ="post-text">${post}</p><p class="post-byline border-bottom">Posted by: <strong>${name}</strong></p></div>`;
  $('.posts').prepend(fullPost);
});
})

$('.posts').on('click', '.comments', function(){
  var closestReplies = $(this).siblings('.replies');
  if (closestReplies.hasClass('hidden')){
    closestReplies.removeClass('hidden');
  } else {
    closestReplies.addClass('hidden');
  }
});

$('.posts').on('click', '.post-comment', function(){
  //would be nice to add error if either of these is blank
  var comment = $('.comment-text').val();
  console.log(comment);
  var name = $('.commenter-name').val();
  var fullComment = `<div><p class="comment">${comment} Posted by: <strong>${name}</strong><span class="x">x</span></p>`;
  $('.replies').append(fullComment);
})

$('.posts').on('click', '.x', function(){
  ($(this).closest('div')).remove();
})
