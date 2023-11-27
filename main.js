// posts div
var postsDiv = document.querySelector("#posts");
// name input
var nameInput = document.querySelector("#nameInput");
// post input
var postInput = document.querySelector("#postInput");
// comment input
var postButton = document.querySelector("#postButton");

var trash = document.getElementsByClassName("trash")[0];
var posts = [];

postButton.addEventListener("click", function () {
  // get input value of post
  var postValue = postInput.value;
  console.log(postValue);

  var nameValue = nameInput.value;
  console.log(nameValue);

  var post = { post: postValue, name: nameValue, comments: [] };

  posts.push(post);

  console.log(posts);
  // get input value of name
  //store it in a post object
  //push to post array
  renderPost();
});

var renderPost = function () {
  // clear postDiv
  postsDiv.innerHTML = "";
  // loop through posts and add html for post
  var post = "";
  if (posts) {
    posts.forEach(function (singlePost, index) {
      var div = document.createElement("div");
      var singleDiv =
        '<div class="container col-4" data-index=0>' +
        '<div class="card mx-auto my-2 bg-info">' +
        '<div class="card-body p-1">' +
        '<div class="row mx-auto justify-content-end p-1">' +
        '<button class="btn btn-sm btn-danger col-1 trash">' +
        "x" +
        "</button>" +
        "</div>" +
        '<div class="row text-light">' +
        '<p class="card-text text-center">' +
        `${singlePost.post}` +
        "</p>" +
        "</div>" +
        '<div class="row justify-content-around mt-2">' +
        '<p class=" col-5 card-text small">' +
        `Posted By: ${singlePost.name}` +
        "</p>" +
        '<div class="col-7 row">' +
        "<span>" +
        "comments" +
        '<i class="fa-solid fa-comment fa-lg ms-2" style="color: #efebeb;">' +
        "</i>" +
        "</span>" +
        "</div>" +
        "</div>" +
        "</div>";
      div.innerHTML = singleDiv;
      div.setAttribute("data-index", index);
      postsDiv.appendChild(div);
    });
    // add event listener to red x button  to find closest container
    var trashButtons = document.querySelectorAll(".trash");
    console.log(trashButtons);
    // add event listener to red x button  to find closest container
    trashButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        // gget closest container class and access the  data index to splice the posts array posts.splice(data-index,1)
        var postToRemove = event.target
          .closest(".container")
          .getAttribute("data-index");

        posts.splice(postToRemove, 1);
        //  rerender posts
        renderPost();
      });
    });
  } else {
    postsDiv.innerHTML = "";
  }
  console.log(`current number of posts: ${posts.length}`);
};
