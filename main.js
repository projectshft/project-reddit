// Access posts div
const postsDiv = document.getElementsByClassName('posts')[0];

// Access message div
let postMessage = document.getElementById('message');

// Access name div
let postAuthor = document.getElementById('author');

// Access Submit Post button
let submitPostButton = document.getElementById('submit');


let posts = [];

// When the Submit Post button is clicked, create a new div under the posts div and include:
// Text - Posted By: Name
submitPostButton.addEventListener('click', function () {
  
  let post = document.createElement('div');
  let postContent = document.createTextNode(`${postMessage.value} - Posted By: ${postAuthor.value}`);
  const divider = document.createElement('hr');

  post.appendChild(postContent);
  postsDiv.appendChild(post);
  postsDiv.appendChild(divider);

});