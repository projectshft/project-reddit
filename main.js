var app = {
  posts: []
};

var postCount = 0;
var postAction = function(el) {

  if (el.id === "post-submit") {
    
    var post = el.parentElement.parentElement;
    
    var exPost = document.querySelector("#example-post");
    var postText = post.querySelector("#post-text-1");
    var userText = post.querySelector("#user-1");

    var newPost = exPost.cloneNode(true);

    postCount++;
    
    newPost.id = `post${postCount}`;
    app.posts.push({post : newPost.id, comments : []});
    newPost.classList.remove("hidden");
    newPost.querySelector("#change-post").innerText = postText.value;
    newPost.querySelector("#change-user").innerText = userText.value;
    exPost.after(newPost);
    renderComment(newPost);

    postText.value = "";
    userText.value = "";
}
}
var posts = app.posts;

var hideComment = function() {
  posts.forEach((item) => {

    var findPost = document.querySelector(`#${item.post}`);

    findPost.addEventListener("click", (e) => {

      var commentButton = findPost.querySelector("#comment-link");

      if (e.target === commentButton) {
        var commentForm = findPost.querySelector(".comment-form");

        e.preventDefault();

        if (commentForm.classList.contains("hidden")) {
          commentForm.classList.remove("hidden");
        } else {
          commentForm.classList.add("hidden");
        }
    }
  })
  })
}

var addComment = function(el) {

  var post = el.parentElement.parentElement;

  var exComment = document.querySelector("#example-comment");
  var commentText = el.querySelector("#comment-text");
  var commentUser = el.querySelector("#user-2");
  var newComment = exComment.cloneNode(true);
  var date = new Date();
  var currentPost = post.id;

  var findPostApp = posts.findIndex((element) => {
    return element.post === currentPost;

  })

  posts[findPostApp].comments.push(`${currentPost}${date}`);

  newComment.classList.remove("hidden");

  newComment.querySelector("#comment-user").innerText = commentUser.value;
  newComment.querySelector("#comment-post").innerText = commentText.value;

  el.before(newComment);

  commentText.value = "";
  commentUser.value = "";

}
var removeAction = function() {
  posts.forEach((item) => {

    var findPost = document.querySelector(`#${item.post}`);

    findPost.addEventListener("click", (e) => {

      var indexItem = posts.indexOf(item);
      var removeButton = findPost.querySelectorAll("#remove");

      Array.from(removeButton).forEach((i) => {
        if (e.target === i) {

          e.preventDefault();
          if (i.classList.contains("remove-c")) {

            var currentComment = i.parentElement;
            currentComment.remove();

            var findCommApp = posts[indexItem].comments.findIndex((element) => {

              return element === currentComment.id;

            })

            posts[indexItem].comments.splice(findCommApp, 1);
            
          } else {

            findPost.remove();
            posts.splice(indexItem, 1);

          }
        } 
      });
    });
  });
}

var postForm = document.querySelector("#post-form");
var postButtons = postForm.querySelectorAll("button");

Array.from(postButtons).forEach(el => {

  el.addEventListener("click", () => {

    postAction(el);
    hideComment();
    removeAction();

  });
});



var renderComment = function(newPost) {

  var commentForm = newPost.querySelectorAll(".comment-form");

  Array.from(commentForm).forEach(el => {

    var commentButton = el.querySelector("button");

    commentButton.addEventListener("click", () => {

      addComment(el);
      removeAction();
    });
  });
}

