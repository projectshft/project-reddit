// Access posts div
const postsDiv = document.getElementsByClassName('posts')[0];

// Access message div
let postMessage = document.getElementById('message');

// Access name div
let postAuthor = document.getElementById('author');

// Access Submit Post button
let submitPostButton = document.getElementById('submit-post');

// Example Data Structure
// [{author: 'Jack Reacher', message: 'Hey', comments: []},{author: 'Frances Neagley', message: 'What's up?', comments: []}]

let posts = [];

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

  posts.push(postObj);

  postAuthor.value = "";
  postMessage.value = "";

  renderPost();

});

const renderPost = function() {
  
  // Render a post once. It should include:
  // - an 'a' element that can delete an entire post
  // - an 'a' element that shows/hides the comments div
  // - a 'p' element that contains the post content and post author
  // Each time the comments form is submitted, a new comments object should be appended to the comments Array;
  // and a new div that represents the comment object should be appended between the post and comments form.
  // The new comments div should have a button that removes it.

  // Access the last element in the posts Array, create a new div, and render it within postsDiv
  let postObj = posts[posts.length - 1];
  let newPost = document.createElement('div');
  newPost.setAttribute('class', 'post');

  // Insert the paragraph with the author, message 
  const postContent = document.createElement('p');
  postContent.innerHTML = `${postObj.message} - Posted By: ${postObj.author}`;
  newPost.appendChild(postContent);

  let commentsLink = document.createElement('span');
  commentsLink.innerHTML = 'comments';
  commentsLink.addEventListener('click', function() { //This stops working after a comment is added.
    if (commentsDiv.classList.contains('d-none')) {
      commentsDiv.classList.remove('d-none');
    } else {
      commentsDiv.classList.add('d-none');
    }
  })

  // Insert the comments link
  newPost.appendChild(commentsLink);

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

    // Access the comments Array
    let comments = postObj.comments;

    let authorName = commentAuthor.value;
    let messageContent = commentMessage.value;
  
    let commentObj = {
      author: authorName,
      message: messageContent,
    }
    
    comments.push(commentObj);
    
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

  let commentContent = document.createElement('p');
  commentContent.innerHTML = `${comment.message} - Posted By: ${comment.author}`;
  
  newComment.appendChild(commentContent);

  div.insertBefore(newComment, commentsForm);

};