const button = document.querySelector("#submit");
const allPosts = document.querySelector(".posts");
let postList = [];
let postCount = 0;
let commentNum = 0;
const error = "One or more input fields is empty.";

// Submit post event listener
button.addEventListener("click", () => {
  const postContent = document.querySelector("#post-content").value;
  const userName = document.querySelector("#name").value;
  if (postContent === "" || userName === "") {
    throw error;
  }

  newPost(postContent, userName);
});

// Posts / comments event listener
allPosts.addEventListener("click", (event) => {
  if (event.target.getAttribute("id") === "submit-comment") {
    newComment(event);
  }

  if (event.target.classList.contains("remove-post")) {
    removePost(event);
  }

  if (event.target.classList.contains("remove-comment")) {
    removeComment(event);
  }

  if (event.target.classList.contains("edit-post")) {
    editPost(event);
  }

});

// Create a new post and add to list of posts
const newPost = (postContent, userName) => {
  const post = {
    text: postContent,
    name: userName,
    comments: [],
  };

  postList.push(post);

  // Update UI
  const postDiv = document.createElement("div");
  postDiv.setAttribute("id", `post-count-${postCount}`);
  postDiv.setAttribute("class", "single-post");
  const postText = document.createTextNode(post.text);

  postDiv.appendChild(postText);

  const lineBreak = document.createElement("br");

  postDiv.appendChild(lineBreak);

  const postedByText = document.createTextNode("Posted by: ");

  postDiv.appendChild(postedByText);

  const boldText = document.createElement("b");
  const name = document.createTextNode(post.name);

  boldText.appendChild(name);

  postDiv.appendChild(boldText);

  const hrDivider = document.createElement("hr");

  document.querySelector(".posts").append(postDiv);
  document.querySelector(".posts").append(hrDivider);

  // Delete button
  document.querySelector(
    `#post-count-${postCount}`
  ).innerHTML += `<span class="icon-button" data-bs-toggle="modal" data-bs-target="#delete-post-modal"><i class="fa-solid fa-trash-can remove-post"></i></span>`;

  // Edit post button
  document.querySelector(
    `#post-count-${postCount}`
  ).innerHTML += `<span class="icon-button" data-bs-toggle="modal" data-bs-target="#edit-post-modal"><i class="fa-solid fa-pen-to-square edit-post"></i></span>`;

  // Comment section
  document.querySelector(
    `#post-count-${postCount}`
  ).innerHTML += `<span class="icon-button"  data-bs-toggle="collapse" href="#show-comments-${postCount}" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="fa-solid fa-comments comment-section"></i></span><div class="collapse mt-2" id="show-comments-${postCount}"><div class="card card-body bg-dark"><div class="post-comment-section-${postCount}"></div>
  <form onsubmit="event.preventDefault();">
            <div class="mb-3">
              <label for="post-comment" class="form-label">Leave a Comment:</label>
              <textarea class="form-control" id="post-comment-${postCount}" rows="3" placeholder="What would you like to say?" required></textarea>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="your-name-${postCount}" placeholder="Name" required>
            </div>
            <button type="submit" class="btn btn-primary" id="submit-comment">Comment</button>
          </form>
</div>
</div>`;

  // Clear message box
  document.querySelector("#name").value = "";
  document.querySelector("#post-content").value = "";

  // Increment post count
  postCount++;
};

