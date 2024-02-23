
const submitPostButton = document.getElementById("new-post-button");


function deletePost(event) {
  event.preventDefault();

  const postToRemove = this.parentNode;
  postToRemove.remove();

}

function deleteComment(event) {
  event.preventDefault();

  const commentToRemove = this.parentNode;
  commentToRemove.remove();

}

function submitComment(event) {
  event.preventDefault();

  const commentFormText = this.previousElementSibling.children[0].value;
  const commentFormName = this.previousElementSibling.children[1].value;

  const currentPost = this.parentNode;
  const allCommentsDiv = document.createElement('div');
  allCommentsDiv.className = "comments";
  currentPost.append(allCommentsDiv);
  
  const singleCommentDiv = document.createElement('div');
  singleCommentDiv.className = "comment bg-warning";
  allCommentsDiv.append(singleCommentDiv);
  
  const deleteCommentButton = document.createElement("button");
  deleteCommentButton.type = "button";
  deleteCommentButton.className = "btn btn-danger btn-xs";
  deleteCommentButton.innerHTML = "Delete Comment";
  singleCommentDiv.append(deleteCommentButton);
  deleteCommentButton.addEventListener("click", deleteComment);

  const authorName = document.createElement("p");
  authorName.textContent = "comment by: " + commentFormName;
  singleCommentDiv.append(authorName);
  
  const theComment = document.createElement("p");
  theComment.className = "comment-text";
  theComment.textContent = commentFormText;
  singleCommentDiv.append(theComment);

  this.previousElementSibling.style.display = "none";
  this.parentElement.parentElement.children[3].style.display = "block";
  this.style.display = "none";

}

function makeCommentForm(event) {
  event.preventDefault();

  this.style.display = "none";
  

  const newForm = document.createElement('form');
  newForm.id = "comment-form";
  newForm.class = "bg-info"
  
  const newFormGroupDiv = document.createElement('div');
  newFormGroupDiv.className = "form-group";
  
  let commentText = document.createElement('input');
  commentText.type = "text";
  commentText.className = "form-control";
  commentText.placeholder = "Your Comment";

  let commentName = document.createElement('input');
  commentName.type = "text";
  commentName.className = "form-control";
  commentName.placeholder = "Your Name";
 
  
  newFormGroupDiv.append(commentText);
  newFormGroupDiv.append(commentName);
  newForm.append(newFormGroupDiv);
  
  const submitCommentButton = document.createElement('button');
  submitCommentButton.id = "new-comment-button";
  submitCommentButton.type = "button";
  submitCommentButton.className = "btn btn-success btn-sm";
  submitCommentButton.innerHTML = "Submit Comment";
  
  newForm.append(submitCommentButton);
  const targetPost = this.parentNode;
  targetPost.append(newForm);
  
  
  submitCommentButton.addEventListener("click", submitComment);
  

}

function createNewPost(event){
  event.preventDefault();

  const postFormText = document.getElementById("message").value;
  const postFormName = document.getElementById("name").value;

  const allPostsDiv = document.getElementById("posts");
  allPostsDiv.scrollTop = allPostsDiv.scrollHeight;

  const singlePostDiv = document.createElement('div');
  singlePostDiv.className = "post";
  allPostsDiv.append(singlePostDiv);
  
  const deletePostButton = document.createElement("button");
  deletePostButton.type = "button";
  deletePostButton.className = "btn btn-danger btn-xs";
  deletePostButton.innerHTML = "Delete Post";
  singlePostDiv.append(deletePostButton);
  deletePostButton.addEventListener("click", deletePost);

  const authorName = document.createElement("p");
  authorName.textContent = "posted by: " + postFormName;
  singlePostDiv.append(authorName);
  
  const thePost = document.createElement("p");
  thePost.className = "lead";
  thePost.textContent = postFormText;
  singlePostDiv.append(thePost);

  const makeCommentButton = document.createElement("button");
  makeCommentButton.type = "button";
  makeCommentButton.className = "btn btn-success btn-sm";
  makeCommentButton.innerHTML = "Make Comment";
  singlePostDiv.append(makeCommentButton);

  makeCommentButton.addEventListener("click", makeCommentForm);  


}

submitPostButton.addEventListener("click", createNewPost);
