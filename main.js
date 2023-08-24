const button = document.querySelector("#submit");
const allPosts = document.querySelector(".posts");
let postList = [];
let postCount = 0;

button.addEventListener("click", () => {
  const postContent = document.querySelector("#post-content").value;
  const userName = document.querySelector("#name").value;

  newPost(postContent, userName);
});

allPosts.addEventListener("click", (event) => {
  if (event.target.classList.contains("comment-section")) {
    const selectedPost = event.target.parentElement.parentElement;
    const commentSectionId = selectedPost.querySelector(".card").parentElement.getAttribute("id");

    console.log(commentSectionId);
  }

  if (event.target.classList.contains("remove-post")) {
    alert("Remove post");
  }
});

const newPost = (postContent, userName) => {
  const post = {
    text: postContent,
    name: userName,
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

  // Comments (num of comments)
  document.querySelector(
    `#post-count-${postCount}`
  ).innerHTML += `<span class="icon-button"  data-bs-toggle="collapse" href="#show-comments-${postCount}" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="fa-solid fa-comments comment-section"></i></span><div class="collapse mt-2" id="show-comments-${postCount}"><div class="card card-body bg-dark">
  <form onsubmit="event.preventDefault();">
            <div class="mb-3">
              <label for="post-comment" class="form-label">Leave a Comment:</label>
              <textarea class="form-control" id="post-comment" rows="3" placeholder="What would you like to say?"></textarea>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="name" placeholder="Name">
            </div>
            <button type="submit" class="btn btn-primary" id="submit-comment">Submit Comment</button>
          </form>
</div>
</div>`;

  // Clear message box
  document.querySelector("#name").value = "";
  document.querySelector("#post-content").value = "";

  // Increment post count
  postCount++;
};
