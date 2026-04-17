let count = 0;
let postList = [];

let leavePost = function () {
  const name = document.getElementById("your-name").value;
  const message = document.getElementById("message").value;

  const postDiv = document.querySelector(".post-master");
  let newPostDiv = document.createElement("div");

  //Identifier for Each Post & Array Tracker
  count += 1;
  newPostDiv.className = "main-post";
  newPostDiv.dataset.index = count;
  postList.push(count);

  let removeLink = document.createElement("button");
  let commentsLink = document.createElement("button");
  removeLink.textContent = "remove";
  commentsLink.textContent = "comments";

  removeLink.className = "btn btn-link remove-post";
  commentsLink.className = "btn btn-link comments";
  removeLink.style.marginRight = "10px";
  commentsLink.style.marginRight = "10px";

  const newPostP = document.createElement("span");
  newPostP.className = "span-class";
  const newPostTextNode = document.createTextNode(
    `${message} - Posted By: ${name}`,
  );

  newPostP.appendChild(newPostTextNode);

  let newPostHR = document.createElement("hr");

  //Check if the boxes have text
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
    
  <div class="forms">
  <form style="margin-top:30px;" onsubmit="event.preventDefault();">
    
    <div class="form-group">
      <textarea class="comment-text form-control"
        placeholder="Comment Text"></textarea>
    </div>

    <div class="form-group">
      <input class="comment-name form-control"
        placeholder="Your Name"></textarea>
    </div>

    <button class="btn btn-primary submit-comment" >Submit Comment</button>

  </form>
  </div>
  
`;
  } else {
    alert("Enter your Name & a Post!");
  }
};

document.querySelector("#submit").addEventListener("click", function () {
  leavePost();

  //Reset
  document.getElementById("your-name").value = "";
  document.getElementById("message").value = "";
});

//Add show class to post-list view
document.querySelector(".back-button").addEventListener("click", function () {
  document.querySelector(".single-post-view").classList.remove("show");
  document.querySelector(".main-list-view").classList.add("show");
});

function openSinglePostView(originalPost) {
  const mainListView = document.querySelector(".main-list-view");
  const singlePostView = document.querySelector(".single-post-view");
  const singlePostContainer = document.querySelector(".single-post-container");

  const clonedPost = originalPost.cloneNode(true);

  const commentText = clonedPost.querySelector(".comment-text");
  const forms = clonedPost.querySelector(".forms");
  const removeLink = clonedPost.querySelectorAll(".remove-post");
  const commentsLink = clonedPost.querySelector(".comments");

  if (commentText) {
    commentText.remove();
    forms.remove();
    commentsLink.remove();
  }

  removeLink.forEach(function (link) {
    link.remove();
  });

  singlePostContainer.innerHTML = "";
  singlePostContainer.appendChild(clonedPost);

  singlePostView.classList.add("show");
  mainListView.classList.remove("show");
}

document.querySelector(".post-master").addEventListener("click", function (e) {
  const selectedPost = e.target.closest(".main-post");
  const removePost = e.target.closest(".remove-post");
  const commentBtn = e.target.closest(".comments");
  const submitComment = e.target.closest(".submit-comment");
  const formControl = e.target.closest(".form-control");

  if (removePost) {
    const commentItem = removePost.closest("li");
    const mainPost = removePost.closest(".main-post");

    if (commentItem) {
      commentItem.remove();
    } else if (mainPost) {
      mainPost.remove();
    }

    return;
  }

  if (commentBtn) {
    const post = commentBtn.closest(".main-post");
    const commentList = post.querySelector(".comment-list");
    commentList.classList.toggle("show");
    return;
  }

  if (submitComment) {
    const post = submitComment.closest(".main-post");

    const commentName = post.querySelector(".comment-name").value;
    const commentText = post.querySelector(".comment-text").value;

    const postUl = post.querySelector(".ordered-list");
    let newPostLi = document.createElement("li");
    newPostLi.classList.add("li-post");

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

      post.querySelector(".comment-name").value = "";
      post.querySelector(".comment-text").value = "";
    } else {
      alert("Enter your Name & a Comment!");
    }

    return;
  }

  const span = e.target.closest(".span-class");

  //Post Editor
  if (span) {
    const textArea = document.createElement("textarea");
    textArea.placeholder = "Edit Post Text";
    textArea.className = "form-control";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Edit Post Name";
    nameInput.className = "form-control";

    span.replaceWith(textArea);
    textArea.after(nameInput);

    const submitEdit = function () {
      if (textArea.value.length > 0 && nameInput.value.length > 0) {
        const newText = `${textArea.value} - Posted By: ${nameInput.value}`;
        span.textContent = newText;
        textArea.replaceWith(span);
        nameInput.remove();
      } else {
        alert("Enter a name and text!");
      }
    };

    [textArea, nameInput].forEach(function (i) {
      i.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          submitEdit();
        }
      });
    });

    return;
  }

  if (selectedPost && !formControl) {
    openSinglePostView(selectedPost);
  }
});
