let submitButton = document.getElementById('submit');
let commentSubmitButton = document.getElementById('submit-comment');
let commentInput = document.getElementById('comment');
let commentNameInput = document.getElementById('comment-name');
let submitCommentButton = document.getElementById('submit-comment');




submitButton.addEventListener('click', function () {
  
  var userName = document.getElementById('name').value;
  var userMessage = document.getElementById('message').value;

  var postsDiv = document.querySelector('.item');
  var newPostDiv = document.createElement('div');
    newPostDiv.className = 'posts';
  
  var newPostMessageP = document.createElement('p');
    newPostMessageP.className = 'post';
  var newPostMessageNode = document.createTextNode(userMessage + ' - Posted By: ' + userName);

  var newPostRemoveButton = document.createElement('button');
    newPostRemoveButton.className = 'remove';
    newPostRemoveButton.innerHTML = 'remove';
  var newPostCommentButton = document.createElement('button');
    newPostCommentButton.className = 'comments';
    newPostCommentButton.innerHTML = 'comment';
  // var newPostHR = document.createElement('hr');
  //   newPostHR.className = "break";


  newPostMessageP.appendChild(newPostMessageNode);
  newPostRemoveButton.append(newPostMessageP);
  newPostCommentButton.append(newPostMessageP);

  newPostDiv.append(newPostMessageP);
  newPostDiv.append(newPostRemoveButton);
  newPostDiv.append(newPostCommentButton);
  
  postsDiv.append(newPostDiv);

  

})



commentSubmitButton.addEventListener('click', function (e) {
  var userNameComment = document.getElementById('comment-name').value;
  var userMessageComment = document.getElementById('comment').value;

  var postsDiv = document.querySelector('.posts');

  var newCommentsMessageP = document.createElement('p');
    newCommentsMessageP.className = 'comment';
  var newCommentsMessageNode = document.createTextNode(userMessageComment + ' - Posted By: ' + userNameComment);

  var newCommentsRemoveButton = document.createElement('button');
    newCommentsRemoveButton.className = 'remove-comment';
    newCommentsRemoveButton.innerHTML = 'remove';

  // var newPostHR = document.createElement('hr');
  //   newPostHR.className = "break";

  newCommentsMessageP.appendChild(newCommentsMessageNode);
  newCommentsRemoveButton.append(newCommentsMessageP);
  

  postsDiv.append(newCommentsMessageP);
  postsDiv.append(newCommentsRemoveButton);
  // newCommentsDiv.append(newCommentsHR);

  $(commentInput).hide();
    $(commentNameInput).hide();
    $(submitCommentButton).hide();
});



document.addEventListener('click', function (e) {
  if (e.target.classList.contains('remove')) {
    let closestRemoveButton = e.target.closest('.posts');
      closestRemoveButton.remove('p');
      closestRemoveButton.remove('hr');
  }
  });

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('remove-comment')) {
    let closestRemoveCommentButton = e.target.closest('.posts');
      document.querySelector(".comment").remove();
      document.querySelector(".remove-comment").remove('button');
    //  console.log('click', closestRemoveCommentButton);
  }
  });

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('comments')) {
    let closestCommentButton = e.target.closest('.posts');
    $(commentInput).show();
    $(commentNameInput).show();
    $(submitCommentButton).show();
  }
})







// let removeComments = document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('remove-comment')) {
//     let closestRemoveButton = e.target.closest('.posts');
//     // console.log('click', closestRemoveButton);
//       $('.comment').remove();
//       closestRemoveButton.remove('hr');
//   }
// })
