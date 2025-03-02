// Post Submission Form //
document.getElementById('submit').addEventListener('click', function () {
  var name = document.getElementById('name').value.trim();
  var text = document.getElementById('message').value.trim();

  if (!name || !text) return;

  var postsDiv = document.querySelector('.posts');

  var newPostDiv = document.createElement('div');
  newPostDiv.classList.add('post');

  var postHeader = document.createElement('div');
  postHeader.classList.add('post-header');

  var removeButton = document.createElement('button');
  removeButton.classList.add('remove-post');
  removeButton.textContent = 'remove';

  var commentsButton = document.createElement('button');
  commentsButton.classList.add('toggle-comments');
  commentsButton.textContent = 'comments';

  var newPostP = document.createElement('p');
  newPostP.classList.add('post-text');
  newPostP.innerHTML = `${text} <span class="post-author"> - Posted By: ${name}</span>`;

  postHeader.appendChild(removeButton);
  postHeader.appendChild(commentsButton);
  postHeader.appendChild(newPostP);

  var commentsSection = document.createElement('div');
  commentsSection.classList.add('comments-section');
  commentsSection.style.display = 'none';

  var commentsList = document.createElement('div');
  commentsList.classList.add('comments-list');

  var commentForm = document.createElement('div');
  commentForm.classList.add('comment-form');
  commentForm.innerHTML = `
    <input class="comment-text" type="text" placeholder="Comment Text">
    <input class="comment-name" type="text" placeholder="Your Name">
    <button class="submit-comment">Submit Comment</button>
  `;

  commentsSection.appendChild(commentsList);
  commentsSection.appendChild(commentForm);

  newPostDiv.append(postHeader);
  newPostDiv.append(commentsSection);
  postsDiv.append(newPostDiv);
});

// Toggles Comment Section // 
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('toggle-comments')) {
    var post = event.target.closest('.post');
    var commentsSection = post.querySelector('.comments-section');
    commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
  }
});

// Comment Submission Form //
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('submit-comment')) {
    var post = event.target.closest('.post');
    var commentsList = post.querySelector('.comments-list');
    var commentText = post.querySelector('.comment-text').value.trim();
    var commentName = post.querySelector('.comment-name').value.trim();

    if (!commentText || !commentName) return;

    var newCommentDiv = document.createElement('div');
    newCommentDiv.classList.add('post');

    var commentHeader = document.createElement('div');
    commentHeader.classList.add('post-header');

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-comment');
    deleteButton.textContent = 'X';

    var commentTextP = document.createElement('p');
    commentTextP.classList.add('post-text');
    commentTextP.innerHTML = `${commentText} <span class="post-author"> - Posted By: ${commentName}</span>`;

    commentHeader.appendChild(deleteButton);
    commentHeader.appendChild(commentTextP);

    newCommentDiv.append(commentHeader);
    commentsList.appendChild(newCommentDiv);

    post.querySelector('.comment-text').value = '';
    post.querySelector('.comment-name').value = '';
  }
});

// Comment Deletion //
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-comment')) {
    event.target.closest('.post').remove();
  }
});

// Removes Post //
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('remove-post')) {
    var post = event.target.closest('.post');
    if (post) {
      post.remove();
    }
  }
});

// Extensions //

