let submitComment = document.getElementsByClassName("submit-comment")[0];

let submitPost = document.getElementsByClassName("submit-post")[0];

// * let body = document.getElementsByClassName("body");
let commentList = document.getElementsByClassName("commentList")[0];

// * comment text input
let commentText = document.getElementsByClassName("commentInputText")[0];

// * comment name input
let commentName = document.getElementsByClassName("commentInputName")[0];

// * Stored Post index
let selectedPostIndex;

// * holds posts
let postArr = [];

// * Post Text Input
let postText = document.getElementsByClassName("postInputText")[0];

// * Post Name Input
let postName = document.getElementsByClassName("postInputName")[0];

// * Post Container
let postList = document.getElementsByClassName("postList")[0];

// * Container holding all clicks
let contentContainer = document.getElementsByClassName("contentContainer")[0];

postList.addEventListener("click", function (e) {
  // * Comment Button

  if (e.target.classList.contains("comment")) {
    selectedPostIndex = Number(e.target.dataset.index);

    console.log("Selected Post:", selectedPostIndex);
  }

  // * Remove Button

  if (e.target.classList.contains("remove")) {
    let index = Number(e.target.dataset.index);

    postArr.splice(index, 1);
    renderPost();
    selectedPostIndex = undefined;
  }
});
// * slightly used AI to give me this part. Everything else I only had it teach me. Never give answers.
submitComment.addEventListener("click", function (e) {
  if (selectedPostIndex === undefined) {
    alert("You need to click the post you want to comment on!!!!!!!!");
    return;
  }
  if (commentText.value.trim() === "" || commentName.value.trim() === "") {
    alert("you need to put something in the comment Text and Your Name field!!~!~!~!~!~!~!~~~!#%%^%@");
    return;
  }

  // *

  let comment = {
    text: commentText.value,
    name: commentName.value
  };

  console.log("submit comment clicked", selectedPostIndex);
  postArr[selectedPostIndex].comments.push(comment);

  commentText.value = "";

  commentName.value = "";

  renderPost();
});

submitPost.addEventListener("click", function () {
  if (postText.value.trim() == "" || postName.value.trim() == "") {
    alert("you need to put something in the Post Text and Your Name field!!~!~!~!~!~!~!~~~!#%%^%@");
    return;
  }
  let post = {
    text: postText.value,
    name: postName.value,
    comments: []
  };

  postArr.push(post);

  postText.value = "";
  postName.value = "";

  renderPost();
});

let renderPost = function () {
  let postHTML = "";

  for (var i = 0; i < postArr.length; i++) {
    let commentsHTML = "";

    postArr[i].comments.forEach(function (comment) {
      commentsHTML += "<div>" + comment.text + " - Posted by: " + comment.name + "</div>";
    });

    postHTML +=
      "<div>" +
      "<button class='remove' data-index='" +
      i +
      "'>Remove</button>" +
      "<button class='comment' data-index='" +
      i +
      "'>Comments</button>" +
      "<div class='text'>" +
      postArr[i].text +
      " - Posted by: " +
      postArr[i].name +
      "</div>" +
      "<div class='comments'>" +
      commentsHTML +
      "</div>" +
      "</div>";
  }
  postList.innerHTML = postHTML;
};
