//TODO: add comments div
// initially set display to none and add a show class that toggles when clicking on "comments div"
//TODO: add remove comment
//TODO: hide/show comments

// posts div
var postsDiv = document.querySelector("#posts");
// name input
var nameInput = document.querySelector("#nameInput");
// post input
var postInput = document.querySelector("#postInput");
// comment input
var postButton = document.querySelector("#postButton");
//comments div
var commentsDiv = document.getElementsByClassName("comments")[0];
var trash = document.getElementsByClassName("trash")[0];

var posts = [];

postButton.addEventListener("click", function () {
  // get input value of post
  var postValue = postInput.value;
  console.log(postValue);

  var nameValue = nameInput.value;
  console.log(nameValue);

  var post = {
    post: postValue,
    name: nameValue,
    comments: [],
  };

  posts.push(post);

  console.log(posts);
  // get input value of name
  //store it in a post object
  //push to post array
  renderPost();
});

var renderPost = function () {
  // clear postDiv
  postsDiv.innerHTML = "";
  // loop through posts and add html for post
  var post = "";
  if (posts) {
    posts.forEach(function (singlePost, index) {
      var allComments = singlePost.comments;
      var div = document.createElement("div");
      var singleDiv =
        '<div class="container col-4">' +
        '<div class="card mx-auto my-2 bg-info">' +
        '<div class="card-body p-1">' +
        '<div class="row mx-auto justify-content-end p-1">' +
        '<button class="btn btn-sm btn-danger col-1 trash">' +
        "x" +
        "</button>" +
        "</div>" +
        '<div class="row text-light">' +
        '<p class="card-text text-center">' +
        `${singlePost.post}` +
        "</p>" +
        "</div>" +
        '<div class="row justify-content-around mt-2">' +
        '<p class=" col-5 card-text small">' +
        `Posted By: ${singlePost.name}` +
        "</p>" +
        '<div class="col-7 row">' +
        "<span class='commentsBubble'>" +
        "comments" +
        '<i class="fa-solid fa-comment fa-lg ms-2" style="color: #efebeb;">' +
        "</i>" +
        "</span>" +
        "</div>" +
        "</div>" +
        "</div>";
      var commentForm =
        '<div class="form col-3 p-3 pt-5 bg-info mx-auto my-4 comment-form">' +
        '<form onsubmit="event.preventDefault();"class="container  mx-auto">' +
        '<div class="input-group mb-2">' +
        '<textarea  class="form-control comment-input" type="text" placeholder="Comment Text">' +
        "</textarea>" +
        "</div>" +
        '<div class="input-group mb-2">' +
        '<input class="comment-name-input form-control" type="text" placeholder="Your Name"/>' +
        "</div>" +
        '<button class="btn btn-secondary comment-button">' +
        "Submit Comment" +
        "</button>" +
        "</form>" +
        "</div>";

      div.innerHTML = singleDiv;

      div.setAttribute("data-index", index);
      div.classList.add("post");
      var formDiv = document.createElement("div");
      formDiv.innerHTML = commentForm;
      var commentsInner = "";
      var commentDiv = document.createElement("div");
      commentDiv.classList.add("comments");

      allComments.forEach(function (comment, commentIndex) {
        var singleComment = `<div class="comment text-center my-2" data-comment = ${commentIndex}>${comment.comment} 'written by: ${comment.name} <span class="btn btn-sm btn-danger trash-comment">X</span></div>`;
        commentsInner += singleComment;
      });
      commentsInner += commentForm;
      commentDiv.innerHTML = commentsInner;
      div.appendChild(commentDiv);
      // div.insertBefore(commentDiv, formDiv);
      postsDiv.appendChild(div);
    });
    // add event listener to red x button  to find closest container
    var trashButtons = document.querySelectorAll(".trash");
    var commentButtons = document.querySelectorAll(".comment-button");
    console.log(commentButtons);
    console.log(trashButtons);

    var commentsToToggle = document.querySelectorAll(".commentsBubble");
    // console.log(commentsToToggle);
    commentsToToggle.forEach(function (comment) {
      comment.addEventListener("click", function (event) {
        // if (event.target.classList.contains("show")) {
        //   event.target.classList.remove("show");
        // } else {
        //   event.target.classList.add("show");
        // }
        var commentsDiv =
          event.target.parentNode.parentNode.parentNode.parentNode.parentNode
            .nextElementSibling;

        if (commentsDiv.classList.contains("show")) {
          commentsDiv.classList.remove("show");
        } else {
          commentsDiv.classList.add("show");
        }
      });
    });
    // add event listener to red x button  to find closest container
    trashButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        // gget closest container class and access the  data index to splice the posts array posts.splice(data-index,1)
        var postToRemove = event.target
          .closest(".container")
          .getAttribute("data-index");

        posts.splice(postToRemove, 1);

        //  rerender posts
        renderPost();
      });

      commentButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
          var currNode = event.target.parentNode;
          var currentPost =
            currNode.parentNode.parentNode.parentNode.getAttribute(
              "data-index"
            );
          var comment = event.target.parentNode[0].value;
          console.log(comment);
          var commentAuthor = event.target.parentNode[1].value;
          console.log(commentAuthor);
          var singleComment = { name: commentAuthor, comment: comment };
          console.log(singleComment);
          posts[currentPost].comments.push(singleComment);
          renderPost();
        });
        var commentTrash = document.querySelectorAll(".trash-comment");
        commentTrash.forEach(function (commentRemoveBtn) {
          commentRemoveBtn.addEventListener("click", function (event) {
            var postIndex =
              event.target.parentNode.parentNode.parentNode.getAttribute(
                "data-index"
              );
            console.log(postIndex);
            var commentIndex =
              event.target.parentNode.getAttribute("data-comment");
            console.log(commentIndex);
            console.log(posts[postIndex].comments.splice(commentIndex, 1));
            renderPost();
            // .getAttribute("data-comment");
          });
        });
      });
    });
  } else {
    postsDiv.innerHTML = "";
  }
  nameInput.value = "";
  postInput.value = "";
  console.log(`current number of posts: ${posts.length}`);
};
