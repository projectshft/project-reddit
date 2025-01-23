let button = document.getElementById('postSubmit');

// Post submit button event listener
button.addEventListener('click', function () {
  let usersName = document.getElementById('users-name').value;
  let usersPost = document.getElementById('users-post').value;

  // Ensures both fields are filled out
  if (!usersName || !usersPost) {
    alert("Please fill out both the name and the post fields.");
    return;
  }

  // Wrapper div for grouping all post-related elements
  let postWrapper = document.createElement('div');
  postWrapper.classList.add('post-wrapper');
  postWrapper.style.marginBottom = '20px'; // Optional spacing between posts

  // Post formatting (Name & Post Text)
  // Create the new blockquote element
  let newPostDivBlockQuote = document.createElement('blockquote');

  // Creates the <p> element for the post text
  let postP = document.createElement('p');
  postP.textContent = usersPost;

  // Creates the <small> element for the user's name
  let small = document.createElement('small');
  small.textContent = `Posted By: ${usersName}`;

  // Create the Delete button for the post
  let deletePostButton = document.createElement('button');
  deletePostButton.textContent = 'Delete Post';
  deletePostButton.classList.add('btn', 'btn-danger', 'btn-xs');
  deletePostButton.style.marginTop = '10px';

  // Add functionality to delete the entire post
  deletePostButton.addEventListener('click', function () {
    postWrapper.remove(); // Remove the entire wrapper (all related elements)
  });

  // Appends the <p> and <small> elements to the blockquote
  newPostDivBlockQuote.appendChild(postP);
  newPostDivBlockQuote.appendChild(small);

  // Create the comment thread <div> element
  let commentsThread = document.createElement('div');
  commentsThread.classList.add('comments-thread');

  // Initially, comments thread is hidden
  commentsThread.style.display = 'none';

  // Creates <input> for the commenter's name
  let commenterNameInput = document.createElement('input');
  commenterNameInput.type = 'text';
  commenterNameInput.placeholder = 'Your name...';
  commenterNameInput.classList.add('form-control', 'commenter-name-input');
  commenterNameInput.style.marginBottom = '10px';

  // Creates <input> element field to the comment thread
  let commentInput = document.createElement('input');
  commentInput.type = 'text';
  commentInput.placeholder = 'Your comment here...';
  commentInput.classList.add('form-control', 'comment-input');
  commentInput.style.marginBottom = '10px';

  // Creates 'Add Comment' button within the comment thread
  let addCommentButton = document.createElement('button');
  addCommentButton.textContent = 'Add Comment';
  addCommentButton.classList.add('btn', 'btn-success', 'add-comment-btn');
  addCommentButton.style.marginBottom = '10px';

  let commentsList = document.createElement('ul');
  commentsList.classList.add('comments-list');
  commentsList.style.listStyleType = 'none';
  commentsList.style.padding = '0';

  // Create a title for the comments thread
  let commentTitle = document.createElement('h4');
  commentTitle.textContent = 'Comments Thread';
  commentTitle.style.marginTop = '10px';
  commentTitle.style.marginBottom = '10px';
  commentTitle.style.display = 'none'; // Initially hidden

  addCommentButton.addEventListener('click', function () {
    let commentText = commentInput.value.trim();
    let commenterName = commenterNameInput.value.trim();

    if (commentText && commenterName) {
      // Create the blockquote element
      let commentBlockquote = document.createElement('blockquote');
      // Adds right-aligned styling
      commentBlockquote.classList.add('blockquote-reverse');

      // Creates the <p> for the comment text
      let commentP = document.createElement('p');
      commentP.textContent = `${commentText}`;

      // Create the <footer> for the commenter's name
      let commentFooter = document.createElement('footer');
      commentFooter.textContent = `Comment By: ${commenterName}`;

      // Create the Delete button for the comment
      let deleteCommentButton = document.createElement('button');
      deleteCommentButton.textContent = 'Delete';
      deleteCommentButton.classList.add('btn', 'btn-danger', 'btn-xs');
      deleteCommentButton.style.marginLeft = '10px';

      // Add functionality to delete the comment
      deleteCommentButton.addEventListener('click', function () {
        commentBlockquote.remove();
      });

      // Append the <p>, <footer>, and delete button to the blockquote
      commentBlockquote.appendChild(commentP);
      commentBlockquote.appendChild(commentFooter);
      commentBlockquote.appendChild(deleteCommentButton);

      // Append the blockquote to the comments list
      commentsList.appendChild(commentBlockquote);

      // Clear the input fields
      commentInput.value = '';
      commenterNameInput.value = '';
    } else {
      alert('The Comment or Name field is empty!');
    }
  });

  commentsThread.appendChild(commentTitle);
  commentsThread.appendChild(commenterNameInput);
  commentsThread.appendChild(commentInput);
  commentsThread.appendChild(addCommentButton);
  commentsThread.appendChild(commentsList);

  // Targets the Add Post div container
  let addPostDiv = document.querySelector('.add-a-post');

  // Creates the toggling comment thread button
  let commentThreadButton = document.createElement('button');
  commentThreadButton.textContent = 'View Comments';
  commentThreadButton.classList.add('btn', 'btn-info', 'comment-btn', 'btn-xs');
  commentThreadButton.style.marginTop = '10px';

  commentThreadButton.addEventListener('click', function () {
    if (commentsThread.style.display === 'none') {
      // Shows the comment thread
      commentsThread.style.display = 'block';
      // Hides the Add Post section
      addPostDiv.style.display = 'none';
      // Changes 'View Comments' btn to 'Hide Comments'
      commentThreadButton.textContent = 'Hide Comments';
      // Shows comments title
      commentTitle.style.display = 'block';
    } else {
      // Hides the comment thread
      commentsThread.style.display = 'none';
      // Makes Add Post section visible
      addPostDiv.style.display = 'block';
      // Reverts comment button text
      commentThreadButton.textContent = 'View Comments';
      // Hides comments title
      commentTitle.style.display = 'none';
    }
  });

  // Add an <hr> element below the "View Comments" button
  let commentSeparator = document.createElement('hr');
  commentSeparator.style.margin = '10px 0'; // Add some vertical spacing

  // Append elements to the post wrapper
  postWrapper.appendChild(newPostDivBlockQuote);
  postWrapper.appendChild(commentThreadButton);
  postWrapper.appendChild(deletePostButton);
  postWrapper.appendChild(commentsThread);
  postWrapper.appendChild(commentSeparator);

  // Append the wrapper to the posts div
  let postDiv = document.querySelector('.posts');
  postDiv.appendChild(postWrapper);

  // Clears the text fields
  document.getElementById('users-name').value = '';
  document.getElementById('users-post').value = '';
});
