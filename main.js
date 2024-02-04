// enable post editing
// enable comment editing

document.getElementById('submit-post').addEventListener('click', function(event) {
  event.preventDefault();

  let postText = document.getElementById('post-text').value;
  let postName = document.getElementById('post-name').value;

  let postContainer = document.querySelector('.posts');
  let individualPost = document.createElement('div');
  individualPost.id = "individual-post";

  let renderedPost = document.createElement('p');
  renderedPost.innerHTML = `${postText} - Posted By: ${postName}`;

  let comments = [];

  let commentButton = document.createElement('a');
  commentButton.classList.add("btn", "btn-link");
  commentButton.innerHTML = `Comment`;

  commentButton.addEventListener('click', function(event) {
    event.preventDefault();

    let commentContainer = document.createElement('div');
    commentContainer.classList.add('form-group');

    let commentTextId = `comment-text-${Date.now()}`;
    let commentText = document.createElement('textarea');
    let commentTextValue = document.getElementById(commentTextId);
    commentText.placeholder = "Your comment";
    commentText.classList.add("form-control");
    commentText.id = commentTextId;
    commentText.setAttribute("type", "text");

    let commentNameId = `comment-name-${Date.now()}`;
    let commentName = document.createElement('input');
    let commentNameValue = document.getElementById(commentNameId);
    commentName.placeholder = "Your name";
    commentName.classList.add("form-control");
    commentName.id = commentNameId;
    commentName.setAttribute("type", "text");

    let submitCommentButton = document.createElement("a");
    submitCommentButton.classList.add("btn", "btn-primary", "btn-sm");
    submitCommentButton.innerHTML = "Submit Comment";


    submitCommentButton.addEventListener('click', function(event) {
      event.preventDefault();

      let renderedComment = document.createElement('p');
      renderedComment.innerHTML = `${commentText.value} - Comment By: ${commentName.value}`;

      comments.push(renderedComment);
      commentContainer.innerHTML = "";
      comments.forEach(comment => {
        commentContainer.appendChild(comment);
      });

      commentContainer.appendChild(commentButton);
      commentContainer.appendChild(removeButton);
    });

    commentContainer.appendChild(commentText);
    commentContainer.appendChild(commentName);
    commentContainer.appendChild(submitCommentButton);

    individualPost.innerHTML = "";
    individualPost.appendChild(renderedPost);
    individualPost.appendChild(commentContainer);

    postContainer.appendChild(individualPost);
  });
  

  let removeButton = document.createElement('a');
  removeButton.classList.add("btn", "btn-link");
  removeButton.innerHTML = `Remove`;

  removeButton.addEventListener('click', function(event) {
    event.preventDefault();

    let individualPostContainer = document.getElementById("individual-post");
    if (individualPostContainer) {
      individualPostContainer.remove();
    };

  });

  individualPost.appendChild(renderedPost);
  individualPost.appendChild(commentButton);
  individualPost.appendChild(removeButton);
  
  postContainer.appendChild(individualPost);

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