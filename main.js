// Handle new post submission
document.getElementById('submit').addEventListener('click', function () {
  // Get and trim input values
  const name = document.getElementById('name').value.trim();
  const text = document.getElementById('message').value.trim();

  // Clear inputs
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';

  // Validate input
  if (!name || !text) {
    alert("Please fill out both fields!");
    return;
  }

  // Create post

  const postsDiv = document.querySelector('.posts');

  // Post container
  const postPanel = document.createElement('div');
  postPanel.className = 'panel panel-default';

  const postBody = document.createElement('div');
  postBody.className = 'panel-body';

  // Post content
  const postText = document.createElement('p');
  postText.textContent = `${text} - Posted By: ${name}`;
  postText.style.marginTop = '10px';
  postText.style.marginBottom = '15px';

  // Action buttons
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove Post';
  removeButton.className = 'btn btn-danger btn-xs';

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comments';
  commentButton.className = 'btn btn-default btn-xs';

  //Create comment section

  const commentsDiv = document.createElement('div');
  commentsDiv.style.display = 'none';

  const commentsList = document.createElement('div');
  commentsList.style.marginTop = '10px';

  const commentInput = document.createElement('input');
  commentInput.className = 'form-control';
  commentInput.placeholder = 'Comment';

  const nameInput = document.createElement('input');
  nameInput.className = 'form-control';
  nameInput.placeholder = 'Your Name';

  const postCommentButton = document.createElement('button');
  postCommentButton.textContent = 'Post';
  postCommentButton.className = 'btn btn-primary btn-sm';

  // Assemble comment section
  commentsDiv.appendChild(commentsList);
  commentsDiv.appendChild(commentInput);
  commentsDiv.appendChild(nameInput);
  commentsDiv.appendChild(postCommentButton);

  // Assemble post
  postBody.appendChild(removeButton);
  postBody.appendChild(commentButton);
  postBody.appendChild(postText);
  postBody.appendChild(commentsDiv);

  postPanel.appendChild(postBody);
  postsDiv.appendChild(postPanel);

  // Buttons

  // Remove entire post
  removeButton.addEventListener('click', function () {
    postPanel.remove();
  });

  // Toggle comment section 
  commentButton.addEventListener('click', function () {
    commentsDiv.style.display = (commentsDiv.style.display === 'none') ? 'block' : 'none';
  });

  // Handle comment submission
  postCommentButton.addEventListener('click', function () {
    const commentText = commentInput.value.trim();
    const commenterName = nameInput.value.trim();

    // Validate comment input
    if (!commentText || !commenterName) {
      alert("Please fill out both fields!");
      return;
    }

    // Add well for first comment
    if (commentsList.children.length === 0) {
      commentsList.className = 'well well-sm';
    }

    // Create comment element
    const comment = document.createElement('p');
    comment.textContent = `${commentText} - Posted By: ${commenterName}`;

    // Create remove link for comment
    const removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.textContent = ' x';
    removeLink.style.marginLeft = '10px';
    removeLink.style.color = 'red';
    removeLink.style.cursor = 'pointer';

    removeLink.addEventListener('click', function (e) {
      e.preventDefault();
      comment.remove();
    });

    comment.appendChild(removeLink);
    commentsList.appendChild(comment);

    // Clear comment inputs
    commentInput.value = '';
    nameInput.value = '';
  });
});