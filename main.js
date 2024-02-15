let author = document.querySelector(".author");
let postText = document.querySelector(".post")
let clickable = document.querySelector(".btn");
let posts = document.querySelector(".posts");

//create element, fill element, and append to div
clickable.addEventListener("click", function () {
  const newTextElement = document.createElement('p');
  const newNameElement = document.createElement('strong')
  const postElement = document.createElement('div');
  postElement.setAttribute("class", "new-post");

  newNameElement.innerText = author.value;
  newTextElement.innerText = postText.value;
  const btnElement = createElementsetAttributes("btn", {"type": "button", "class": "btn btn-outline-secondary btn-sm"});
  btnElement.innerText = "Comment";

  postElement.appendChild(newNameElement);
  postElement.appendChild(newTextElement);
  postElement.appendChild(btnElement);
  posts.appendChild(postElement);

})

//function that sets attributes from and object parameter
function createElementsetAttributes(elementString, attributeObject) {
  let attributeTarget = document.createElement(elementString);
  for (let key of Object.keys(attributeObject)) {
    attributeTarget.setAttribute(key, attributeObject[key]);
  };
  return attributeTarget
};
