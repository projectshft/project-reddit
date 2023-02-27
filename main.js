//PARSITY INSTRUCTIONS/CONSTRAINTS
// Use Bootstrap (version 3 or 4 is fine)
// Write clean and pretty HTML, CSS and JavaScript
// Utilize patterns to organize your JavaScript if necessary
// Use jQuery
// Make sure a user can add posts as well as remove them
let idCounter = 0;
let postBoard = $(".post-board");

//submit post function
$(".submit-post").on("click", function () {
  let postText = $("#post-text").val();
  let postName = $("#post-name").val();
  let removeBtn = '<a href="#" class="remove-post" role="button">remove</a>';
  let editor = '<a href="#" class="edit" role="button">edit</a>';

  // idCounter+=1;
  let postTextElement = '<p id="' + (idCounter += 1) + '">' + postText + "</p>";
  let postContent =
    '<li class="new-post">' +
    removeBtn +
    " " +
    editor +
    " " +
    postTextElement +
    " - Posted By: " +
    postName +
    "<hr>" +
    "</li>";

  postBoard.append(postContent);
  //remove post function
  $(".remove-post").on("click", function () {
    $(this.parentNode).remove();
  });

  //edit post function
  $(".edit").on("click", function () {
    let nodesArray = $(this.parentNode.parentNode.childNodes);
    console.log(nodesArray[0].children);
  });
});
