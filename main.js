var posts = [];

var parent = document.getElementById("#posts");
var child = document.getElementsByClassName(".publish");

dltbtn = document.querySelector(".button");
var inputs = document.querySelectorAll("input");

//  on click of a button
$(".button").click(function (e) {
  e.preventDefault();
  // collect some input data
  var inputName = $(".name").val();
  var inputPost = $(".post").val();
  // add that data to an array
  var newEntry = inputPost + " " + "-" + " " + "Posted By:" + " " + inputName;

  posts.push(newEntry);

  $("#posts").append(
    '<button class="rembutton">remove</button>',
    `<div class="publish">${newEntry}</div>`
  );
});

dltbtn.addEventListener("click", function () {
  inputs.forEach((input) => (input.value = ""));
});

// 2. Make the remove button remove the post when clicked.

document.onload = function () {
  var removeButton = document.querySelector(".rembutton");

  removeButton.addEventListener("click", function () {
    parent.removeChild(child);
  });
};
