//define variables to access elements needed from `index.html`
let postAuthor = document.querySelector(".author");
let postText = document.querySelector(".post")
let PostBtn = document.querySelector(".btn");
let posts = document.querySelector(".posts");

//create text elements to store post data
PostBtn.addEventListener("click", function () {
  const newTextElement = document.createElement('p');
  const newNameElement = document.createElement('strong')
  //create unique post element for every post
  const postElement = createElementsetAttributes('div', {"class": "new-post"});
  
  //store post data in text elements and create button to post them
  newNameElement.innerText = postAuthor.value;
  newTextElement.innerText = postText.value;
  const commentButton = createElementsetAttributes("btn", {"type": "button", "class": "btn btn-outline-secondary btn-sm"});
  commentButton.innerText = "Comment";

  //Append post data and button to unique `postElement`
  postElement.appendChild(newNameElement);
  postElement.appendChild(newTextElement);
  postElement.appendChild(document.createElement('hr'));
  postElement.appendChild(commentButton);
  //Append `postElement` to `posts` to display post on screen
  posts.appendChild(postElement);

  //create comment div to hold all of the comment fields/data.
  const commentDiv = createElementsetAttributes('div', {"class": "comments hide-comments"})
  postElement.appendChild(commentDiv);

  //create comment text fields and append them to the commentDiv
  const commentAuthor = createElementsetAttributes('input', {"class": "form-control comment-box", "type": "text", "placeholder": "Your name"});
  const commentField = createElementsetAttributes('input', {"class": "form-control comment-box", "type": "text", "placeholder": "Add a comment"});
  commentDiv.appendChild(commentAuthor);
  commentDiv.appendChild(commentField);

  // create text elements to store comment field values and button, then append them to `commentDiv`
  commentField.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
      let commentAuthorText = createElementsetAttributes('strong', {"class": "comment"});
      let commentText = createElementsetAttributes('p', {"class": "comment"});
      const deleteBtn = createElementsetAttributes('button', {"type": "button", "class": "btn btn-outline-danger btn-sm delete-button"});
      deleteBtn.innerText = "Delete";
      commentAuthorText.innerText = commentAuthor.value;
      commentText.innerText = commentField.value;
      commentDiv.append(commentAuthorText, deleteBtn);
      commentDiv.appendChild(commentText);
      
      // remove all comment data upon clicking `delete`
      deleteBtn.addEventListener("click", function () {
        commentAuthorText.remove();
        deleteBtn.remove();
        commentText.remove();
      })
    }
  });
  
  //Toggle this `hide-comments` class of `commentDiv` to enable hiding and displaying comment secton.
  commentButton.addEventListener("click", function () {
    const commentClasses = commentDiv.classList;
    commentClasses.toggle("hide-comments");
  });
});


//function that creates element and sets attributes from an object parameter
function createElementsetAttributes(elementString, attributeObject) {
  let attributeTarget = document.createElement(elementString);
  for (let key of Object.keys(attributeObject)) {
    attributeTarget.setAttribute(key, attributeObject[key]);
  };
  return attributeTarget
};
