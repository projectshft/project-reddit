// submit post when button (id = submit) clicked
$("#submit").click(function () {
  var postName = $("#name-input").val();
  var postMsg = $("#post-input").val();

  // make sure msg or name aren"t blank
  if (postName === "") {
    alert("Please include your name");
  };

  if (postMsg === "") {
    alert("Please post something first");
  }

  if (postName && postMsg) {
    var $newHTML =
      `
      <div id="post1">
        <span id="remove-post">remove </span><span id="show-or-hide-comments">comments </span>` +
      postMsg +
      ` - Posted By: ` +
      postName +
      `<div id="comments">
        <ul id="comments-list"></ul>
        <div id="comments-list-form">
          <form  id="comments-form" style="margin-top:30px;" onsubmit="event.preventDefault();">
            <div class="form-group">
              <input id="comment-text-input" class="form-control" type="text" placeholder="Comment Text">
            </div>
              <div class="form-group">
              <input id="comment-name-input" class="form-control" type="text" placeholder="Your Name">
              </div>
          </form>
          <button id="submit-comment" class="btn btn-primary">Submit Comment</button>
        </div>
      </div>
      <hr /></div>
    `;

    $("#posts").append($newHTML);

    // clear inputs
    $("#name-input").val("");
    $("#post-input").val("");
  }
});

$("#posts").on("click", "#show-or-hide-comments", function () {
  console.log($(this).find('#comments'));
  $(this).closest('div').find('#comments').toggle();
});

$("#posts").on("click", "#remove-post", function() {
  // remove post or comment
  // remove this post - the div 1 level (parent) up 
  console.log($(this).parent());
  $(this).parent().remove();
});

$("#posts").on("click", "#submit-comment", function () {
  // add an li to the ul
  var commentName = $(this).closest("#comments-list-form").find("#comment-name-input").val();
  var commentMsg = $(this).closest("#comments-list-form").find("#comment-text-input").val();

  if (commentName === "") {
    alert("Please include your name");
  }

  if (commentMsg === "") {
    alert("Please post something first");
  }

  if (commentName != "" && commentMsg != "") {
    var $newCommentHTML =
      `
      <li>
        <span id="remove-post">remove </span>` +
      commentMsg +
      ` - Posted By: ` +
      commentName +
      `</li>
    `;

    $(this).closest("#comments").find("ul").append($newCommentHTML);  

    // clear inputs
    $(this).closest("#comments-list-form").find("#comment-name-input").val("");
    $(this).closest("#comments-list-form").find("#comment-text-input").val("");
  }
});
