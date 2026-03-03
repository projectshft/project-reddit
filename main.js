document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
});

//Event Listener on the Submit button
document.querySelector("#submit").addEventListener("click", function () {
  var inputText = document.querySelector("#post-text").value;
  var inputName = document.querySelector("#name").value;
  var postsDiv = document.querySelector(".posts");

  // Create div for posts
  var div = document.createElement("div");
  div.style.backgroundColor = "lightblue";
  div.style.marginBottom = "10px";
  div.style.padding = "10px";

  // Create header wrapper
  var headerDiv = document.createElement("div");
  headerDiv.classList.add("post-header");

  // Create button to remove posts
  var removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.type = "button";
  removeButton.className = "btn btn-primary";
  removeButton.addEventListener("click", function () {
    div.remove();
  });

  // Create button to add comments
  var addComments = document.createElement("button");
  addComments.innerText = "comments";
  addComments.type = "button";
  addComments.className = "btn btn-primary";

  // Comments Section
  var commentsSection = document.createElement("div");
  commentsSection.classList.add("hidden");

  var commentsTextInput = document.createElement("input");
  commentsTextInput.type = "text";
  commentsTextInput.style.margin = "10px";
  commentsTextInput.placeholder = "Comment Text";
  commentsTextInput.className = "form-control";

  var commentsNameInput = document.createElement("input");
  commentsNameInput.type = "text";
  commentsNameInput.style.margin = "10px";
  commentsNameInput.placeholder = "Your Name";
  commentsNameInput.className = "form-control";

  var submitCommentButton = document.createElement("button");
  submitCommentButton.type = "button";
  submitCommentButton.style.margin = "10px";
  submitCommentButton.className = "btn btn-primary";
  submitCommentButton.innerHTML = "Submit Comment";

  commentsSection.append(commentsTextInput);
  commentsSection.append(commentsNameInput);
  commentsSection.append(submitCommentButton);

  addComments.addEventListener("click", function () {
    commentsSection.classList.toggle("hidden");
  });

  // Event listener on the submit comments button
  submitCommentButton.addEventListener("click", function () {
    var commentTextValue = commentsTextInput.value;
    var commentNameValue = commentsNameInput.value;

    var commentText = document.createElement("p");
    commentText.innerText = `${commentTextValue} - Posted By: ${commentNameValue}`;

    commentsSection.append(commentText);

    commentsTextInput.value = "";
    commentsNameInput.value = "";
  });

  var text = document.createElement("p");
  text.innerText = `${inputText} - Posted By: ${inputName}`;

  // Append comments and button to the header div
  headerDiv.append(removeButton);
  headerDiv.append(addComments);
  headerDiv.append(text);

  // Append the header div + the comments section plus the posts
  div.append(headerDiv);
  div.append(commentsSection);
  postsDiv.append(div);

  // Clear the input  placeholders
  document.querySelector("#name").value = "";
  document.querySelector("#post-text").value = "";
});
