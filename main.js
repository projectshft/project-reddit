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
  const postIndex = getPost(e).dataset.index;

  myPosts.posts.splice(postIndex, 1);

  myPosts.posts.forEach((post) => post.index = myPosts.posts.indexOf(post));

  displayPosts(myPosts.posts);
}

function editPost (e) {
  const postIndex = getPost(e).dataset.index;

  const editedMessage = e.target.form[0].value;
  const editedName = e.target.form[1].value;

  myPosts.posts[postIndex].message = editedMessage;
  myPosts.posts[postIndex].name = editedName;

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
    iconDiv.innerHTML = '<i class="fa-solid fa-comment"></i> <i class="fa-solid fa-pen-to-square post-icon"></i> <i class="fa-solid fa-trash post-icon"></i> <hr>';

    const commentsDiv = document.createElement('div');
    commentsDiv.setAttribute('class', 'comments col-md-12 offset-md-12');

    postDiv.appendChild(messageDiv);
    postDiv.appendChild(postedByDiv);
    postDiv.appendChild(iconDiv);

    displayEditPostForm(postDiv);
    
    postDiv.appendChild(commentsDiv);

    displayNewCommentForm(postDiv);

    postsDiv.appendChild(postDiv);

    messageInput.value = '';
    nameInput.value = '';

    addSubmitCommentEventListeners();
    addToggleCommentsEventListeners();
    addToggleEditPostEventListeners();
    addDeletePostEventListeners();
    addEditPostEventListeners();
  })
}

function addSubmitCommentEventListeners () {
  const submitCommentButtons = document.querySelectorAll('.submit-comment');

  submitCommentButtons.forEach((button) => button.addEventListener('click', addComment));
}

function addToggleCommentsEventListeners () {
  const commentIcons = document.querySelectorAll('.fa-comment');

  commentIcons.forEach((icon) => icon.addEventListener('click', toggleComments));
}

function addToggleEditPostEventListeners () {
  const editIcons = document.querySelectorAll('.fa-pen-to-square.post-icon');

  editIcons.forEach((icon) => icon.addEventListener('click', toggleEditPost));
}

function addEditPostEventListeners () {
  const editPostButtons = document.querySelectorAll('.edit-post');

  editPostButtons.forEach((icon) => icon.addEventListener('click', editPost));
}

function addDeletePostEventListeners () {
  const deleteIcons = document.querySelectorAll('.fa-trash.post-icon');

  deleteIcons.forEach((icon) => icon.addEventListener('click', deletePost));
}

function addDeleteCommentEventListeners () {
  const deleteIcons = document.querySelectorAll('.fa-trash.comment-icon');

  deleteIcons.forEach((icon) => icon.addEventListener('click', deleteComment));
}

// comment functions
function createNewComment (name, message) {
    return Comment(name, message);
}

function addComment (e) {
  const post = getPost(e);
  const postIndex = post.dataset.index;

  const commentNameInput = post.querySelector('#comment-name');
  const commentMessageInput = post.querySelector('#comment-message');

  const newComment = createNewComment(commentNameInput.value, commentMessageInput.value);

  commentNameInput.value = '';
  commentMessageInput.value = '';

  myPosts.posts[postIndex].addCommentToPost(newComment);

  displayComments(post, myPosts.posts[postIndex].comments);
}

function deleteComment (e) {
  const post = getPost(e);
  const postIndex = post.dataset.index;

  const comment = getComment(e);
  const commentIndex = comment.dataset.index;

  myPosts.posts[postIndex].comments.splice(commentIndex, 1);

  myPosts.posts[postIndex].comments.forEach((comment) => comment.index =  myPosts.posts[postIndex].comments.indexOf(comment));

  displayComments(post, myPosts.posts[postIndex].comments);
}

function toggleComments (e) {
  const commentDivs = [e.target.parentNode.nextSibling.nextSibling, e.target.parentNode.nextSibling.nextSibling.nextSibling];
  commentDivs.forEach(function (div) {
    if (div.classList.contains('show')) {
      div.classList.remove('show');
    } else {
      div.classList.add('show');
    }
  })
  
  const post = getPost(e);
  const postIndex = post.dataset.index;

  displayComments(post, myPosts.posts[postIndex].comments)
}

function toggleEditPost (e) {
  const editPostDiv = e.target.parentNode.nextSibling;

  if (editPostDiv.classList.contains('show')) {
    editPostDiv.classList.remove('show');
  } else {
    editPostDiv.classList.add('show');
  }
}

function getPost (e) {
  return e.target.closest('.new-post');
}

function getComment (e) {
  return e.target.closest('.new-comment');
}

function displayComments (post, currentComments) {
  const commentsDiv = post.querySelector('.comments');
  
  commentsDiv.innerHTML = '';

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
    iconDiv.innerHTML = '<i class="fa-solid fa-trash comment-icon"></i> <hr>'

    commentDiv.appendChild(messageDiv);
    commentDiv.appendChild(postedByDiv);
    commentDiv.appendChild(iconDiv);

    commentsDiv.appendChild(commentDiv);
  })

  addDeleteCommentEventListeners();
}

function displayNewCommentForm (post) {
  const newCommentForm = document.createElement('div');
  newCommentForm.setAttribute('class', 'new-comment-form col-md-12 offset-md-12');
  newCommentForm.innerHTML = '<form style="margin-top:30px;" onsubmit="event.preventDefault();"> <h5>New comment</h5> <div class="form-group"> <textarea id="comment-message" type="text" class="form-control" placeholder="Comment text"></textarea> </div> <div class="form-group"> <input id="comment-name" type="text" class="form-control" placeholder="Your name"></input></div><button id="submit-comment" class="btn btn-primary submit-comment">Submit Comment</button></form>';

  post.appendChild(newCommentForm);
}

function displayEditPostForm (post) {
  const editPostForm = document.createElement('div');
  editPostForm.setAttribute('class', 'edit-post-form col-md-12 offset-md-12');

  const postIndex = post.dataset.index;
  const postMessage = myPosts.posts[postIndex].message;
  const postName = myPosts.posts[postIndex].name;

  editPostForm.innerHTML = `<form style="margin-top:30px;" onsubmit="event.preventDefault();"> <h5>Edit post</h5> <div class="form-group"> <textarea id="edit-message" type="text" class="form-control">${postMessage}</textarea> </div> <div class="form-group"> <input id="edit-name" type="text" class="form-control" value="${postName}"></input></div><button id="edit-post" class="btn btn-primary edit-post">Edit Post</button></form>`;

  post.appendChild(editPostForm);
}