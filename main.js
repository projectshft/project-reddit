// enable post editing
// enable comment editing

document.getElementById('submit-post').addEventListener('click', function(event) {
  event.preventDefault();

  const postText = document.getElementById('post-text').value;
  const postName = document.getElementById('post-name').value;

  if (postText === "" || postName === "") {
    alert("Please enter text for your post and your name.")
    return;
  };

  const postContainer = document.querySelector('.posts');
  const individualPostContainer = document.createElement('div');
  // individualPostContainer.classList.add('individual-post-container');
  const individualPost = document.createElement('div');
  // individualPost.classList.add('individual-post');

  const renderedPost = document.createElement('p');
  renderedPost.innerHTML = `${postText} - Posted By: ${postName}`;

  const postSeperator = document.createElement('hr');
  postContainer.appendChild(postSeperator);

  let comments = [];

  const commentButton = document.createElement('a');
  commentButton.classList.add("btn", "btn-link");
  commentButton.innerHTML = `Comment`;

  commentButton.addEventListener('click', function(event) {
    event.preventDefault();

    const commentContainer = document.createElement('div');
    commentContainer.classList.add('form-group');

    const commentTextId = `comment-text-${Date.now()}`;
    const commentText = document.createElement('textarea');
    commentText.placeholder = "Your comment";
    commentText.classList.add("form-control");
    commentText.id = commentTextId;
    commentText.setAttribute("type", "text");

    const commentNameId = `comment-name-${Date.now()}`;
    const commentName = document.createElement('input');
    commentName.placeholder = "Your name";
    commentName.classList.add("form-control");
    commentName.id = commentNameId;
    commentName.setAttribute("type", "text");

    const submitCommentButton = document.createElement("a");
    submitCommentButton.classList.add("btn", "btn-primary", "btn-sm");
    submitCommentButton.innerHTML = "Submit Comment";

    submitCommentButton.addEventListener('click', function(event) {
      event.preventDefault();

      const renderedComment = document.createElement('p');
      renderedComment.style.marginLeft = "20px";
      renderedComment.innerHTML = `${commentText.value} - Comment By: ${commentName.value}`;

      comments.push(renderedComment);
      commentContainer.innerHTML = "";
      comments.forEach(comment => {
        commentContainer.appendChild(comment);
      });

      commentContainer.appendChild(commentButton);
      commentContainer.appendChild(removeButton);
      individualPost.appendChild(commentContainer);
      postContainer.appendChild(postSeperator);
    });

    commentContainer.appendChild(commentText);
    commentContainer.appendChild(commentName);
    commentContainer.appendChild(submitCommentButton);

    individualPost.innerHTML = "";
    individualPost.appendChild(renderedPost);
    individualPost.appendChild(commentContainer);

    postContainer.appendChild(individualPost);
  });
  

  const removeButton = document.createElement('a');
  removeButton.classList.add("btn", "btn-link");
  removeButton.innerHTML = `Remove`;

  removeButton.addEventListener('click', function(event) {
    event.preventDefault();

    const individualPostContainer = document.getElementById("individual-post");
    if (individualPostContainer) {
      individualPostContainer.remove();
      postSeperator.remove();
    };

  });

  individualPost.appendChild(renderedPost);
  individualPost.appendChild(commentButton);
  individualPost.appendChild(removeButton);
  
  postContainer.appendChild(individualPost);
  postContainer.appendChild(postSeperator);

  document.getElementById('post-text').value = "";
  document.getElementById('post-name').value = "";
});

document.getElementById('post-text').addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

document.getElementById('post-name').addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});