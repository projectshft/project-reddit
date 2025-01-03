document.getElementById('submit').addEventListener('click', function () {

  let name = document.getElementById('name').value;
  let text = document.getElementById('message').value;

  if (!name || !text) {
    alert('Please fill in both name and text.');
    return;
  }

  let postsDiv = document.querySelector('.posts');
  let newPostDiv = document.createElement('div');
  newPostDiv.classList.add('post')

  let commentsButton = document.createElement('a');
  commentsButton.href = "#";
  commentsButton.classList.add('btn', 'comments-btn');
  commentsButton.textContent = 'Comments';
  newPostDiv.append(commentsButton);

  let removeButton = document.createElement('a');
  removeButton.href = "#";
  removeButton.classList.add('btn', 'remove-btn');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function () {
    postsDiv.removeChild(newPostDiv)
  });
  newPostDiv.append(removeButton);

  let newPostTextP = document.createElement('p');
  let newPostTextNode = document.createTextNode(text);
  newPostTextP.appendChild(newPostTextNode);
  
  let newPostNameP = document.createElement('p');
  let newPostNameNode = document.createTextNode('Posted by: ' + name);
  newPostNameP.appendChild(newPostNameNode);
  
  newPostDiv.append(newPostTextP.textContent + " - " + newPostNameP.textContent);
  postsDiv.append(newPostDiv);

  let newPostHR = document.createElement('hr');
  newPostDiv.append(newPostHR);

  document.getElementById('name').value = '';
  document.getElementById('message').value = '';

  let commentSectionVisible = false; 
  commentsButton.addEventListener('click', function () {
    if (commentSectionVisible) {
      newCommentContainer.style.display = 'none';
      commentsButton.textContent = 'Comments';
    } else {
      newCommentContainer.style.display = 'block';
      commentsButton.textContent = 'Hide Comments';
    }
    commentSectionVisible = !commentSectionVisible;
 });

//comment section for comments
  let newCommentContainer = document.createElement('div');
  newCommentContainer.classList.add('new-comment');

  let commentNameInput = document.createElement('input');
  commentNameInput.classList.add('comment-name');
  commentNameInput.placeholder = 'Your name';


  let commentTextInput = document.createElement('input');
  commentTextInput.classList.add('comment-input');
  commentTextInput.placeholder = 'Comment Text';

  let newCommentButton = document.createElement('a');
  newCommentButton.href = "#";
  newCommentButton.classList.add('btn', 'new-comment-btn');
  newCommentButton.textContent = 'Submit Comment'

  newCommentButton.addEventListener('click', function() {
    let commentName = commentNameInput.value;
    let commentText = commentTextInput.value;

    if (!commentName || !commentText) {
      alert('Please fill in both name and text.');
      return;
    }

    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    let commentNameP = document.createElement('p');
    commentNameP.textContent =  'Posted by: ' + commentName;

    let commentTextP = document.createElement('p');
    commentTextP.textContent = commentText;

    let newRemoveButton = document.createElement('a');
    newRemoveButton.href = "#";
    newRemoveButton.classList.add('btn', 'new-remove-btn');
    newRemoveButton.textContent = 'Remove';
    newRemoveButton.addEventListener('click', function () {
    commentDiv.remove();
  });

    commentDiv.append(newRemoveButton, commentTextP.textContent + " - " +  commentNameP.textContent);
    newCommentContainer.appendChild(commentDiv);

    commentNameInput.value = '';
    commentTextInput.value = '';
  })

  newCommentContainer.append(commentNameInput, commentTextInput, newCommentButton);
  newPostDiv.appendChild(newCommentContainer);
  });