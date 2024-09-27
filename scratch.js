

var deletePost;  // needed?
var postCount = 0; 
var removeCommentsHtml = `<a class="remove-post">remove</a>&nbsp;<a class="comment-toggle">comments</a>`;
var commentsFormHtml = `<form onsubmit="event.preventDefault();">
<div class="row form-group" >
<div class="col-xs-3 col-sm-3">
  <input type="text" class="form-control input-sm comment-text" placeholder="Comment Text"></input>
</div>
<div class="col-xs-3 col-sm-3">
  <input type="text" class="form-control input-sm comment-name" placeholder="User Name"></input>
</div>
<div class="col-xs-3 col-sm-3">
  <button class="btn btn-primary comment-post">Post Comment</button>
</div>
<div class="col-xs-3 col-sm-3">
</div></div></form>`;


var addNewPostEntry = function () {
  
  var $postText = $('#message').val();
  console.log($postText);
  var $postersName = $('#name').val();
  console.log($postersName);
  // var postEntryNumber = 'post-entry' + postCount;
  $('.posts').append('<div class="post-single"><p>' + removeCommentsHtml + ' ' + $postText + '</p>');
  $('.posts').append('<div class="comments">' + commentsFormHtml + '</div>');  // find me by nearest?
  $('.posts').append('Posted By: <b>' + $postersName + '</b><hr /></div>');  // end .post-single, but it is not working 
  // add events to all relevant classes -- maybe move to own func
  // first, kill existing event handlers everywhere to prevent multi-firing of event
  $('.remove-post').off();
  $('.comment-toggle').off();
  $('.comment-post').off();
  $('.remove-post').click(removePostEntry);
  $('.comment-toggle').click(togglePostComments);
  $('.comment-post').click(addCommentToPost);
  // increase post counter
  postCount++;
};  

var removePostEntry = function () {
  console.log('removePostEntry() entered');
  $(this).closest('div').css('background-color', 'yellow');
  $(this).closest('div').fadeOut();
};

var togglePostComments = function () {
  console.log('togglePostComments() entered');
  // $(this).siblings('.comments').first().css('background-color', 'yellow');
  $(this).siblings('.comments').first().toggle(400);
  // $(this).hasClass('.hidden').toggle();   ///aaaargh
};

var addCommentToPost = function () {
  $otherThing = $(this).closest('form').find('.comment-name').val();
  console.log('addCommentToPost() entered');
  $(this).closest('form').find('.comment-name').css('background-color', 'yellow');
  $(this).closest('form').css('background-color', 'yellow');
  console.log('thing: ',$(this).closest('input').has('.comment-name').val());
  console.log('other thing: ', $otherThing);
  var closeGlyph = `<a href="#" class = "comment-delete"><span class="glyphicon glyphicon-remove"></span></a>`;
  var $commentText = $(this).has('.comment-text').val();
  var $commentName = $(this).has('.comment-name').val();
  console.log($commentText);
  console.log($commentName);
  $(this).parent().parent().parent().parent().find('.comment-single').last().append('<span class="comment-single">' + $commentText + ' Posted By: <b>' + $commentName + '</b> '+ closeGlyph + '<br/></span>');
  $('.comment-delete').off();
  $('.comment-delete').click(removePostComment);
  $('.comment-post').off();
  $('.comment-post').click(addCommentToPost);
};

var removePostComment = function () {
  console.log('removePostComment() entered');
  console.log($(this));
$(this).closest('.comment-single').css('background-color', 'yellow');
$(this).closest('.comment-single').fadeOut();
//$(this).closest('.comment-single').detach();
};
// $('.remove-post').off();
// $('.comment-toggle').off();
// $('.comment-post').off();
$('.comment-delete').click(removePostComment);
$('.remove-post').click(removePostEntry);
$('.comment-toggle').click(togglePostComments);
$('.comment-post').click(addCommentToPost);
$('#submit').click(addNewPostEntry);




