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

// lots of lifting here in addNewPostEntry()
// get vars for html with links to remove/comments (template)
// get vars for html comment template form entry.
// concat remove/comments link html and post text from .val() in form
// set up event listeners on these new elements
var addNewPostEntry = function () {
  // these are the only ID'd form text elements on the screen, so it's straightforward
  // to grab the val()'s
  var $postText = $('#message').val();
  // console.log($postText);
  var $postersName = $('#name').val();
  // console.log($postersName);
  // Build a new post, appending to the .posts div and wrapping in .post-single div
  $('.posts').append('<div class="post-single"><p>' + removeCommentsHtml + ' ' + $postText + '</p>');
  // create the div for comments. start hidden so it can be toggled on click
  $('.posts').append('<div class="comments" hidden>' + commentsFormHtml + '</div>');  
  $('.posts').append('Posted By: <b>' + $postersName + '</b><hr /></div>');  
  // /div above ends .post-single
  // Prepare for events...
  // first, kill existing event handlers everywhere to prevent multi-firing of events
  $('.remove-post').off();
  $('.comment-toggle').off();
  $('.comment-post').off();
  // add new events to comments
  $('.remove-post').click(removePostEntry);
  $('.comment-toggle').click(togglePostComments);
  $('.comment-post').click(addCommentToPost);
};  

// remove an entire post by selecting its div
var removePostEntry = function () {
  //console.log('removePostEntry() entered');
  $(this).closest('div').fadeOut();
  // why blink out when you can fade away?
};

// select the .comments div, which is in same post div
var togglePostComments = function () {
  //console.log('togglePostComments() entered');
  $(this).siblings('.comments').first().toggle(400);  
};


var addCommentToPost = function () {
  //console.log('addCommentToPost() entered');
  var closeGlyph = `<a href="#" class = "comment-delete"><span class="glyphicon glyphicon-remove"></span></a>`;
  var $commentText = $(this).closest('form').find('.comment-text').val();
  var $commentName = $(this).closest('form').find('.comment-name').val();
  // console.log($commentText);
  // console.log($commentName);
  // put the comment in the .comments div  wrap in own div for easy deletion later
  // (this is a messy selection, but accurate). .find() and .last() appears to be ignored
  // or throw no error when not finding or filtering to a result. 
  // This is great for adding comments to end of existing ones
  $(this).parent().parent().parent().parent().find('.comment-single').last().append('<span class="comment-single">' + $commentText + ' Posted By: <b>' + $commentName + '</b> '+ closeGlyph + '<br/></span>');
  
  // reset comment events as count has changed. Probably not neccesary, but good to be tidy.
  $('.comment-delete').off();
  $('.comment-post').off();
  $('.comment-delete').click(removePostComment);
  $('.comment-post').click(addCommentToPost);
};

var removePostComment = function () {
  console.log('removePostComment() entered');
  console.log($(this));
  // $(this).css('background-color', 'yellow');
};

$('#submit').click(addNewPostEntry);



/*   var userName = document.getElementById('name').value;  // needs [0]?
  var userTextNode = document.createTextNode(userName);
  var userElementP = document.createElement('p');
  userElementP.appendChild(userTextNode);
  userElementP.setAttribute('class', 'user-name');
  var postText = document.getElementById('message').value;
  var postTextNode = document.createTextNode(postText);
  var postElementP = document.createElement('p');
  postElementP.appendChild(postTextNode);
  postElementP.setAttribute('class', 'tweet');
  var delBtnTextNode = document.createTextNode('Delete Post');
  var delBtnElementBtn = document.createElement('button');
  delBtnElementBtn.appendChild(delBtnTextNode);
  delBtnElementBtn.setAttribute('class', 'deleter');


  document.getElementsByTagName('form')[0].append(userElementP);
  document.getElementsByTagName('form')[0].append(postElementP);
  document.getElementsByClassName('tweet')[tweetCount].append(delBtnElementBtn);
  deletePost = document.getElementsByClassName('deleter')[tweetCount];
  makeEvents();
  tweetCount++; */

/* var makeEvents = function() {
deletePost.addEventListener('click', function () {
console.log('working');
document.getElementsByClassName('tweet')[0].remove();
document.getElementsByClassName('user-name')[0].remove();
//document.getElementsByClassName('deleter')[0].remove();  // surprise! it deletes itself
});
} */