// Create new comment
const newComment = (event) => {
  // Post comment falls under
  const selectedPost =
    event.target.parentElement.parentElement.parentElement.parentElement;
  const commentSectionId = selectedPost
    .querySelector(".card")
    .parentElement.getAttribute("id");
  const postNumber = commentSectionId.match(/\d+$/)[0];

  // Get comment data
  const commentContent = document.querySelector(
    `#post-comment-${postNumber}`
  ).value;
  const userName = document.querySelector(`#your-name-${postNumber}`).value;

  if (commentContent === "" || userName === "") {
    throw error;
  }

  const comment = {
    text: commentContent,
    name: userName,
  };

  // Push comment to post object
  postList[postNumber].comments.push(comment);

  // Update UI
  const commentDiv = document.createElement("div");
  commentDiv.setAttribute("id", `comment-number-${commentNum}`);
  commentDiv.setAttribute("class", "single-comment");
  const commentText = document.createTextNode(comment.text);

  commentDiv.appendChild(commentText);

  const lineBreak = document.createElement("br");

  commentDiv.appendChild(lineBreak);

  const postedByText = document.createTextNode("Posted by: ");

  commentDiv.appendChild(postedByText);

  const boldText = document.createElement("b");
  const name = document.createTextNode(comment.name);

  boldText.appendChild(name);

  commentDiv.appendChild(boldText);

  const hrDivider = document.createElement("hr");

  document
    .querySelector(`.post-comment-section-${postNumber}`)
    .append(commentDiv);
  document
    .querySelector(`.post-comment-section-${postNumber}`)
    .append(hrDivider);

  // Delete comment button
  document.querySelector(
    `#comment-number-${commentNum}`
  ).innerHTML += `<span class="icon-button" data-bs-toggle="modal" data-bs-target="#delete-comment-modal"><i class="fa-solid fa-trash-can remove-comment"></i></span>`;

  // Clear message box
  document.querySelector(`#your-name-${postNumber}`).value = "";
  document.querySelector(`#post-comment-${postNumber}`).value = "";

  // Increment number of comments
  commentNum++;
};

const removePost = (event) => {
  // Add delete button event listener
  const deletePostButton = document.querySelector(".delete-post-button");

  deletePostButton.addEventListener("click", deletePost);

  // Delete selected post
  function deletePost() {
    document.querySelector('[data-bs-dismiss="modal"]').click();
    event.target.closest(".single-post").nextSibling.remove();
    event.target.closest(".single-post").remove();
    removeHandler();
  }

  function removeHandler() {
    deletePostButton.removeEventListener("click", deletePost);
  }
};

const removeComment = (event) => {
  // Add delete button event listener
  const deleteCommentButton = document.querySelector(".delete-comment-button");

  deleteCommentButton.addEventListener("click", deleteComment);

  // Delete selected comment
  function deleteComment() {
    document.querySelector("#comment-exit-button").click();
    event.target.closest(".single-comment").nextSibling.remove();
    event.target.closest(".single-comment").remove();
    removeHandler();
  }

  function removeHandler() {
    deleteCommentButton.removeEventListener("click", deleteComment);
  }
};

// Edit a selected post
const editPost = (event) => {
  const selectedPost = event.target.closest(".single-post").getAttribute("id");
  const postNumber = selectedPost.match(/\d+$/)[0];

  // Remove old text area
  document.querySelector("#edit-post-textarea").remove();
  
  // Update UI
  const newTextarea = document.createElement("textarea");
  newTextarea.setAttribute("class", "bg-dark text-light");
  newTextarea.setAttribute("id", "edit-post-textarea");
  const oldText = document.createTextNode(postList[postNumber].text);
  newTextarea.appendChild(oldText);

  document.querySelector(".post-textarea-wrapper-div").append(newTextarea);

  // Submit edit event listener
  const submitEditButton = document.querySelector(".edit-post-submit-buttton");

  submitEditButton.addEventListener("click", submitEdit);

  // Update editor textarea
  function submitEdit() {
    postList[postNumber].text = document.querySelector(
      "#edit-post-textarea"
    ).value;
    document.querySelector("#edit-post-exit-button").click();
    const originalPostDiv = document.querySelector(`#post-count-${postNumber}`);
    const newText = document.createTextNode(postList[postNumber].text);
    originalPostDiv.querySelector("br").previousSibling.replaceWith(newText);
    removeHandler();
  }

  function removeHandler() {
    submitEditButton.removeEventListener("click", submitEdit);
  }
};
