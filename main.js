const button = document.querySelector("#submit");
let postList = [];
let postCount = 0;

button.addEventListener("click", () => {
  const postContent = document.querySelector("#post-content").value;
  const userName = document.querySelector("#name").value;

  newPost(postContent, userName);
});

const newPost = (postContent, userName) => {
  const post = {
    text: postContent,
    name: userName,
  };

  postList.push(post);

  // const newPost = `<div id="post-count-${postCount}">${post.text}<br/>Posted by: <b>${post.name}</b></div><hr/>`;
  // document.querySelector(".posts").innerHTML += newPost;

  // Populate new post div
  const postDiv = document.createElement("div");
  postDiv.setAttribute("id", `post-count-${postCount}`);
  const postText = document.createTextNode(post.text);

  postDiv.appendChild(postText);

  const lineBreak = document.createElement("br");

  postDiv.appendChild(lineBreak);

  const postedByText = document.createTextNode("Posted by: ");

  postDiv.appendChild(postedByText);
  
  const boldText = document.createElement("b");
  const name = document.createTextNode(post.name);

  boldText.appendChild(name);

  postDiv.appendChild(boldText);

  const hrDivider = document.createElement("hr");

  document.querySelector(".posts").append(postDiv);
  document.querySelector(".posts").append(hrDivider);

  // Clear message box
  document.querySelector("#name").value = "";
  document.querySelector("#post-content").value = "";

  // Increment post count
  postCount++;
};
