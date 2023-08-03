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

  myPosts.posts.forEach((post) => post.index = myPosts.posts.indexOf(post));

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
    postDiv.appendChild(commentsDiv);
    
    displayNewCommentForm(postDiv);

    postsDiv.appendChild(postDiv);

    messageInput.value = '';
    nameInput.value = '';

    addSubmitCommentEventListeners();
    addToggleCommentsEventListeners();
    // addEditEventListeners();
    addDeletePostEventListeners();
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

function addDeletePostEventListeners () {
  const deleteIcons = document.querySelectorAll('.fa-trash, .post-icon');

  deleteIcons.forEach((icon) => icon.addEventListener('click', deletePost));
}

function addDeleteCommentEventListeners () {
  const deleteIcons = document.querySelectorAll('.fa-trash, .comment-icon');

  deleteIcons.forEach((icon) => icon.addEventListener('click', deleteComment));
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

function deleteComment (e) {
  const post = getPost(e);
  const postIndex = post.dataset.index;

  const comment = getComment(e);
  console.log(comment.dataset.index);
  const commentIndex = comment.dataset.index;

  myPosts.posts[postIndex].comments.splice(commentIndex, 1);

  myPosts.posts[postIndex].comments.forEach((comment) => comment.index =  myPosts.posts[postIndex].comments.indexOf(comment));

  displayComments(post, myPosts.posts[postIndex].comments);
}

function toggleComments (e) {
  const commentDivs = [e.target.parentNode.nextSibling, e.target.parentNode.nextSibling.nextSibling];
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

function getPost (e) {
  return e.target.closest('.new-post');
}

function getComment (e) {
  return e.target.closest('.new-comment');
}

function displayComments (post, currentComments) {
  const commentsDiv = document.querySelector('.comments');
  
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

    const deleteEditDiv = document.createElement('div');
    deleteEditDiv.setAttribute('class', 'delete-edit-post');
    deleteEditDiv.innerHTML = '<i class="fa-solid fa-pen-to-square comment-icon"></i> <i class="fa-solid fa-trash comment-icon"></i>'

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

  addDeleteCommentEventListeners();
}

function displayNewCommentForm (post) {
  const newCommentForm = document.createElement('div');
  newCommentForm.setAttribute('class', 'new-comment-form col-md-12 offset-md-12');
  newCommentForm.innerHTML = '<form style="margin-top:30px;" onsubmit="event.preventDefault();"> <h5>New comment</h5> <div class="form-group"> <textarea id="comment-message" type="text" class="form-control" placeholder="Comment text"></textarea> </div> <div class="form-group"> <input id="comment-name" type="text" class="form-control" placeholder="Your name"></input></div><button id="submit-comment" class="btn btn-primary submit-comment">Submit Comment</button></form>';

  post.appendChild(newCommentForm);
}

