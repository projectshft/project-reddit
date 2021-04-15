var createPost = function ($name, $text) {
  //Creates a div, then one paragraph element to contain the message, a second paragraph element
  //to contain the poster name, then adds on a button for Removing the Comment and a buttong for
  //adding a comment to that specific comment.
  $(".posts").append(
    '<div class="post"><p>' +
      $text +
      "<p>Posted By: " +
      $name +
      '<p><button class="remove-button" id="removeButton">Delete Comment</button>' +
      '<button class="add-comments-button" id="addCommentsButton">Add Comment</button>' +
      "</p></p></p><hr></div>"
  );

  //Adds on a blank comment form to the comment but hides it.
  //$("#blank-comment-form").hide();
  //$(".post").append($("#blank-comment-form"));

  toggleComments();

  //Resets the form fields back to blank
  $("form :input").val("");
};

var createComment = function ($commentName, $commentText) {
  //Creates a div, then one paragraph element to contain the message, a second paragraph element
  //to contain the poster name, then adds on a button for Removing the Comment and a buttong for
  //adding a comment to that specific comment.
  $(".post").append(
    '<div class="sub-post"><p>' +
      $commentText +
      "<p>Posted By: " +
      $commentName +
      '<p><button class="remove-button" id="removeButton">Delete Comment</button>' +
      '<button class="add-comments-button" id="addCommentsButton">Add Comment</button>' +
      "</p></p></p></div>"
  );

  //Resets the form fields back to blank
  $("form :input").val("");
};

var toggleComments = function (e) {
  console.log($(e.target));
  $("#blank-comment-form").toggle();
};

var removePost = function () {
  $("#blank-comment-form").show();
};

//When Post button is clicked, this will post the message as a parent thread.
$("#submit").on("click", function () {
  //Gets the user input for both the name and message boxes.
  var $name = $("#name").val();
  var $text = $("#message").val();

  createPost($name, $text);

  //Resets the form fields back to blank
  $("form :input").val("");
});

//When Post Reply button is clicked, this will post the message as reply to the specific comment.
$("#submit-comment").on("click", function () {
  var $commentName = $("#comment-name").val();
  var $commentText = $("#comment-message").val();

  createPost($commentName, $commentText);

  //Adds on a blank comment form to the comment but hides it.
  $("#blank-comment-form").hide();
  $(".post").append($("#blank-comment-form"));
});

//Deletes the entire thread when the delete button is removed.
$(".posts").on("click", ".remove-button", function (e) {
  $(this).closest(".post").remove();
});

//When the Add Comment button is clicked, this adds a blank comment form below the current thread
//so the user can add a new comment to thread.
$(".posts").on("click", ".add-comments-button", function (e) {
  removePost();
});
