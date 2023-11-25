const submitBtn = document.querySelector("#submit");
const posterName = document.querySelector("#name");
const message = document.querySelector("#message");
const posts = document.querySelector('.posts');

let postId = 0;
let commentId = 0;

function createPostDiv(messageValue, posterNameValue, id) {
  const postDiv = document.createElement('div');
  postDiv.classList.add('post-div');
  postDiv.setAttribute('id', `post${postId}`)
  
  const messageP = document.createElement('p');
  const nameP = document.createElement('p');
  const postHR = document.createElement('hr');
  
  messageP.appendChild(document.createTextNode(messageValue));
  nameP.appendChild(document.createTextNode(`Posted By: ${posterNameValue}`));
  
  postDiv.appendChild(messageP);
  postDiv.appendChild(nameP);
  postDiv.appendChild(createCommentButton(id));
  postDiv.appendChild(createPostTrashButton(id))
  postDiv.appendChild(postHR);

  return postDiv;
}

function createCommentDiv(id) {
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment-div', 'hide');
  commentDiv.id = id;
  return commentDiv;
}

function createCommentButton(id) {
  const commentButton = document.createElement('button');
  const commentIcon = document.createElement('i');
  
  commentButton.classList.add('btn', 'btn-secondary');
  commentIcon.classList.add('fa-regular', 'fa-comment');
  
  commentButton.appendChild(commentIcon);

  commentButton.addEventListener('click', () => toggleComments(id))
  
  return commentButton;
}

function deleteThisPost(id) {
  if(confirm('Are you sure you want to delete this post?')){
  document.getElementById(`post${id}`).remove()
}
}

function createPostTrashButton(id) {
  const trashButton = document.createElement('button');
  const trashIcon = document.createElement('i');

  trashButton.classList.add('btn', 'btn-danger');
  trashButton.classList.add('fa-solid', 'fa-trash');

  trashButton.appendChild(trashIcon);

  trashButton.addEventListener('click', () => deleteThisPost(id))

  return trashButton;
}

function deleteThisComment(id) {
  if(confirm('Are you sure you want to delete this comment?')){
  document.getElementById(`comment${id}`).remove()
}
}

function createCommentTrashButton(id) {
    const trashButton = document.createElement('button');
    const trashIcon = document.createElement('i');

    trashButton.setAttribute('style', 'float: right')
  
    trashButton.classList.add('btn', 'btn-danger');
    trashButton.classList.add('fa-solid', 'fa-trash');
  
    trashButton.appendChild(trashIcon);
  
    trashButton.addEventListener('click', () => deleteThisComment(id))
  
    return trashButton;
}

function createCommentForm(postId) {

  const commentForm = document.createElement('form');
  commentForm.setAttribute('id', `commentForm${postId}`)
  commentForm.setAttribute('onsubmit', 'event.preventDefault()');
  commentForm.setAttribute('style', 'margin-top: 30px;');
  
  const nameDiv = document.createElement('div');
  nameDiv.classList.add('form-group', 'comment-name-div');
  
  const contentsDiv = document.createElement('div');
  contentsDiv.classList.add('form-group', 'comment-contents-div');
  
  const nameInput = document.createElement('input');
  nameInput.setAttribute('id', `comment-name-${postId}`);
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('class', 'form-control');
  nameInput.setAttribute('placeholder', 'Your Name');
  
  const commentInput = document.createElement('input');
  commentInput.setAttribute('id', `comment-contents-${postId}`);
  commentInput.setAttribute('type', 'text');
  commentInput.setAttribute('class', 'form-control');
  commentInput.setAttribute('placeholder', 'Comment');
  
  const submitButton = document.createElement('button');
  submitButton.setAttribute('id', 'submit');
  submitButton.setAttribute('class', 'btn btn-primary');
  submitButton.innerHTML = 'Comment';

  const deleteButton = document.createElement('button');
  

  submitButton.addEventListener('click', () => submitComment(nameInput.value, commentInput.value, postId))
  
  nameDiv.appendChild(nameInput);
  contentsDiv.appendChild(commentInput);
  commentForm.appendChild(nameDiv);
  commentForm.appendChild(contentsDiv);
  commentForm.appendChild(submitButton);

  
  return commentForm;
}

function toggleComments(x) {
  const comments = document.getElementById(`${x}`);
  comments.classList.toggle('show');
  comments.classList.toggle('hide');
}

function submitComment(name, comment, pId) {

  if(!name) {
    alert('name cannot be empty')
    return;
  } else if (!comment) {
    alert('comment body cannot be empty')
    return;
  }

  commentId += 1;

  const newCommentDiv = document.createElement('div')
  newCommentDiv.setAttribute('id', `comment${commentId}`)
  const commentContents = document.createTextNode(`${comment} `)
  const commenterName = document.createTextNode(`- Posted By: ${name}`)
  const commentHR = document.createElement('hr')
  newCommentDiv.appendChild(commentContents)
  newCommentDiv.appendChild(commenterName)
  newCommentDiv.appendChild(createCommentTrashButton(commentId))
  newCommentDiv.appendChild(commentHR)
  document.getElementById(`comment-contents-${pId}`).value = ''
  document.getElementById(`comment-name-${pId}`).value = ''
  let commentForm = document.getElementById(`commentForm${pId}`)
  document.getElementById(`${pId}`).insertBefore(newCommentDiv, commentForm)
}

submitBtn.addEventListener('click', () => {
  postId += 1;

  if(!posterName.value) {
    alert('Please enter your name')
    return;
  } else if(!message.value) {
    alert('post cannot be blank')
    return;
  }

  const postDiv = createPostDiv(message.value, posterName.value, postId);
  const commentDiv = createCommentDiv(postId);
  const commentForm = createCommentForm(postId);

  commentDiv.appendChild(commentForm);
  postDiv.appendChild(commentDiv);

  posts.appendChild(postDiv);

  message.value = '';
  posterName.value = '';
});