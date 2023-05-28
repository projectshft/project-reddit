// Posts array that will contain the post objects
let posts = [];

// *************** NEW POST ***************
// Listen for a click on the 'post' button
document.getElementById('submit').addEventListener('click', function() {
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
        <button type="button" class="btn btn-primary btn-sm" onclick="viewComments()">Comments</button> 
        ${post.message} - Posted By: ${post.name}
      </div>
      <hr>
    `;
    // Append the post element to the posts container
    postsContainer.appendChild(postElement);
  });
}

// *************** VIEW COMMENTS ***************
const viewComments = function(name) {
  // Render Comments
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






