

var deletePost;
var tweetCount = 0;  // check if we need this still
// var button = document.getElementById('submit')[0];  
var $postButton = $('#submit');  // needed?

//submit.addEventListener('click', function () {   // maybe onsubmit
var addNewPostEntry = function () {
  var $postText = $('#message').val();
  console.log($postText);
  var $postersName = $('#name').val();
  console.log($postersName);
  $('.posts').append('<p>' + $postText + '</p>').addClass('post-entry');
  $('.posts').append('<div class="comments">test</div>');  // find me by nearest?
  $('.posts').append('Posted By: <b>' + $postersName + '</b><hr>');
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
 