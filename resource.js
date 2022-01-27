const submitBtn = document.querySelector("#submit");
const btn = document.querySelector(".btn");
const postDiv = document.querySelector(".posts");

submitBtn.addEventListener("click", () => {
  const inputPost = document.querySelector("#message").value;
  const inputName = document.querySelector("#name").value;

  const message = document.createElement("p");
  message.className = "post-message";
  const msgText = document.createTextNode(inputPost);
  message.appendChild(msgText);

  const messageNameP = document.createElement("p");
  const msgNameText = document.createTextNode(`Posted By: ${inputName}`);
  messageNameP.appendChild(msgNameText);
  messageNameP.className = "post-message-name";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.id = "delete-btn";
  deleteBtn.className = "btn";
  deleteBtn.style.backgroundColor = "red";
  deleteBtn.style.color = "white";
  deleteBtn.style.display = "block";
  deleteBtn.style.marginTop = "15px";

  const upvote = document.createElement("p");
  upvote.innerHTML = '<i class="fas fa-thumbs-up"></i>';
  upvote.style.display = "inline-block";
  upvote.id = "upvote";
  upvote.style.margin = "10px";
  const likeCount = document.createElement("span");
  likeCount.style.border = "1px solid black";
  likeCount.innerText = "0";
  likeCount.style.padding = "8px";
  likeCount.id = "like-count";

  const donotLikeCount = document.createElement("span");
  donotLikeCount.style.border = "1px solid black";
  donotLikeCount.innerText = "0";
  donotLikeCount.style.padding = "8px";
  donotLikeCount.id = "no-like-count";

  const downvote = document.createElement("p");
  downvote.innerHTML = '<i class="fas fa-thumbs-down"></i>';
  downvote.style.display = "inline-block";
  downvote.style.margin = "10px";
  downvote.id = "downvote";
  console.log("click");
  const newRow = document.createElement("div");
  postDiv.append(newRow);

  newRow.append(message);
  newRow.append(messageNameP);
  newRow.append(upvote);
  newRow.append(likeCount);
  newRow.append(downvote);
  newRow.append(donotLikeCount);
  newRow.append(deleteBtn);
});

postDiv.addEventListener("click", (e) => {
  if (e.target.id === "delete-btn") {
    e.target.parentElement.remove();
  }
});

let likeCounter = 0;

postDiv.addEventListener("click", (e) => {
  if (e.target.className === "fas fa-thumbs-up") {
    console.log(e.target, e.target.parentNode);
    likeCounter += 1;
    const target = e.target.parentNode.nextElementSibling;
    target.innerText = likeCounter;
  }
});

let donotLikeCounter = 0;

postDiv.addEventListener("click", (e) => {
  if (e.target.className === "fas fa-thumbs-down") {
    donotLikeCounter += 1;
    const target = e.target.parentNode.nextElementSibling;
    target.innerText = donotLikeCounter;
  }
});
