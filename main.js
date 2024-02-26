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
  
  let authorName = postAuthor.value;
  let messageContent = postMessage.value;

  let postObj = {
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
  let newPost = document.createElement('div');
  newPost.setAttribute('class', 'post');

  // Create a link to delete the post
  let deletePost = document.createElement('a');
  deletePost.setAttribute('class', 'link-underline link-underline-opacity-0');
  deletePost.setAttribute('href', '#');
  deletePost.innerHTML = 'remove';
  deletePost.addEventListener('click', function() {
    this.parentElement.remove();
  })
  newPost.appendChild(deletePost);

  // Create a link to show/hide the comments
  let commentsLink = document.createElement('a');
  commentsLink.setAttribute('class', 'link-underline link-underline-opacity-0');
  commentsLink.setAttribute('href', '#');
  commentsLink.innerHTML = 'comments';
  commentsLink.addEventListener('click', function() {
    if (commentsDiv.classList.contains('d-none')) {
      commentsDiv.classList.remove('d-none');
    } else {
      commentsDiv.classList.add('d-none');
    }
  })
  newPost.appendChild(commentsLink);

  // Create a paragraph to display the post message and author
  const postContent = document.createElement('p');
  postContent.innerHTML = `${postObj.message} - Posted By: ${postObj.author}`;
  newPost.appendChild(postContent);

  // Create a comments div to contain all the comments and insert it inside the post div
  let commentsDiv = document.createElement('div');
  commentsDiv.setAttribute('class', 'comments d-none');
  newPost.appendChild(commentsDiv);

  // Create an input field for the comment content
  let commentMessage = document.createElement('input');
  commentMessage.setAttribute('placeholder', 'Comment Text');
  commentMessage.setAttribute('id', 'comment-text');

  // Create an input field for the author name
  let commentAuthor = document.createElement('input');
  commentAuthor.setAttribute('placeholder', 'Your Name');

  // Create a button to submit the comment content and author
  let commentsButton = document.createElement('button');
  commentsButton.setAttribute('class', "btn btn-primary submit-comment")
  commentsButton.innerHTML = "Submit Comment";

  // Make the button update the comments Array
  commentsButton.addEventListener('click', function () {

    // Build a comment object
    let comments = postObj.comments;
    let authorName = commentAuthor.value;
    let messageContent = commentMessage.value;
    let commentObj = {
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
  let commentsForm = document.createElement('div');
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

  let comment = comments[comments.length - 1];

  let newComment = document.createElement('div');
  newComment.setAttribute('class', 'comment');

  let commentsForm = div.getElementsByClassName('comments-form')[0];

  let deleteComment = document.createElement('a');
  deleteComment.setAttribute('class', 'link-underline link-underline-opacity-0');
  deleteComment.setAttribute('href', '#')
  deleteComment.innerHTML = 'remove';
  deleteComment.addEventListener('click', function() {
    this.parentElement.remove();
  })

  newComment.appendChild(deleteComment);

  let commentContent = document.createElement('p');
  commentContent.innerHTML = `${comment.message} - Posted By: ${comment.author}`;
  
  newComment.appendChild(commentContent);

  div.insertBefore(newComment, commentsForm);
};