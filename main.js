const Post = (name, message) => {
  const index = null;
  const comments = [];

  const addCommentToPost = (comment) => {
    comments.push(comment);
    comment.index = comments.indexOf(comment);
  }

  return {
    name,
    message,
    index,
    comments,
    addCommentToPost
  }
}

const Comment = (name, message) => {

  return {
    name, 
    message
  }
}

const postList = () => {
  const posts = [];

  const addPostToList = (post) => {
    posts.push(post);
    post.index = posts.indexOf(post);
  }

  return {
    posts, 
    addPostToList
  }
}

myPosts = postList();

const postsDiv = document.querySelector('.posts');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', addPost);

// post functions
function createNewPost (name, message) {
  return Post(name, message);
}

function addPost () {
  const newPost = createNewPost(nameInput.value, messageInput.value);

  myPosts.addPostToList(newPost);

  displayPosts(myPosts.posts);
}

function deletePost (e) {
  const postIndex = e.target.closest('.new-post').dataset.index;

  myPosts.posts.splice(postIndex, 1);

  displayPosts(myPosts.posts);
}

function displayPosts (currentPosts) {
  postsDiv.innerHTML = '';
  
  currentPosts.forEach (function (post) {
    const postDiv = document.createElement('div');
    postDiv.setAttribute('data-index', post.index);
    postDiv.setAttribute('class', 'new-post');

    const messageDiv = document.createElement('div')
    messageDiv.innerHTML = post.message;

    const postedByDiv = document.createElement('div')
    postedByDiv.innerHTML = `Posted By: <strong>${post.name}</strong>`;

    const iconDiv = document.createElement('div');
    iconDiv.setAttribute('class', 'icons');
    iconDiv.innerHTML = '<i class="fa-solid fa-comment"></i> <i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash"></i> <hr>';

    postDiv.appendChild(messageDiv);
    postDiv.appendChild(postedByDiv);
    postDiv.appendChild(iconDiv);
    
    displayNewCommentForm(postDiv);

    postsDiv.appendChild(postDiv);

    messageInput.value = '';
    nameInput.value = '';

    addSubmitCommentEventListener();
    addToggleCommentsEventListeners();
    // addEditEventListeners();
    addDeleteEventListeners();
  })
}

function addSubmitCommentEventListener () {
  const submitCommentButton = document.querySelector('#submit-comment');

  submitCommentButton.addEventListener('click', addComment);
}

function addToggleCommentsEventListeners () {
  const commentIcons = document.querySelectorAll('.fa-comment');

  commentIcons.forEach((icon) => icon.addEventListener('click', toggleComments));
}

function addDeleteEventListeners () {
  const deleteIcons = document.querySelectorAll('.fa-trash');

  deleteIcons.forEach((icon) => icon.addEventListener('click', deletePost));
}

// comment functions
function createNewComment (name, message) {
    return Comment(name, message);
}

function addComment (e) {
  const post = getPost(e);
  const postIndex = post.dataset.index;

  const commentNameInput = document.querySelector('#comment-name');
  const commentMessageInput = document.querySelector('#comment-message');

  const newComment = createNewComment(commentNameInput.value, commentMessageInput.value);

  commentNameInput.value = '';
  commentMessageInput.value = '';

  myPosts.posts[postIndex].addCommentToPost(newComment);

  displayComments(post, myPosts.posts[postIndex].comments);
}

function toggleComments (e) {
  const commentForm = e.target.parentNode.nextSibling;
  if (commentForm.classList.contains('show')) {
    commentForm.classList.remove('show');
  } else {
    commentForm.classList.add('show');
  }

  const post = getPost(e);
  const postIndex = post.dataset.index;

  displayComments(post, myPosts.posts[postIndex].comments)
}

function getPost (e) {
  return e.target.closest('.new-post');
}

function displayComments (post, currentComments) {
  const commentsDiv = document.createElement('div');
  commentsDiv.setAttribute('class', 'comments col-md-12 offset-md-12');

  currentComments.forEach(function (comment) {
    const commentDiv = document.createElement('div');
    commentDiv.setAttribute('data-index', comment.index);
    commentDiv.setAttribute('class', 'new-comment');

    const messageDiv = document.createElement('div')
    messageDiv.innerHTML = comment.message;

    const postedByDiv = document.createElement('div')
    postedByDiv.innerHTML = `Posted By: <strong>${comment.name}</strong>`;

    const iconDiv = document.createElement('div');
    iconDiv.setAttribute('class', 'icons');

    const deleteEditDiv = document.createElement('div');
    deleteEditDiv.setAttribute('class', 'delete-edit-post');
    deleteEditDiv.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash"></i>'

    const divider = document.createElement('hr');
    divider.setAttribute('class', 'hr');

    iconDiv.appendChild(deleteEditDiv);

    commentDiv.appendChild(messageDiv);
    commentDiv.appendChild(postedByDiv);
    commentDiv.appendChild(iconDiv);
    commentDiv.appendChild(divider);

    commentsDiv.appendChild(commentDiv);
  })

  const newCommentForm = document.querySelector(`[data-index="${post.dataset.index}"]`).lastChild;
  post.insertBefore(commentsDiv, newCommentForm);
}

function displayNewCommentForm (post) {
  const newCommentForm = document.createElement('div');
  newCommentForm.setAttribute('class', 'new-comment-form col-md-12 offset-md-12');
  newCommentForm.innerHTML = '<form style="margin-top:30px;" onsubmit="event.preventDefault();"> <h5>New comment</h5> <div class="form-group"> <textarea id="comment-message" type="text" class="form-control" placeholder="Comment text"></textarea> </div> <div class="form-group"> <input id="comment-name" type="text" class="form-control" placeholder="Your name"></input></div><button id="submit-comment" class="btn btn-primary">Submit Comment</button></form>';

  post.appendChild(newCommentForm);
}

