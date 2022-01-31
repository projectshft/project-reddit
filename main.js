var $button = $('#submit')

var forum = {
  createPost: function () {
    var $posts = $(".posts")
    var $name = $("#name").val();
    var $message = $("#message").val();
    var $newPost = $("<div></div>").attr("class", "new-post")
  

    $newPost.append($("<p></p>").text($message));
    $newPost.append($("<p></p>").text(`Posted By: ${$name}`));

    var $comments = $("<div></div>").attr("class", "comment-section").css("display","none");

    var $commentToggle = $newPost.append("<p>Show/hide Comments</p>")
  
    // var $commentButton = $commentsInput.append($("<button></button>").attr("class", "btn btn-primary comment-button").text("Comment"));

    var $commentsInput = $comments.append($("<form></form>").append($("<div></div>").attr("class", "form-group name").append($("<input></input>").attr({type: "text", class: "form-control commName", placeholder: "Name"})), $("<div></div>").attr("class", "form-group message").append($("<input></input>").attr({type: "text", class: "form-control commMessage", placeholder: "Message"}))), $("<button></button>").attr("class", "btn btn-primary comment-button").text("Comment"));
    

    $comments.append($commentsInput);
    $newPost.append($comments);




    if ($name && $message) {
      $posts.append($newPost);
    }
  },
  createComment: function (event) {
    console.log($(event.target).hasClass("comment-button"));
    if ($(event.target).hasClass("comment-button")) {
    var parentComm = $(event.target).closest(".comment-section");
    var $commName = parentComm.find(".commName").val();
    var $commMessage = parentComm.find(".commMessage").val();

    parentComm.append($(`<p>${$commMessage}</p>`), $(`<p>Posted by: ${$commName}</p>`));
    }

  },
  hideComments: function (event) {
  
   var $comments = $(event.target).siblings(".comment-section");

   $comments.toggle("display");
  //  if ($comments.attr("display") == )
  }
};


$button.on("click", forum.createPost);

$("body").on("click", forum.hideComments);

$("body").on("click", forum.createComment);