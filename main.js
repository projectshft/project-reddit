// define some html templates that will be dynamically added to the page
// removeCommentHtml is meant to keep the posting of a new post cleaner by 
// wrapping the interactive links into a variable

var removeCommentsHtml = `<a class="remove-post">remove</a>&nbsp;<a class="comment-toggle">comments</a>`;

// the commentsFormHtml gets attached to every post, and sets the stage
// for new comments by placing the .comment-single class in position 

var commentsFormHtml = `<div class="comment-single"></div>
<form onsubmit="event.preventDefault();">
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

// lots of lifting here in addNewPostEntry()
// get vars for html with links to remove/comments (template)
// get vars for html comment template form entry.
// concat the 'remove and comments'' links html and post text from .val() in form
// reset and set up event listeners on these new elements
var addNewPostEntry = function () {
  // these are the only ID'd form text elements on the screen, so it's straightforward
  // to grab the val()'s
  var $postText = $('#message').val();
  // console.log($postText);
  var $postersName = $('#name').val();
  if ($postText && $postersName) {
  // console.log($postersName);
  // Build a new post, appending to the .posts div and wrapping in .post-single div
  $('.posts').append('<div class="post-single"><p>' + removeCommentsHtml + ' ' + $postText + '</p>');
  // create the div for comments. start hidden so it can be toggled on click
  $('.post-single').last().append('<div class="comments" hidden>' + commentsFormHtml + '</div><p>Posted By: <b>' + $postersName + '</b></p><hr /></div>');
  // /div above ends .post-single

  // Prepare for events...
  // first, kill existing event handlers everywhere to prevent multi-firing of events
  $('.remove-post').off();
  $('.comment-toggle').off();
  $('.comment-post').off();
  // add new events to comments and the comments area toggle
  $('.remove-post').click(removePostEntry);
  $('.comment-toggle').click(togglePostComments);
  $('.comment-post').click(addCommentToPost);
  } else {
    console.log('empty field detected');
    $('.posts').append('<p class="bg-danger warn"><br />Kindly fill out both fields to post.<br /></p>');
    $('.warn').fadeOut(4000);
  }
};

// remove an entire post by selecting its div
var removePostEntry = function () {
  //console.log('removePostEntry() entered');
  $(this).closest('.post-single').css('background-color', 'yellow');
  $(this).closest('.post-single').fadeOut();
  // why pop out when you can fade away? fancy.
};

// select the .comments div, within same post div
// and display/hide entire area
var togglePostComments = function () {
  console.log('togglePostComments() entered');
  //move up then back to .comments div
  $(this).parent().parent().find('.comments').toggle(400);
};


var addCommentToPost = function () {
  //console.log('addCommentToPost() entered');
  // verbose string placed into var for the close icon
  var closeGlyph = `<a href="#" class = "comment-delete"><span class="glyphicon glyphicon-remove"></span></a>`;
  // grab text input entries
  var $commentText = $(this).closest('form').find('.comment-text').val();
  var $commentName = $(this).closest('form').find('.comment-name').val();
  // console.log($commentText);
  // console.log($commentName);
  
  if ($commentText && $commentName) {
  
  // put the comment in the .comments div.  wrap in own span for easy deletion later
  // .find() and .last() will find pre-seeded .comment-single empty span
  // using last() ensures we are adding comments to end of existing ones
  // use .after rather than .append to make sure each span stands alone, and not nested
  $(this).closest('.comments').find('.comment-single').last().after('<span class="comment-single">' + $commentText + ' Posted By: <b>' + $commentName + '</b> ' + closeGlyph + '<br/></span>');

  // reset comment events as DOM has changed. Probably not neccesary, but good to be tidy.
  $('.comment-delete').off();
  $('.comment-post').off();
  $('.comment-delete').click(removePostComment);
  $('.comment-post').click(addCommentToPost);
  } else {
    console.log('empty field detected');
    $(this).closest('.comments').find('.comment-single').last().after('<p class="bg-danger warn"><br />Kindly fill out both fields to comment on this post.<br /></p>');
    $('.warn').fadeOut(4000);
  }
};

//since the individual comments are in their own .comment-single span, this is fairly straightforward
var removePostComment = function () {
  //console.log('removePostComment() entered');
  $(this).closest('.comment-single').first().fadeOut();
};

// and, finally, the main execution starts with setting up an event to add a new post,
// then all the additional magic happens in each function

$('#submit').click(addNewPostEntry);