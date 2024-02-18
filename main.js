//define variables to access elements needed from `index.html`
const postAuthor = document.querySelector(".author");
const postText = document.querySelector(".post");
const PostBtn = document.querySelector(".btn");
const posts = document.querySelector(".posts");


/**
 * Add event listener to postBtn
 * create text elements and unique div to style posts
 * append text elements to unique div and create commentButton
 */
PostBtn.addEventListener("click", function () {
  const newTextElement = document.createElement('p');
  const newNameElement = document.createElement('strong');
  //create unique post element for every post
  const postElement = createElementsetAttributes('div', {"class": "new-post"});
  
  //store post data in text elements and create button to post them
  newNameElement.innerText = postAuthor.value;
  newTextElement.innerText = postText.value;
  const commentButton = createElementsetAttributes("btn", {"type": "button", "class": "btn btn-outline-secondary btn-sm"});
  commentButton.innerText = "Comments";

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

  /**
   * Add event listener to commentField element for `keydown` event
   * If enter is pressed, create text elements for the author and commentText
   * Store text field values to text elements
   */
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
      
      /**
       * Add event listener to deleteBtn element for `click` event
       * Remove the author, deleteBtn, and commentText from the commentDiv
       */
      deleteBtn.addEventListener("click", function () {
        commentAuthorText.remove();
        deleteBtn.remove();
        commentText.remove();
      })
    }
  });
  
  /**
   * Add event listener to commentButton for `click` event
   * Toggle `hide-comments` class to hide/display comments section.
   */
  commentButton.addEventListener("click", function () {
    const commentClasses = commentDiv.classList;
    commentClasses.toggle("hide-comments");
  });
});


/**
 * Create an element and set its attributes
 * @param {*} elementString String of element to be created. I.e 'div'
 * @param {*} attributeObject Object with {attribute: value} pairs.
 * @returns The created element with attributes.
 */
function createElementsetAttributes(elementString, attributeObject) {
  let attributeTarget = document.createElement(elementString);
  for (let key of Object.keys(attributeObject)) {
    attributeTarget.setAttribute(key, attributeObject[key]);
  };
  return attributeTarget;
};
