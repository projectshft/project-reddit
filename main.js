
// *** We want the user to be able to enter a new post into the text box with a user name, and when the submit button is clicked, a new post is generated.

const createPost = () => {
  // Capture the input from the .user-name and textarea #new-post.
  const $newPostName = $("#new-post-name").val();
  const $newPostMessage = $("#new-post-message").val();
  // Place the newPostText and userName into newPostTemplate
  const newPostTemplate = `<div class="post-wrapper border-bottom pt-3"><div class="post-content"><h4 class="post-heading"><strong class="user-name">${$newPostName}</strong><em> says: </em></h4><p class="post-content lead ml-2">${$newPostMessage}</p></div><div class="form-group text-right"><button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#comment-modal">Leave a comment</button></div></div>`;
  // append the content wrapper with the new post
  $(".content-wrapper").append(newPostTemplate);
};

// Add a click event listener to the submit button to create a post
const $newPostButton = $(".new-post-button");
$newPostButton.click(createPost);

// *** We now want users to be able to leave comments on each post. When a user clicks 'comments' (above each post) it should toggle the comments and input box visible/hidden.
const createComment = () => {

}




// *** When a user clicks the 'x' next to a comment, it should delete it.





// *** When a user fills out the two comment inputs and clicks 'Post Comment' it should immediately add the comment to the list of comments.





// *** Lastly, when a user clicks 'remove' above a post, it should remove the post too.




