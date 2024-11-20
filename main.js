const posts = []
const postList = document.getElementById('post-list');
const postBtn = document.getElementById('post-btn');
const lineBreak = document.createElement('br');

function makePost() {
  const postInput = document.getElementById('post-input');
  const posterName = document.getElementById('name-input');
  const postId = Math.random().toString(36).substr(2, 9); 
  if (postInput.value === "" || posterName.value === '')  {
    alert('Both input fields must be entered to make a post.')
    return;
  } else {
    const postDiv = document.createElement('div');
    postDiv.className = 'list-group-item list-group-flush';
    postDiv.id = `post-${postId}`;
    postDiv.innerHTML = `
      <h5><button class='btn btn-info btn-md remove' id='${postId}'>Remove</button> <button class='btn btn-info btn-md comment' id='${postId}'>View Comments</button> ${postInput.value} - Posted By: ${posterName.value}</h5>
      <div id="comment-section-${postId}" class="${postId} d-none"></div>
      <input id="comment-text-${postId}" class="form-control comm-text-input" placeholder="Comment Text" />
      <br>
      <input id="comment-name-${postId}" class="form-control comm-name-input" placeholder="Your Name" />
      <br>
      <button id='${postId}' class="btn btn-primary post-comm">Post Comment</button>
    `;
    postList.appendChild(postDiv);
    posts.push({
      id: postId,
      postText: postInput.value,
      comments: [],
    });
    postInput.value = '';
    posterName.value = '';
  };
};

function commentsRenderToggle(postId) {
  const commentSection = document.querySelector(`#comment-section-${postId}`);
  if (commentSection.classList.contains('d-none')) {
    commentSection.classList.remove('d-none');
  } else {
    commentSection.classList.add('d-none');
  };
};

function postComment(postId) {
  const commId = Math.random().toString(36).substr(2, 9); // Assigns Specific ID to Comments //
  const commTextInput = document.querySelector(`#comment-text-${postId}`);
  const commNameInput = document.querySelector(`#comment-name-${postId}`);
  const commDiv = document.createElement('div');
  commDiv.id = commId;
  commDiv.className = `comment-div ${postId}`;
  const postIndex = posts.findIndex((post) => post.id === postId);
  const commentSection = document.querySelector(`#comment-section-${postId}`);
  // Checks Input Fields //
  if (commTextInput.value === '' || commNameInput.value === '') {
    alert('Both input fields must be entered to post a comment.');
    return;
  } else {
    const commData = `
    <h6><button type='button' class='btn btn-info btn-sm remove-comm' id='${commId}'>Remove</button>
    ${commTextInput.value} - Posted By: ${commNameInput.value}</h6>`;
    commentSection.innerHTML = ''
    commentSection.appendChild(commDiv);
    posts[postIndex].comments.push({
      commentId: commId,
      commentText: commData
    });
    posts[postIndex].comments.forEach(comment => {
      commDiv.innerHTML += comment.commentText;
    });
    commTextInput.value = '';
    commNameInput.value = '';
  };
  // Renders Comments Section to View New Comments IF Comments Are Hidden //
  if (commentSection.classList.contains('d-none')) {
    commentsRenderToggle(postId);
  } else {
    return;
  };
}

postBtn.addEventListener('click', function() {
  makePost();
});

postList.addEventListener('click', function(e) {
  if (e.target.classList.contains('post-comm')) {
    const postId = e.target.id;
    postComment(postId);
  } else if (e.target.classList.contains('comment')) {
    const postId = e.target.id;
    commentsRenderToggle(postId);
  } else if (e.target.classList.contains('remove')) {
    const postId = e.target.id;
    removePost(postId, e);
  } else if (e.target.classList.contains('remove-comm')) {
    const commId = e.target.id;
    const commDiv = e.target.closest('div');
    removeComment(commId, e, commDiv);
  };
});

function removePost(postId, e) {
  const post = posts.findIndex(post => post.id === postId);
  const nearestPost = e.target.closest(`#post-${postId}`);
  posts.splice(post, 1);
  nearestPost.remove();
};

function removeComment(commId, e, commDiv) {
  const postId = commDiv.classList[1];
  const nearestComm = e.target.closest(`h6`);
  const postIndex = posts.findIndex(post => post.id === postId)
  const commentIndex = posts[postIndex].comments.findIndex(comment => comment.commentId === commId);
  if (commentIndex !== -1) {
    posts[postIndex].comments.splice(commentIndex, 1);
    nearestComm.remove();
  };
};