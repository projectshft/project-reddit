//declare variables to use often, so it's easier to reference
const submitBtn = document.querySelector("#submit");
const posterName = document.querySelector("#name");
const message = document.querySelector("#message");
const posts = document.querySelector('.posts');

//create ID variables to give each post and comment a unique ID
let postId = 0;
let commentId = 0;

//create a function that will create the div for the post from the values of the form
function createPostDiv(messageValue, posterNameValue, id) {

  //create the div and give it class and id
  const postDiv = document.createElement('div');
  postDiv.classList.add('post-div');
  postDiv.setAttribute('id', `post${postId}`);
  
  //create the other elements of the post
  const messageP = document.createElement('p');
  const nameP = document.createElement('p');
  const postHR = document.createElement('hr');
  
  //add text nodes from the form as children of the elements created
  messageP.appendChild(document.createTextNode(messageValue));
  nameP.appendChild(document.createTextNode(`Posted By: ${posterNameValue}`));
  
  //append all parts of the post component to the post
  postDiv.appendChild(messageP);
  postDiv.appendChild(nameP);
  postDiv.appendChild(createCommentButton(id));
  postDiv.appendChild(createPostTrashButton(id));
  postDiv.appendChild(postHR);

  //return the post so it can be called in the event listener for the submit button
  return postDiv;
}

//create div for the section with the comments and the comment form
function createCommentDiv(id) {
  const commentDiv = document.createElement('div');
  //give it class hide so that it is hidden until the button is pressed
  commentDiv.classList.add('comment-div', 'hide');
  //set the id of the div equal to the id passed to it from the call in the event listener for the submit button
  commentDiv.id = id;
  return commentDiv;
}

//create function to toggle the display of the comments section
function toggleComments(id) {
  const comments = document.getElementById(`${id}`);
  comments.classList.toggle('show');
  comments.classList.toggle('hide');
}

//create the button to toggle the comment section
function createCommentButton(id) {
  //create button with icon
  const commentButton = document.createElement('button');
  const commentIcon = document.createElement('i');
  //add classes for styling and inserting fontawesome icon
  commentButton.classList.add('btn', 'btn-secondary');
  commentIcon.classList.add('fa-regular', 'fa-comment');
  //append icon to button
  commentButton.appendChild(commentIcon);
  //add event listener with callback to toggle the comments, pass in the id passed in from the submit button
  commentButton.addEventListener('click', () => toggleComments(id));
  
  return commentButton;
}

//create a function to delete a post
function deleteThisPost(id) {
  if(confirm('Are you sure you want to delete this post?')){
    document.getElementById(`post${id}`).remove();
  }
}

//create a trash button for the post
function createPostTrashButton(id) {
  //create the button
  const trashButton = document.createElement('button');
  const trashIcon = document.createElement('i');
  //add classes for the style and font awesome icon
  trashButton.classList.add('btn', 'btn-danger');
  trashButton.classList.add('fa-solid', 'fa-trash');
  //append the icon to the button
  trashButton.appendChild(trashIcon);
  //addd event listener to evoke callback to delete the post
  trashButton.addEventListener('click', () => deleteThisPost(id));

  return trashButton;
}

//create a function to delete a comment
function deleteThisComment(id) {
  if(confirm('Are you sure you want to delete this comment?')){
    document.getElementById(`comment${id}`).remove();
  }
}

//create a trash button for the comment
function createCommentTrashButton(id) {
  //create the button
  const trashButton = document.createElement('button');
  const trashIcon = document.createElement('i');
  //float it to the right for style
  trashButton.setAttribute('style', 'float: right');
  //add classes for fontawesome and style
  trashButton.classList.add('btn', 'btn-danger');
  trashButton.classList.add('fa-solid', 'fa-trash');
  //append trash icon to trash button
  trashButton.appendChild(trashIcon);
  //add event listener that deletes the comment
  trashButton.addEventListener('click', () => deleteThisComment(id));

  return trashButton;
}

