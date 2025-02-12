function randomNumber () {
  return Math.floor(Math.random()*90000) + 10000;
};

function createRemoveLink () {
  var newRemoveLink = document.createElement('a');
  newRemoveLink.href = '#';
  newRemoveLink.textContent = 'remove';

  return newRemoveLink;
};

function createCommentLink () {
  var newCommentLink = document.createElement('a');
  newCommentLink.href = '#';
  newCommentLink.textContent = 'comments';

  return newCommentLink;
};

function removePost(id) {
  var postToRemove = document.getElementById(id);
  postToRemove.remove();
};

function createCommentsSection () {
  var uniqueId = randomNumber();
  var nameInputId = 'comment-name-' + uniqueId;
  var commentTextareaId = 'comment-text-' + uniqueId;

  var form = document.createElement('form');
  form.style.marginTop = '10px';

  var commentTextDiv = document.createElement('div');
  commentTextDiv.className = 'form-group';
  var textarea = document.createElement('textarea');
  textarea.id = commentTextareaId; // Unique ID
  textarea.className = 'form-control';
  textarea.placeholder = 'Comment Text';
  commentTextDiv.appendChild(textarea);

  var nameDiv = document.createElement('div');
  nameDiv.className = 'form-group';
  var nameInput = document.createElement('input');
  nameInput.id = nameInputId; // Unique ID
  nameInput.type = 'text';
  nameInput.className = 'form-control';
  nameInput.placeholder = 'Your Name';
  nameDiv.appendChild(nameInput);

  var submitButton = document.createElement('button');
  submitButton.className = 'btn btn-primary';
  submitButton.textContent = 'Submit Comment';

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    var commentText = document.getElementById(commentTextareaId).value;
    var commentName = document.getElementById(nameInputId).value;

    var newComment = document.createElement('div');
    var newCommentTextP = document.createElement('p');
      
    var newCommentTextNode = document.createTextNode(' ' + commentText + ' - Comment By: ' + commentName);

    var removeLink = createRemoveLink();

    newCommentTextP.appendChild(removeLink);
    newCommentTextP.append(' ');
    newCommentTextP.appendChild(newCommentTextNode);

    newComment.appendChild(newCommentTextP);

    var commentsList = form.parentNode.querySelector('.comments-list');
    commentsList.appendChild(newComment);

    removeLink.addEventListener('click', function (event) {
      event.preventDefault();

      newComment.remove();
    });

    document.getElementById(commentTextareaId).value = '';
    document.getElementById(nameInputId).value = '';
  });  
      
  var newCommentHR = document.createElement('hr');

  form.appendChild(commentTextDiv);
  form.appendChild(nameDiv);
  form.appendChild(submitButton);
  form.appendChild(newCommentHR);

  return form;
}


function createPost () {
  var name = document.getElementById('name').value;
  var text = document.getElementById('message').value;

  var newPostDivContainer = document.createElement('div');
  newPostDivContainer.className = 'post-container';
  newPostDivContainer.id = randomNumber();

  var newPostDiv = document.createElement('div');
  newPostDiv.className = 'post';

  var newPostTextP = document.createElement('p');

  var removeLink = createRemoveLink();

  removeLink.addEventListener('click', function (event) {
    event.preventDefault();

    removePost(newPostDivContainer.id);
  });
  

  var commentsContainer = document.createElement('div');
  commentsContainer.style.display = 'none';

  var commentsList = document.createElement('div');
  commentsList.className = 'comments-list';
  commentsContainer.appendChild(commentsList);
  
  var commentForm = createCommentsSection();
  commentsContainer.appendChild(commentForm);

  var commentLink = createCommentLink();
  
  commentLink.addEventListener('click', function (event) {
    event.preventDefault();
    commentsContainer.style.display =
      commentsContainer.style.display === 'none' ? 'block' : 'none';
  });

  var newPostTextNode = document.createTextNode(' ' + text + ' - Posted By: ' + name);
   
  newPostTextP.appendChild(removeLink);
  newPostTextP.append(' ');
  newPostTextP.appendChild(commentLink);
  newPostTextP.appendChild(newPostTextNode);

  var newPostHR = document.createElement('hr');

  newPostDiv.appendChild(newPostTextP);
  newPostDiv.appendChild(newPostHR);

  newPostDivContainer.appendChild(newPostDiv);
  newPostDivContainer.appendChild(commentsContainer);

  return newPostDivContainer;
};


document.getElementById('submit').addEventListener('click', function (event){
  event.preventDefault();
  
  var newPost = createPost();

  var postsDiv = document.querySelector('.posts');
  postsDiv.append(newPost);

  document.getElementById('message').value = '';
  document.getElementById('name').value = '';
});