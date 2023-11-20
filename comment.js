$(commentButton).click(function () {
  $('.comments').toggle();
  $('.btn-comment-name').show();
  $('.btn-comment-message').show();
  var userNameComment = $('#comment-name').val();
  var userMessageComment = $('#comment-message').val();
  
  
  var commentsDiv = $('.comments');

  var newCommentsDiv = document.createElement('div');

  var newCommentsMessageP = document.createElement('p');
  var newCommentsMessageNode = document.createTextNode(userMessageComment + ' - Posted By: ' + userNameComment);
  $(newCommentsMessageP).append(newCommentsMessageNode);

  $(newCommentsDiv).append(newCommentsMessageP);
  
  $(commentsDiv).append(newCommentsDiv);

  
});














var buttonSubmit = document.getElementById('submit');
let postContainer = document.getElementById("post-container");


buttonSubmit.addEventListener('click', function () {
  var userName = document.getElementById('name').value;
  var userMessage = document.getElementById('message').value;

  var postsDiv = document.querySelector('.posts');

  var newPostDiv = document.createElement('div');
  

  var newPostMessageP = document.createElement('p');
  var newPostMessageNode = document.createTextNode(userMessage + ' - Posted By: ' + userName);
  newPostMessageP.appendChild(newPostMessageNode)

  newPostDiv.append(newPostMessageP);

  var newPostHR = document.createElement('hr');
  
  postsDiv.append(newPostDiv);
  // createRemoveButton();
  // createCommentButton();
  postsDiv.append(newPostHR);
  

});




const createCommentButton = function () {
  var commentButton = document.createElement("button");
  commentButton.className = 'comment';
  commentButton.innerHTML = 'comments';
  
  

  var postsDiv = document.querySelector('.posts');
  postsDiv.append(commentButton);
}


// const createRemoveButton = function () {
//   var removeButton = document.createElement("button");
//   removeButton.className = 'remove';
//   removeButton.innerHTML = 'remove';
  

//   var postsDiv = document.querySelector('.posts');
//   postsDiv.append(removeButton);
// };














// commentButton.addEventListener('click', function () {
//   $('#submit-comment').show();
//   $('#comment-name').show();
//   $('#comment').show();
//   var userNameComment = document.getElementById('comment-name').value;
//   var userMessageComment = document.getElementById('comment').value;

//   var commentsDiv = document.querySelector('.comments');

//   var newCommentDiv = document.createElement('div');

//   var newCommentMessageP = document.createElement('p');
//   var newCommentMessageNode = document.createTextNode(userMessageComment);
//   newCommentMessageP.appendChild(newCommentMessageNode)

//   var newCommentNameP = document.createElement('p');
//   var newCommentNameNode = document.createTextNode('Posted By: ' + userNameComment);
//   newCommentNameP.appendChild(newCommentNameNode);

//   newCommentDiv.append(newCommentMessageP);
//   newCommentDiv.append(newCommentNameP);

//   var newCommentHR = document.createElement('hr');
  
//   commentsDiv.append(newCommentDiv);
//   createRemoveButton();
//   createCommentButton();
//   commentsDiv.append(newCommentHR);

//   let comments = [];

//   posts[0].comments.push(comments);
// })