//create a function that creates a comment div under the post
function submitComment(name, comment, pId) {
  //check that the name and comment are not blank
  if(!name) {
    alert('name cannot be empty');
    return;
  } else if (!comment) {
    alert('comment body cannot be empty');
    return;
  }

  //increase the comment ID to create unique comment IDs with each submission
  commentId += 1;

  //create the div for the new comment and give it the unique ID
  const newCommentDiv = document.createElement('div');
  newCommentDiv.id = `comment${commentId}`;
  //create the text for the comment and a thematic break
  const commentContents = document.createTextNode(`${comment} `);
  const commenterName = document.createTextNode(`- Posted By: ${name}`);
  const commentHR = document.createElement('hr');
  //append the contents of the comment to the div with the trash button by calling the function to create it and passing the unique ID
  newCommentDiv.appendChild(commentContents);
  newCommentDiv.appendChild(commenterName);
  newCommentDiv.appendChild(createCommentTrashButton(commentId));
  newCommentDiv.appendChild(commentHR);
  //clear the form
  document.getElementById(`comment-contents-${pId}`).value = '';
  document.getElementById(`comment-name-${pId}`).value = '';
  //insert the comment before the comment form so it shows up directly under the post
  let commentForm = document.getElementById(`commentForm${pId}`);
  document.getElementById(`${pId}`).insertBefore(newCommentDiv, commentForm);
}

//create the comment form
function createCommentForm(postId) {
  //create the form element, prevent default, and give margin
  const commentForm = document.createElement('form');
  commentForm.id = `commentForm${postId}`;
  commentForm.setAttribute('onsubmit', 'event.preventDefault()');
  commentForm.setAttribute('style', 'margin-top: 30px;');
  //create a div for the name input
  const nameDiv = document.createElement('div');
  nameDiv.classList.add('form-group', 'comment-name-div');
  //create a div for the contents of the post
  const contentsDiv = document.createElement('div');
  contentsDiv.classList.add('form-group', 'comment-contents-div');
  //create the name input element
  const nameInput = document.createElement('input');
  nameInput.id = `comment-name-${postId}`;
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('class', 'form-control');
  nameInput.setAttribute('placeholder', 'Your Name');
  //create the comment input element
  const commentInput = document.createElement('input');
  commentInput.setAttribute('id', `comment-contents-${postId}`);
  commentInput.setAttribute('type', 'text');
  commentInput.setAttribute('class', 'form-control');
  commentInput.setAttribute('placeholder', 'Comment');
  //create the submit button
  const submitButton = document.createElement('button');
  submitButton.id = 'submit';
  submitButton.setAttribute('class', 'btn btn-primary');
  submitButton.innerHTML = 'Comment';
  //add an event listener that evokes a callback that submits the comment and passes values to the function
  submitButton.addEventListener('click', () => submitComment(nameInput.value, commentInput.value, postId));
  //append all elements to the tree to create the comment form
  nameDiv.appendChild(nameInput);
  contentsDiv.appendChild(commentInput);
  commentForm.appendChild(nameDiv);
  commentForm.appendChild(contentsDiv);
  commentForm.appendChild(submitButton);

  return commentForm;
}

//create an event listener that uses all the functions above to create a new post and all of it's functionalities
submitBtn.addEventListener('click', () => {
  //increment the post ID to create a new unique ID
  postId += 1;

  //check if name and post are blank
  if(!posterName.value) {
    alert('Please enter your name');
    return;
  } else if(!message.value) {
    alert('post cannot be blank');
    return;
  }

  //Evoke the functions to create the div for the post and then the comment div and form underneath it, hidden
  const postDiv = createPostDiv(message.value, posterName.value, postId);
  const commentDiv = createCommentDiv(postId);
  const commentForm = createCommentForm(postId);

  //append the comment components to the post
  commentDiv.appendChild(commentForm);
  postDiv.appendChild(commentDiv);
  //add it all to the posts div
  posts.appendChild(postDiv);
  //clear the form
  message.value = '';
  posterName.value = '';
});