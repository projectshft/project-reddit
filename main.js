// Access posts div
const postsDiv = document.getElementsByClassName('posts')[0];

// Access message div
const postMessage = document.getElementById('message');

// Access name div
const postAuthor = document.getElementById('author');

// Access Submit Post button
const submitPostButton = document.getElementById('submit-post');

// When the Submit Post button is clicked, create a new div under the posts div.
// Example: Text - Posted By: Name
submitPostButton.addEventListener('click', function () {
  
  const authorName = postAuthor.value;
  const messageContent = postMessage.value;

  const postObj = {
    author: authorName,
    message: messageContent,
    comments: [],
  }

  postAuthor.value = "";
  postMessage.value = "";

  renderPost(postObj);

});

const renderPost = function(postObj) {

  // Create a new post div render it within postsDiv
  const newPost = document.createElement('div');
  newPost.setAttribute('class', 'post');

  // Create a link to deconste the post
  const deconstePost = document.createElement('a');
  deconstePost.setAttribute('class', 'link-underline link-underline-opacity-0');
  deconstePost.setAttribute('href', '#');
  deconstePost.innerHTML = 'remove';
  deconstePost.addEventListener('click', function() {
    this.parentElement.remove();
  })
  newPost.appendChild(deconstePost);

  // Create a link to show/hide the comments
  const commentsLink = document.createElement('a');
  commentsLink.setAttribute('class', 'link-underline link-underline-opacity-0');
  commentsLink.setAttribute('href', '#');
  commentsLink.innerHTML = 'comments';
  commentsLink.addEventListener('click', function() {
    const commentsClasses = commentsDiv.classList;
    commentsClasses.contains('d-none') ? commentsClasses.remove('d-none') : commentsClasses.add('d-none');
  })
  newPost.appendChild(commentsLink);

  // Create a paragraph to display the post message and author
  const postContent = document.createElement('p');
  postContent.innerHTML = `${postObj.message} - Posted By: ${postObj.author}`;
  newPost.appendChild(postContent);

  // Create a comments div to contain all the comments and insert it inside the post div
  const commentsDiv = document.createElement('div');
  commentsDiv.setAttribute('class', 'comments d-none');
  newPost.appendChild(commentsDiv);

  // Create an input field for the comment content
  const commentMessage = document.createElement('input');
  commentMessage.setAttribute('placeholder', 'Comment Text');
  commentMessage.setAttribute('id', 'comment-text');

  // Create an input field for the author name
  const commentAuthor = document.createElement('input');
  commentAuthor.setAttribute('placeholder', 'Your Name');

  // Create a button to submit the comment content and author
  const commentsButton = document.createElement('button');
  commentsButton.setAttribute('class', "btn btn-primary submit-comment")
  commentsButton.innerHTML = "Submit Comment";

  // Make the button update the comments Array
  commentsButton.addEventListener('click', function () {

    // Build a comment object
    const comments = postObj.comments;
    const authorName = commentAuthor.value;
    const messageContent = commentMessage.value;
    const commentObj = {
      author: authorName,
      message: messageContent,
    }
    
    comments.push(commentObj);

    // Clear input fields after submitted
    commentAuthor.value = "";
    commentMessage.value = "";
    
    renderComment(comments, commentsDiv);
  });

  // Create a new div for the comments form (By default, it is hidden.)
  const commentsForm = document.createElement('div');
  commentsForm.setAttribute('class', 'comments-form');
  commentsForm.appendChild(commentMessage);
  commentsForm.appendChild(commentAuthor);
  commentsForm.appendChild(commentsButton);

  // Insert the comments form
  commentsDiv.appendChild(commentsForm);

  // Insert a horizontal rule to separate posts
  const divider = document.createElement('hr');
  newPost.appendChild(divider);

  // Insert newPost on the postsDiv
  postsDiv.appendChild(newPost);
};

const renderComment = function(comments, div) {

  const comment = comments[comments.length - 1];

  const newComment = document.createElement('div');
  newComment.setAttribute('class', 'comment');

  const commentsForm = div.getElementsByClassName('comments-form')[0];

  const deconsteComment = document.createElement('a');
  deconsteComment.setAttribute('class', 'link-underline link-underline-opacity-0');
  deconsteComment.setAttribute('href', '#')
  deconsteComment.innerHTML = 'remove';
  deconsteComment.addEventListener('click', function() {
    this.parentElement.remove();
  })

  newComment.appendChild(deconsteComment);

  const commentContent = document.createElement('p');
  commentContent.innerHTML = `${comment.message} - Posted By: ${comment.author}`;
  
  newComment.appendChild(commentContent);

  div.insertBefore(newComment, commentsForm);
};