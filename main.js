let leavePost = function () {
  const name = document.getElementById("your-name").value;
  const message = document.getElementById("message").value;

  const postDiv = document.querySelector(".post-master");
  let newPostDiv = document.createElement("div");
  newPostDiv.className = "post";

  let removeLink = document.createElement("button");
  let commentsLink = document.createElement("button");
  removeLink.textContent = "remove";
  commentsLink.textContent = "comments";

  removeLink.className = "btn btn-link remove-post";
  commentsLink.className = "btn btn-link comments";
  removeLink.style.marginRight = "10px";
  commentsLink.style.marginRight = "10px";

  const newPostP = document.createElement("span");
  const newPostTextNode = document.createTextNode(
    `${message} - Posted By: ${name}`,
  );

  newPostP.appendChild(newPostTextNode);

  let newPostHR = document.createElement("hr");

  if (name.length > 0 && message.length > 0) {
    newPostDiv.append(newPostHR);
    newPostDiv.append(removeLink);
    newPostDiv.append(commentsLink);
    newPostDiv.append(newPostP);

    postDiv.append(newPostDiv);

    //Create Ordered List attached to this post
    let newPostDiv2 = document.createElement("div");
    let commentList = document.createElement("ul");

    newPostDiv2.className = "comment-list";
    commentList.className = "ordered-list";
    newPostDiv2.append(commentList);
    newPostDiv.append(newPostDiv2);

    newPostDiv2.innerHTML += `
  <form style="margin-top:30px;" onsubmit="event.preventDefault();">
    
    <div class="form-group">
      <textarea id="comment-text"
        class="form-control"
        placeholder="Comment Text"></textarea>
    </div>

    <div class="form-group">
      <textarea id="comment-name"
        class="form-control"
        placeholder="Your Name"></textarea>
    </div>

    <button class="btn btn-primary submit-comment" >Submit Comment</button>

  </form>
`;
  }
};

document.querySelector("#submit").addEventListener("click", function () {
  leavePost();

  document.getElementById("your-name").value = "";
  document.getElementById("message").value = "";
});

document.querySelector(".post-master").addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-post")) {
    e.target.closest(".post").remove();
  }
});

//Toggle Comments on and Off
document.querySelector(".post-master").addEventListener("click", function (e) {
  if (e.target.classList.contains("comments")) {
    const post = e.target.closest(".post");

    const commentList = post.querySelector(".comment-list");

    commentList.classList.toggle("show");
  }
});

//Leave New Comment on Post
document.querySelector(".post-master").addEventListener("click", function (e) {
  if (e.target.classList.contains("submit-comment")) {
    const post = e.target.closest(".post");

    const commentName = post.querySelector("#comment-name").value;
    const commentText = post.querySelector("#comment-text").value;

    const postUl = post.querySelector(".ordered-list");
    let newPostLi = document.createElement("li");
    newPostLi.className = "post";

    let removeLink = document.createElement("button");
    removeLink.textContent = "remove";

    removeLink.className = "btn btn-link remove-post";
    removeLink.style.marginRight = "10px";

    const newPostP = document.createElement("span");
    newPostP.textContent = `${commentText} - Posted By: ${commentName}`;

    let newPostHR = document.createElement("hr");

    if (commentName.length > 0 && commentText.length > 0) {
      newPostLi.append(newPostHR);
      newPostLi.append(removeLink);
      newPostLi.append(newPostP);

      postUl.append(newPostLi);

      //Prevent Reassignment Resulting in Error
      if (postUl.querySelectorAll("li").length > 0) {
        postUl.classList.add("posts-plus");
      }

      post.querySelector("#comment-name").value = "";
      post.querySelector("#comment-text").value = "";
    }
  }
});
