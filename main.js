var $button = $('#submit')

var forum = {
  createPost: function () {
    var $posts = $(".posts")
    var $name = $("#name").val();
    var $message = $("#message").val();
    var $newPost = $("<div></div>").attr("class", "new-post")
  

    $newPost.append($("<p></p>").text($message));
    $newPost.append($("<p></p>").text(`Posted By: ${$name}`));

    var $comments = $("<div></div>").attr("class", "comment-section");

    var $commentToggle = $newPost.append("<p>Show/hide Comments</p>").attr("class", "toggle-comment");

    var $commentsInput = $comments.append($("<form></form>").append($("<div></div>").attr("class", "form-group").append($("<input></input>").attr({type: "text", class: "form-control", placeholder: "Name"})), $("<div></div>").attr("class", "form-group").append($("<input></input>").attr({type: "text", class: "form-control", placeholder: "Message"}))));

    $comments.append($commentsInput);
    $newPost.append($comments);




    if ($name && $message) {
      $posts.append($newPost);
    }
  },
  createComment: function () {
    
  },
  hideComments: function (event) {
   var $comments = $(event.target).siblings(".comment-section");

   console.log($comments);

   $comments.toggle("display");
  //  if ($comments.attr("display") == )
  }
};


$button.on("click", forum.createPost);

$("body").on("click", forum.hideComments);