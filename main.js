//define variables to access elements needed from `index.html`
let author = document.querySelector(".author");
let postText = document.querySelector(".post")
let clickable = document.querySelector(".btn");
let posts = document.querySelector(".posts");

//create element, fill element, and append to div
clickable.addEventListener("click", function () {
  const newTextElement = document.createElement('p');
  const newNameElement = document.createElement('strong')
  const postElement = createElementsetAttributes('div', {"class": "new-post"});

  newNameElement.innerText = author.value;
  newTextElement.innerText = postText.value;
  const commentButton = createElementsetAttributes("btn", {"type": "button", "class": "btn btn-outline-secondary btn-sm"});
  commentButton.innerText = "Comment";

  postElement.appendChild(newNameElement);
  postElement.appendChild(newTextElement);
  postElement.appendChild(document.createElement('hr'));
  postElement.appendChild(commentButton);
  posts.appendChild(postElement);

  commentButton.addEventListener("click", function () {
    let commentField = createElementsetAttributes('input', {"class": "form-control", "type": "text", "placeholder": "Add a comment"});
    let commentText = createElementsetAttributes('p', {"class": "comment"});
    commentText.innerText = commentField.value;
    postElement.appendChild(commentField);
    postElement.appendChild(commentText);
  });
})


//function that creates element and sets attributes from an object parameter
function createElementsetAttributes(elementString, attributeObject) {
  let attributeTarget = document.createElement(elementString);
  for (let key of Object.keys(attributeObject)) {
    attributeTarget.setAttribute(key, attributeObject[key]);
  };
  return attributeTarget
};
