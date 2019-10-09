var postArray = [];

// Captures user input values.
// invokes create post function at click event.
$("#postButton").on("click", function () {
  var text = $("#message").val()
  var name = $("#name").val()
  createPost(text, name);
  renderPost();
  
  // console.log(text, name)
});

//todo:render post
// Object created to store user input for values
// to be capture
// adding post to post array
let createPost = function (message, user) {
  var post = {
    text: message,
    name: user
  };

  postArray.push(post);
  // console.log(postArray)
};

// Rendering post
let renderPost = function () {
  console.log(postArray)
}