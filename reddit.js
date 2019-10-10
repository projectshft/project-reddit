var postArray = [];


// Captures user input values.
// invokes create post function at click event.
$("#postButton").on("click", function () {
  var text = $("#message").val()
  var name = $("#name").val()
  createPost(text, name);
  renderPostInPostArray();
  
  // console.log(text, name)
});

//todo:render post
// Object created to store user input for values
// to be capture
// adding post to post array
let createPost = function (message, user) {
  var postMade = {
    text: message,
    name: user
  };

  
  postArray.push(postMade)
};

// Rendering post
// loop through input(postArray)
// inside loop what will rendered view look lik
let renderPostInPostArray = function () {
  $("#post-view").empty();

  for (var i = 0; i < postArray.length; i++) {
    // append to HTLM
    var removeButton = `<button type="button" class="btn btn-small btn-danger remove_button">Remove</button>`
    var commentButton = `<button type="button" class="btn btn-primary comment_button">Comment</button>`
    
    var htmlPost = `<div><span>${commentButton}</span> <span>${removeButton}</span><p>${postArray[i].text}</p>
      <p><strong>${postArray[i].name}</strong></p></div>`;
    
    $("#post-view").append(htmlPost);
  }

}

// When a user clicks 'comments'
// it should toggle the comments and input box visible / hidden

// May not be able to use template literal
// append HTML different - making html a string

