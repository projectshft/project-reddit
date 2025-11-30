var submitBtn = document.getElementsByClassName("btn-default")[0];
var commentBtn = document.getElementsByClassName("btn-comment")[0];
var postInput = document.getElementById("inputPost3");
var nameInput = document.getElementById("inputName3");
var commentInput = document.getElementById("commentInput2");
var commentNameInput = document.getElementById("commentNameInput2");
var postBody = document.getElementsByClassName("posts-body")[0];
var commentBody = document.getElementsByClassName("comment-Body")[0];

/*
1) Submit button should take the post msg and name entered and display on the screen when clicked.
2) A comment should appear under the post. Wrap the comment with the post together when appending.
3) Clear the input boxes.
 */

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  var postValue = postInput.value;
  var nameValue = nameInput.value;

  var postP = document.createElement("p");
  postP.classList.add("postP");
  var textNode = document.createTextNode(`${postValue} - Posted By: ${nameValue} `);

  var removeLink = document.createElement("a");
  removeLink.classList.add("remove"); 
  removeLink.textContent = "Remove";

  var commentLink = document.createElement("a");
  commentLink.classList.add("comment")
  commentLink.textContent = " Comments";

  postP.append(removeLink, commentLink, textNode);

  var commentsDiv = document.createElement("div");
  commentsDiv.classList.add("comments-div");

  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.append(postP, commentsDiv);

  postBody.appendChild(wrapper);

  postInput.value = "";
  nameInput.value = "";
})

/*
1) Within the PostBody div, if a remove tag was clicked, the post should be deleted.
2) If the comment tag was clicked, then make the comment form appear and be able to post a comment associated to the post attached to the comment tag.
*/ 
postBody.addEventListener("click", function (e) {
   if(e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("comment")) {

    var commentForm = document.querySelector(".comment-horizontal");
    var wrapper = e.target.closest(".wrapper");

    wrapper.appendChild(commentForm);
    commentForm.style.display = "block";
  }
})

/*
1) Same as the submitBtn, capture the comment input and name input, create a post
2) create a remove tag only next to a comment, it should be able to delete the comment in a p tag when clicked.
3) locate the wrapper with the associated post, then locate the div inside this wrapper and append the comment within a p tag.
4) clear the input fields and hide the comment form. 
*/ 
commentBtn.addEventListener("click", function (e) {
  e.preventDefault();

  var commentForm = e.target.closest("form");
  var commentValue = commentInput.value;
  var nameValue = commentNameInput.value;

  var p = document.createElement("p");
  var textNode = document.createTextNode(`${commentValue} - Posted By: ${nameValue} `);

  var removeLink = document.createElement("a");
  removeLink.classList.add("remove-comment"); 
  removeLink.textContent = "Remove";

   removeLink.addEventListener("click", function () {
    p.remove();
  });

   p.append(removeLink,textNode);

  var wrapper = commentForm.closest(".wrapper");
  var commentsContainer = wrapper.querySelector(".comments-div");
  commentsContainer.appendChild(p);
 
  commentInput.value = "";
  commentNameInput.value = "";
  commentForm.style.display = "none";
});
