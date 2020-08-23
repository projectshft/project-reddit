

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

// var button = document.getElementById('submit')[0];  
//var $postButton = $('#submit');  // needed?


// lots of lifting here in addNewPostEntry()
// define or get vars for html links to remove/comments
// define or get vars for html comment form entry.
// concat remove/comments link html and post text from .val() in form
// set up event listeners on these new elements
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
};

var togglePostComments = function () {
  console.log('togglePostComments() entered');
  // $(this).hasClass('.hidden').toggle();   ///aaaargh
};

var addCommentToPost = function (element) {
  console.log(element);
  console.log('addCommentToPost() entered');
  var closeGlyph = `<a href="#" class = "comment-delete"><span class="glyphicon glyphicon-remove"></span></a>`;
  var $commentText = $(this).has('.comment-text').val();
  var $commentName = $(this).has('.comment-name').val();
  console.log($commentText);
  console.log($commentName);
  $(this).parent().parent().parent().parent().prepend('<span class="comment-single">' + $commentText + ' Posted By: <b>' + $commentName + '</b> '+ closeGlyph + '</span><br/>');
  $('.comment-delete').off();
  $('.comment-delete').click(removePostComment);
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


