var posts = document.getElementById("posts")
var postList = document.getElementsByClassName('post');
let postCount = 0;
var poster = document.getElementById("poster");
var post = document.getElementById("post");
const submitPost = document.getElementById("submitPost");



submitPost.addEventListener("click", function () {
  if (post.value === '' && poster.value === '') {
    alert('Oops! Looks like you hit submit by accident. Make sure you add your post text and name below.')
  } else {
    postCount++;

    

    posts.insertAdjacentHTML("beforeend", `
      <div class="post col-10 border-bottom p-2 fs-5" id="post-${postCount}">
        <button class="btn btn-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#post${postCount}CommentThread" aria-expanded="false" aria-controls="commentThread"><i class="bi bi-reply"></i></button>
        <button id="delete" class="delete btn btn-secondary btn-sm"><i class="bi bi-x"></i></button>
        ${post.value} - Posted By: ${poster.value}
        <div class="collapse" id="post${postCount}CommentThread">
          <div class="row justify-content-md-center" id="post${postCount}-comments"></div>
          <div class="row justify-content-md-center">
            <div class="col-10 mt-3 fs-5">
              <textarea
                id="post${postCount}-comment"
                class="form-control"
                placeholder="Comment Text"
              ></textarea>
            </div>
          </div>
          <div class="row justify-content-md-center">
            <div class="col-10 mt-3 fs-5">
              <input
                id="post${postCount}-commenter"
                type="text"
                class="form-control"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div class="row justify-content-md-center">
            <div class="col-10 mt-3 align-self-start">
              <button id="post${postCount}-submitComment" type="button" class="btn btn-primary">
                Submit Comment
              </button>
            </div>
          </div>
        </div>
      </div>`);
  
    poster.value = ''; 
    post.value = '';

    var comments = document.getElementById(`post${postCount}-comments`)
    let commentCount = 0;
    var commenter = document.getElementById(`post${postCount}-commenter`);
    var comment = document.getElementById(`post${postCount}-comment`);
    const submitComment = document.getElementById(`post${postCount}-submitComment`);
  
    submitComment.addEventListener("click", function () {
      commentCount++;
      
      comments.insertAdjacentHTML("beforeend", `
        <div class="comment col-9 border-bottom p-2 fs-5" id="comment-${commentCount}">
          <button id="delete" class="delete btn btn-secondary btn-sm" href=""><i class="bi bi-x"></i></button>
          ${comment.value} - Posted By: ${commenter.value}
        </div>`);
    
      comment.value = ''; 
      commenter.value = '';

      const deleteBtns = Array.from(document.getElementsByClassName('delete'));

      deleteBtns.forEach(function (button) {
        button.addEventListener('click', function () {
          button.parentElement.remove();
        });
      });
    });

    const deleteBtns = Array.from(document.getElementsByClassName('delete'));

    deleteBtns.forEach(function (button) {
      button.addEventListener('click', function () {
        button.parentElement.remove();
      });
    });
  };
});