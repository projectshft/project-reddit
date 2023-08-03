const Post = (name, message) => {
  const index = null;

  return {
    name,
    message,
    index
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

function createNewPost (name, message) {
  return Post(name, message);
}

function addPost () {
  const newPost = createNewPost(nameInput.value, messageInput.value);

  myPosts.addPostToList(newPost);

  displayPosts(myPosts.posts);
}

function displayPosts (currentPosts) {
  postsDiv.innerHTML = '';
  
  currentPosts.forEach (function (post) {
    const postDiv = document.createElement('div');
    postDiv.setAttribute('data-index', post.index);

    const messageDiv = document.createElement('div')
    messageDiv.innerHTML = post.message;

    const postedByDiv = document.createElement('div')
    postedByDiv.innerHTML = `Posted By: <strong>${post.name}</strong>`;

    const iconDiv = document.createElement('div');
    iconDiv.setAttribute('class', 'icons');

    const deleteEditDiv = document.createElement('div');
    deleteEditDiv.setAttribute('class', 'delete-edit-post');
    deleteEditDiv.innerHTML = '<i class="fa-solid fa-comment"></i> <i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash"></i>'

    const divider = document.createElement('hr');
    divider.setAttribute('class', 'hr');

    iconDiv.appendChild(deleteEditDiv);

    postDiv.appendChild(messageDiv);
    postDiv.appendChild(postedByDiv);
    postDiv.appendChild(iconDiv);
    postDiv.appendChild(divider);

    postsDiv.appendChild(postDiv);

    messageInput.value = '';
    nameInput.value = '';

    // addVoteEventListeners();
    // addDeleteEventListeners();
    // addEditEventListeners();
  })
}