const button = document.querySelector("#submit");
const allPosts = document.querySelector(".posts");
let postList = [];
let postCount = 0;
let commentNum = 0;
const error = "One or more input fields is empty."

button.addEventListener("click", () => {
  const postContent = document.querySelector("#post-content").value;
  const userName = document.querySelector("#name").value;
  if (postContent === "" || userName === "") {
    throw error;
  }

  newPost(postContent, userName);
});

allPosts.addEventListener("click", (event) => {
  if (event.target.getAttribute("id") === "submit-comment") {
    newComment(event);
  }

  if (event.target.classList.contains("remove-post")) {
    alert("Remove post");
  }

  // if contains remove-comment... (same procedure, different target)
});

const newPost = (postContent, userName) => {
  const post = {
    text: postContent,
    name: userName,
    comments: [],
  };

  postList.push(post);

  // Populate new post div
  const postDiv = document.createElement("div");
  postDiv.setAttribute("id", `post-count-${postCount}`);
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

  //TODO: add delete button next to comment section button. Have warning pop up saying, "Are you sure you want to delete this post?"
  document.querySelector(
    `#post-count-${postCount}`
  ).innerHTML += `<span class="icon-button"><i class="fa-solid fa-trash-can remove-post"></i></span>`;

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

const newComment = (event) => {
  // Select post
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

  document.querySelector(`.post-comment-section-${postNumber}`).append(commentDiv);
  document.querySelector(`.post-comment-section-${postNumber}`).append(hrDivider);

  //TODO: add delete button next to comment section button. Have warning pop up saying, "Are you sure you want to delete this post?"
  document.querySelector(
    `#comment-number-${commentNum}`
  ).innerHTML += `<span class="icon-button"><i class="fa-solid fa-trash-can remove-post"></i></span>`;

  // Clear message box
  document.querySelector(`#your-name-${postNumber}`).value = "";
  document.querySelector(`#post-comment-${postNumber}`).value = "";

  // Increment comment number
  commentNum++;
};
