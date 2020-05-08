// Register a click event on the post button
$("#submit").click(function () {
  // Grab the value of the message upon click
  let $theNewMessage = $("#message").val();

  // Grab the value of the author box upon click
  let $theNewAuthor = $("#name").val();

  // Create a post template for the new post before it is appended
  let template =
    '<div class="post panel panel-default">' +
    ' <div class="panel-body">' +
    '   <p class="post-meta"><a href="#" class="remove-post-link">Remove</a> | <a href="#" class="view-comments-link">Comments</a></p>' +
    "    <p>" +
    $theNewMessage +
    "    </p>" +
    ' <div class="post-author"><p>Posted By: <span class="author">' +
    $theNewAuthor +
    " </span></p></div> </div></div>";
  console.log("The new template to add to posts is \n" + template);

  // make a new post class for the grabbed values to be appended
  $("#posts").append(template);

  // add event listeners for each newly appended post
  removePost();
  seeComments();
});

// Register a click event on each post's "remove" link
const removePost = function () {
  $(".remove-post-link").click(function () {
    // remove the one we want by targeting the specific post using 'this'
    $(this).closest(".post").remove();
  });
};

// Register a click event on each post's "comments" link
const seeComments = function () {
  $(".view-comments-link").on("click", function () {
    let commentsSection =
      ' <div class="comments panel panel-default">' +
      '   <div class="panel-body">' +
      "     I am the comments section" +
      "   </div>" +
      " </div>";

    // if there is no comments section yet,
    // append the comments section to the closest post to target
    if ($(this).closest(".post").find(".comments")[0] == undefined) {
      $(this).closest(".post").append(commentsSection);
    }
  });

  // add event listener to remove comments from view
  // hideComments();
};

// Register a click event on each post's comments if comments are visible
// const hideComments = function () {
//   if ($(this).closest(".comments")) {
//     $(".view-comments-link").off(function () {
//       $(this).closest(".post").find(".comments").hide();
//     });
//   }
// };

removePost();
seeComments();
