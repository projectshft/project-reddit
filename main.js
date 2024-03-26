document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit');
  const postsContainer = document.querySelector('.posts');

  function addPost(name, message) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('panel', 'panel-default');
    postDiv.innerHTML = `
      <div class="panel-heading">${name}</div>
      <div class="panel-body">${message}</div>
      <button class="btn btn-primary toggle-comments">Comments</button>
      <div class="comments-container" style="display: none;">
        <div class="form-group">
          <input type="text" class="form-control comment-name" placeholder="Your Name">
        </div>
        <div class="form-group">
          <textarea class="form-control comment-message" placeholder="Your Comment"></textarea>
        </div>
        <button class="btn btn-success post-comment">Post Comment</button>
        <div class="comments-list"></div>
      </div>
      <button class="btn btn-danger remove-post">Remove</button>
    `;
    postsContainer.appendChild(postDiv);
  }

  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  }

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    addPost(name, message);
    clearForm();
  });

  postsContainer.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('toggle-comments')) {
      const commentsContainer = target.nextElementSibling;
      commentsContainer.style.display = commentsContainer.style.display === 'none' ? 'block' : 'none';
    }

    if (target.classList.contains('remove-post')) {
      const postDiv = target.closest('.panel-default');
      postDiv.remove();
    }

    if (target.classList.contains('post-comment')) {
      const postDiv = target.closest('.panel-default');
      const commentNameInput = postDiv.querySelector('.comment-name');
      const commentMessageInput = postDiv.querySelector('.comment-message');
      const commentName = commentNameInput.value.trim();
      const commentMessage = commentMessageInput.value.trim();

      if (commentName !== '' && commentMessage !== '') {
        const commentsList = postDiv.querySelector('.comments-list');
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-div');
        commentDiv.innerHTML = `<strong>${commentName}</strong>: ${commentMessage}`;
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'delete-comment');
        deleteButton.textContent = 'x';
        commentDiv.appendChild(deleteButton);
        commentsList.appendChild(commentDiv);
        commentNameInput.value = '';
        commentMessageInput.value = '';
      }
    }

    if (target.classList.contains('delete-comment')) {
      const commentDiv = target.closest('.comment-div');
      commentDiv.remove();
    }
  });
});