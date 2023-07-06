const postForm = document.getElementById("post-form");
const examplePost = document.querySelector("#example-post");

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = document.getElementById("user-1").value;
  const post = document.getElementById("post-text-1").value;
  const newPost = examplePost.cloneNode(true);
  newPost.classList.remove("hidden");

  newPost.querySelector("#user").innerText = user;
  newPost.querySelector("#post-text").innerText = post;

  const timeStamp = new Date();

  newPost.id = `post ${timeStamp}`;
  examplePost.after(newPost); 

  const commentLink = newPost.querySelector("#comment-link");
  const createComment = newPost.querySelector("#create-comment");

  commentLink.addEventListener("click", () => {
    if (createComment.classList.contains("hidden")) {
      createComment.classList.remove("hidden");

    } else {
      createComment.classList.add("hidden");

    }
  });

  const removePost = newPost.querySelector("#remove-p");

  removePost.addEventListener("click", (e) => {
    e.preventDefault();
    const posts = document.querySelector("#posts");
    posts.removeChild(newPost);
  });

  const commentForm = newPost.querySelector("#comment-form");
  const exampleComment = document.querySelector("#example-comment");

  commentForm.addEventListener("submit", (e) => {
    if (e.target.id === "comment-form") {
      e.preventDefault();

      const commentUser = newPost.querySelector("#user-2").value;
      const commentPost = newPost.querySelector("#comment-text").value;
      const newComment = exampleComment.cloneNode(true);

      newComment.classList.remove("hidden");

      newComment.querySelector("#comment-user").innerText = commentUser;
      newComment.querySelector("#comment-post").innerText = commentPost;

      const commTimeStamp = new Date(); 

      newComment.id = `post ${commTimeStamp}`;
      createComment.before(newComment);

      const removeComm = newComment.querySelector("#remove-c");

      removeComm.addEventListener("click", (e) => {
        e.preventDefault();
        newPost.removeChild(newComment)
      });
    }
  });
});






  