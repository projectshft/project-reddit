

var deletePost;
var tweetCount = 0;  // check if we need this still
var removeCommentsHtml = `<a class="remove-post">remove</a>&nbsp;<a class="comment-toggle">comments</a>`;
var commentsFormHtml = `<div class="row form-group">
<div class="col-xs-3 col-sm-3">
  <input id="comment-text" type="text" class="form-control input-sm" placeholder="Comment Text"></input>
</div>
<div class="col-xs-3 col-sm-3">
  <input id="comment-name" type="text" class="form-control input-sm" placeholder="User Name"></input>
</div>
<div class="col-xs-3 col-sm-3">
  <button id="post-comment" class="btn btn-primary">Post Comment</button>
</div>
<div class="col-xs-3 col-sm-3">
</div></div>`;

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
  $('.posts').append('<p>' + removeCommentsHtml + ' ' + $postText + '</p>').addClass('post-entry');
  $('.posts').append('<div class="comments"></div>');  // find me by nearest?
  $('.posts').append('Posted By: <b>' + $postersName + '</b><hr>');
  $('.remove-post').click(removePostEntry);
  $('.comment-toggle').click(togglePostComments);
  $('.remove-comment').click(removePostComment);

};  

var removePostEntry = function () {
  console.log('removePostEntry() entered');
};

var togglePostComments = function () {
  console.log('togglePostComments() entered');
  $('.comments').append(commentsFormHtml);
};

var removePostComment = function () {
  console.log('removePostComment() entered');
};

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

$('#submit').click(addNewPostEntry);
