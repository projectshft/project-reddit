let submitButton = document.getElementById('submit');


submitButton.addEventListener('click', function () {
  // gets values from post input fields
  let userName = document.getElementById('name').value;
  let userMessage = document.getElementById('message').value;

  // selects where to put new post
  const postsDiv = document.querySelector('.item');
  const newPostDiv = document.createElement('div');
    newPostDiv.className = 'posts';
  
  // creates new post
  const newPostMessageP = document.createElement('p');
    newPostMessageP.className = 'post';
  let newPostMessageNode = document.createTextNode(userMessage + ' - Posted By: ' + userName);

  // creates remove button
  const newPostRemoveButton = document.createElement('button');
    newPostRemoveButton.className = 'remove';
    newPostRemoveButton.innerHTML = 'remove';

  // creates comment button
  const newPostCommentButton = document.createElement('button');
    newPostCommentButton.className = 'comments';
    newPostCommentButton.innerHTML = 'comment';

  // creates submit comment button
  const newSubmitCommentButton = document.createElement('button');
    newSubmitCommentButton.className = 'submit-comment';
    newSubmitCommentButton.id = 'submit-comment';
    newSubmitCommentButton.innerHTML = 'submit comment';
    // newSubmitCommentButton.style = 'display: none;'
  

  // creates comment input field
  const newCommentInputField = document.createElement('input');
    newCommentInputField.className = 'form-control-comment';
    newCommentInputField.id = 'comment' + userMessage;
    newCommentInputField.type = 'text';
    // newCommentInputField.style = 'display: none;'
    newCommentInputField.placeholder = 'Your Comment'

  // creates comment input name field
  const newCommentNameInputField = document.createElement('input');
  newCommentNameInputField.className = 'form-control-comment-name';
  newCommentNameInputField.id = 'comment-name' + userName;
  newCommentNameInputField.type = 'text';
  // newCommentNameInputField.style = 'display: none;'
  newCommentNameInputField.placeholder = 'Your Name'  

  // adds line break
  const newPostHR = document.createElement('hr');
    newPostHR.className = "break";
  


  // appends new post to P, adds new remove and comment button to P 
  newPostMessageP.appendChild(newPostMessageNode);
  newPostRemoveButton.append(newPostMessageP);
  newPostCommentButton.append(newPostMessageP);

  // appends all elements to new posts div
  newPostDiv.append(newPostMessageP);
  newPostDiv.append(newPostRemoveButton);
  newPostDiv.append(newPostCommentButton);
  newPostDiv.append(newCommentInputField);
  newPostDiv.append(newCommentNameInputField);
  newPostDiv.append(newSubmitCommentButton);
  
  // appends new posts div to posts div and appends line break to end of posts div
  postsDiv.append(newPostDiv);
  postsDiv.append(newPostHR);
})

// removes closest post to remove button
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('remove')) {
    let closestRemoveButton = e.target.closest('.posts');
      closestRemoveButton.remove('p');
      closestRemoveButton.remove('hr');
  }
  });


// adds comments to closest post
document.addEventListener('click', function (e) {
  let userName = document.getElementById('name').value;
  let userMessage = document.getElementById('message').value;

  if (e.target.classList.contains('submit-comment')) {
    let userNameComment = document.getElementById('comment-name' + userName).value;
    let userComment = document.getElementById('comment' + userMessage).value;

    const postsDiv = document.querySelector('.posts');

  // adds comment P to posts div
    const newCommentP = document.createElement('div');
      newCommentP.className = 'user-comment';
    let newCommentNode = document.createTextNode(userComment + ' - Posted By: ' + userNameComment);

  // adds remove button to each comment added
    const newPostRemoveButton = document.createElement('button');
    newPostRemoveButton.className = 'remove-comment';
    newPostRemoveButton.innerHTML = 'remove';

  // appends comment and remove button to new comment P, appends new comment P to posts div
    newCommentP.append(newPostRemoveButton);
    newCommentP.append(newCommentNode);
    postsDiv.append(newCommentP);
    
  // targets closest posts div
    let closestSubmitCommentButton = e.target.closest('.posts');
        
  // adds new comment to closest posts div
    closestSubmitCommentButton.append(newCommentP);
    
    }
    });

    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('remove-comment')) {
        // removes closest comment to remove button
        const closestCommentRemoveButton = e.target.closest("div")

          $(closestCommentRemoveButton).remove('button');
          $(closestCommentRemoveButton).remove();
          
      }
      });
  






















  

