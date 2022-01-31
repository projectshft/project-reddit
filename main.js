var $button = $('#submit')

var forum = {
  createPost: function () {
    var $posts = $(".posts")
    var $name = $("#name").val();
    var $message = $("#message").val();
    var $newPost = $("<div></div>").attr("class", "new-post removable")
  

    $newPost.append($("<p></p>").text($message));
    $newPost.append($("<p></p>").text(`Posted By: ${$name}`));
    $newPost.append($("<p></p>").attr("class", "remove").text("remove"));

    var $comments = $("<div></div>").attr("class", "comment-section").css("display","none");
    $comments.append($("<div></div>").attr("class", "post-comments"))

    var $commentToggle = $newPost.append("<p>Show/hide Comments</p>")
  
    var $commentsInput = $comments.append($("<form></form>").append($("<div></div>").attr("class", "form-group name").append($("<input></input>").attr({type: "text", class: "form-control commName", placeholder: "Name"})), $("<div></div>").attr("class", "form-group message").append($("<input></input>").attr({type: "text", class: "form-control commMessage", placeholder: "Message"}))), $("<button></button>").attr("class", "btn btn-primary comment-button").text("Comment"));
    

    $comments.append($commentsInput);
    $newPost.append($comments);




    if ($name && $message) {
      $posts.append($newPost);
    }
  },
  createComment: function (event) {
    var parentComm = $(event.target).closest(".comment-section");
    var $commName = parentComm.find(".commName").val();
    var $commMessage = parentComm.find(".commMessage").val();

    if ($(event.target).hasClass("comment-button") && $commName && $commMessage) {
        parentComm.find(".post-comments").append($("<div></div>").attr("class","comment removable").append($(`<p>${$commMessage}</p>`), $(`<p>Posted by: ${$commName}</p>`), $("<p></p>").attr("class","remove").text("remove")));
    }

  },
  hideComments: function (event) {
  
   var $comments = $(event.target).siblings(".comment-section");

   $comments.toggle("display");
  },
  remove: function (event) {
    if ($(event.target).hasClass("remove")) {
      $(event.target).closest('.removable').remove();
    }
  }
};


$button.on("click", forum.createPost);

$("body").on("click", forum.hideComments);

$("body").on("click", forum.createComment);

$("body").on("click", forum.remove);