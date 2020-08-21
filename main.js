

let deletePost;
let tweetCount = 0;
var button = document.getElementById('submit')[0];
submit.addEventListener('click', function () {   // maybe onsubmit
  var userName = document.getElementById('name').value;  // needs [0]?
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
  tweetCount++;
});
var makeEvents = function() {
deletePost.addEventListener('click', function () {
console.log('working');
document.getElementsByClassName('tweet')[0].remove();
document.getElementsByClassName('user-name')[0].remove();
//document.getElementsByClassName('deleter')[0].remove();  // surprise! it deletes itself
});
}

