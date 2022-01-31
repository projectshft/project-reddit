//Making variable for post submission button
var $button = $('#submit')

//This object governs the user interactivity on the page
var forum = {
  //Method to create posts
  createPost: function () {

    //Declaring variables to help take user inputs and turn them into a post
    var $posts = $(".posts")
    var $name = $("#name").val();
    var $message = $("#message").val();
    var $newPost = $("<div></div>").attr("class", "new-post removable")
  
    //Apending my new variables values to the '$newPost' variable
    $newPost.append($("<p></p>").text($message));
    $newPost.append($("<p></p>").text(`Posted By: ${$name}`));
    $newPost.append($("<p></p>").attr("class", "remove").text("remove"));

    //Creating a comments section for each new post along with a sub-section that will only include comments (and not the comment submission user form). Giving this subsection a class name of 'post-comments'.
    var $comments = $("<div></div>").attr("class", "comment-section").css("display","none");
    $comments.append($("<div></div>").attr("class", "post-comments"))

    //Appending an element to the bottom of each post that users can click to show/hide comments for that post
    $newPost.append($("<p></p>").text("Click to show/hide comments").attr("class", "display-toggle"));
  
    //This section of code creates a form for each post that users can use to create comments. Specifically, it creates: a "name" textbox, a "message" textbox, and a "comment" button to submit their comment once those two fields are filled out.
    var $commentsInput = $comments.append($("<form></form>").append($("<div></div>").attr("class", "form-group name").append($("<input></input>").attr({type: "text", class: "form-control commName", placeholder: "Name"})), $("<div></div>").attr("class", "form-group message").append($("<input></input>").attr({type: "text", class: "form-control commMessage", placeholder: "Message"}))), $("<button></button>").attr("class", "btn btn-primary comment-button").text("Comment"));
    
    //I append the comments userform the $comments variable, and then I append the entire $comments variable into the $newPost variable (which just represents a new user post)
    $comments.append($commentsInput);
    $newPost.append($comments);

    //Checks if both the "name" and "message" textboxes are filled out and, if so, creates a new post
    if ($name && $message) {
      $posts.append($newPost);
    }
  },
  //Method to create comments
  createComment: function (event) {
    //Traversing the DOM with jquery to find elements of interest
    var parentComm = $(event.target).closest(".comment-section");
    var $commName = parentComm.find(".commName").val();
    var $commMessage = parentComm.find(".commMessage").val();

    //Checking: 1) if the element that was clicked was the comment submission button, and 2) if both the "name" and "message" textboxes of the comment form are filled out
    if ($(event.target).hasClass("comment-button") && $commName && $commMessage) {
        //Creates a comment
        parentComm.find(".post-comments").append($("<div></div>").attr("class","comment removable").append($(`<p>${$commMessage}</p>`), $(`<p>Posted by: ${$commName}</p>`), $("<p></p>").attr("class","remove").text("remove")));
    }
  },
  //Method for toggling the comment section display on/off for each post
  hideComments: function (event) {
    if($(event.target).hasClass("display-toggle")) {
      var $comments = $(event.target).siblings(".comment-section");
      $comments.toggle("display");
    }
  },
  //Method for removing posts and/or comments
  remove: function (event) {
    if ($(event.target).hasClass("remove")) {
      $(event.target).closest('.removable').remove();
    }
  }
};

//Listening for clicks on the post submission button

$button.on("click", forum.createPost);

//Listening for clicks on the document body. I tried utilizing jquery to listen for clicks on newly created elements with specific class names, but for some reason, the clicks did not seem to register. I wonder if it was because these jquery methods below are being called the moment the page loads (before the DOM elements I am looking for even exist).

$("body").on("click", forum.hideComments);

$("body").on("click", forum.createComment);

$("body").on("click", forum.remove);