const button = document.querySelector("#submit");
let postList = [];

button.addEventListener("click", () => {
  const postContent = document.querySelector("#post-content").value;
  const userName = document.querySelector("#name").value;
  
  newPost(postContent, userName);
});

const newPost = (postContent, userName) => {
   const post = {
    text: postContent,
    name: userName
  };

  postList.push(post);

  const newPost = `<div>${post.text}<br/>Posted by: <b>${post.name}</b></div><hr/>`;
  document.querySelector(".posts").innerHTML += newPost;

  // Clear message box
  document.querySelector("#name").value = "";
  document.querySelector("#post-content").value = "";
};