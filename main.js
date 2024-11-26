function createPost(){
  const postText = document.getElementById("postText").value;
  const postName = document.getElementById("postName").value;
  const postsDiv = document.querySelector(".posts");
  
  const newPost = document.createElement("div");
  newPost.className = "d-inline-flex newPost";



  const newPostP = document.createElement("p");
  newPostP.innerHTML = `<a class='btn btn-link' id='commentsBtn'>comments</a>
  <a class='btn btn-link' id='remove'>remove</a> 
  ${postText} - Posted By: ${postName}
  <div name= "commentForm" class='commentForm collapse'>
    <form class="comment-submission">
      <div name="commentSection"></div>
        <div class='form-group' name='comment-input'>
          <input type="text" class='form-control' name='commentText' placeholder ='Your Comment'>
        </div>
      <div class='form-group' name='name-input'>
        <input type='text' class='form-control' name='commentName' placeholder='Your Name'>
      </div>
      <button type='button' id='submitComment' class='btn btn-primary float-start'>Submit</button>
    </form>
  </div>`
  ;
  newPost.appendChild(newPostP);
  postsDiv.append(newPost)
}

document.getElementById("submitPost").addEventListener("click", () => {
  if (document.getElementById("postText").value && document.getElementById        ("postName").value){
    createPost();
    postText.value = "";
    ostName.value = "";}
  else {alert("Please fill out all post input fields")}
})

document.addEventListener("click", (e) =>{
  if (e.target.id === "remove"){
    e.target.closest(".newPost").remove()
  }
})

document.addEventListener("click", (e) => {
  if (e.target.id === "commentsBtn"){
    const children = e.target.parentElement.children;
    const form = children.namedItem("commentForm");
    if (form.classList.contains("collapse")){
      form.classList.remove("collapse");
    } 
    else (form.classList.add("collapse"));
  
  }})

document.addEventListener("click", (e)=> {
  if (e.target.id === "submitComment" ){
    const submitButton = e.target;
    const form = submitButton.closest(".comment-submission");
    const commentSection = form.children.commentSection;
    const commentTextInput = form.children["comment-input"];
    let comment = commentTextInput.children["commentText"].value;
    let commenter = form.children["name-input"].children["commentName"].value;
    if (comment && commenter){
      const newComment = document.createElement("div");
      newComment.className = "d-inline-flext newComment"
      const newCommentP = document.createElement("p")

      newCommentP.innerHTML = `<a class='btn btn-link' id='removeComment'>remove</a> ${comment} - Posted By: ${commenter}`
      newComment.appendChild(newCommentP)
      commentSection.append(newComment)}
    else(alert("Please fill out all comment input fields"));
  form.children["name-input"].children["commentName"].value = "";
  form.children["comment-input"].children["commentText"].value = ""
  }})

  document.addEventListener("click", (e) => {
    if (e.target.id === "removeComment"){
      e.target.closest(".newComment").remove()
    }
  })
  


