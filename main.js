// Posts array that will contain the post objects
let posts = [];

// *************** NEW POST ***************
// Listen for a click on the 'post' button
document.getElementById('submit-post').addEventListener('click', function() {
  // Create a string variable to store the text from both text firelds.
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;
  // Create new post object for this post
  let post = {
    name: name,
    message: message,
    comments: []
  }
  // Add this new post object to the posts array
  posts.push(post);
  // Clear the text boxes for the next entry
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
  // Re-render the posts
  renderPosts();
});

// *************** RENDER POST ***************
const renderPosts = function() {
  // Get the posts container element
  let postsContainer = document.querySelector('.posts');
  // Clear the posts container
  postsContainer.innerHTML = '';
  // Loop through the posts array and generate HTML for each post
  posts.forEach(post => {
    // Create the post element
    let postElement = document.createElement('div');
    postElement.innerHTML = `
      <div>
        <button type="button" class="btn btn-danger btn-sm" onclick="deletePost('${post.name}')">Delete</button>
        <button type="button" class="btn btn-primary btn-sm" onclick="viewComments('${post.name}')">Comments</button> 
        ${post.message} - Posted By: ${post.name} 
      </div>
      <div class="comment-section">
        <div class="post-comments"></div>
        <form style="margin-top:30px;" onsubmit="event.preventDefault();">
          <div class="form-group">
            <textarea type="text"
            class="form-control comment-message"
            placeholder="Comment Text"></textarea>
          </div>

          <div class="form-group">
            <input type="text"
            class="form-control comment-name"
            placeholder="Your Name"></input>
          </div>
      
          <button id="submit-comment" class="btn btn-primary" onclick="postComment('${post.name}')">Submit Comment</button>
        </form>
      </div>
      <hr>
    `;
    // Append the post element to the posts container
    postsContainer.appendChild(postElement);
  });
}

// *************** VIEW COMMENTS ***************
const viewComments = function(name) {
  // Find the post name in the array of posts
  let post = posts.find(post => post.name === name);
  // Find index of this post
  let postIndex = posts.indexOf(post);
  // Select comment section of that post
  let commentSection = document.getElementsByClassName('comment-section')[postIndex]; 
  // Toggle view hide comment section
  if (commentSection.classList.contains('show')) {
    commentSection.className = 'comment-section';
  } else {
    commentSection.className += ' show';
  }
  renderComments(post.name);
}


// *************** POST A COMMENT ***************
  const postComment = function(name) {
    // Find the post name in the array of posts
    let post = posts.find(post => post.name === name);
    // Find index of this post
    let postIndex = posts.indexOf(post);
    // Create a string variable to store the text from both text firelds.
    let commentName = document.getElementsByClassName('comment-name')[postIndex].value;
    let commentMessage = document.getElementsByClassName('comment-message')[postIndex].value;
    // Create new comment object for this comment
    let comment = {
      commentName: commentName,
      commentMessage: commentMessage
    }
    // Add this new comment object to the comments array of the corresponding post
    post.comments.push(comment);
    renderComments(post.name);
}

// *************** RENDER COMMENTS ***************
const renderComments = function(name) {
  // Find the post name in the array of posts
  let post = posts.find(post => post.name === name);
  // Get the post comments container element
  let postsCommentsContainer = document.querySelector('.post-comments');
  // Clear the posts container
  postsCommentsContainer.innerHTML = '';
  // Loop through the post comments array and generate HTML for each post
  post.comments.forEach(comment => {
    // Create the post element
    let postCommentElement = document.createElement('div');
    postCommentElement.innerHTML = `
      <div>
        <br>
        <button type="button" class="btn btn-danger btn-sm" onclick="deleteComment('${name, comment.commentName}')">Delete</button>
        ${comment.commentMessage} - Posted By: ${comment.commentName} 
      <hr>
    `;
    // Append the post element to the posts container
    postsCommentsContainer.appendChild(postCommentElement);
  });
}

// *************** DELETE COMMENT ***************
const deleteComment = function(name, commentName) {
  // Find the post name in the array of posts
  let post = posts.find(post => post.name === name);
  // Find the comment in the array of comments
  let comment = post.comments.find(comment => comment.commentName === commentName);
  // Find index of this comment
  let commentIndex = post.comments.indexOf(comment);
  // Remove that item from the array
  post.comments.splice(commentIndex, 1);
  // Re-render the posts
  renderComments(post.name);
}

// *************** DELETE POST ***************
const deletePost = function(name) {
  // Find the post name in the array of posts
  let post = posts.find(post => post.name === name);
  // Find index of this post
  let postIndex = posts.indexOf(post);
  // Remove that item from the array
  posts.splice(postIndex, 1);
  // Re-render the posts
  renderPosts();
}






