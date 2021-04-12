// submit post when button (id = submit) clicked
$('#submit').click(function () {
  var postName = $("#name-input").val();
  var postMsg = $("#post-input").val();

  // make sure msg or name aren't blank
  if (postName === '') {
    alert('Please include your name');
  };

  if (postMsg === '') {
    alert('Please post something first');
  }

  if (postName != '' && postMsg != '') {
    var $newHTML =
      `
      <div id="post1">
        <span id="remove-post">remove </span><span id="show-or-hide-comments">comments </span>` +
      postMsg +
      ` - Posted By: ` +
      postName +
      `<div id="comments">
              <ul id="comments-list"></ul>
              <div id="comments-list-form"></div>
            </div>
            <hr /></div>
    `;

    $("#posts").append($newHTML);

    // clear inputs
    $("#name-input").val('');
    $("#post-input").val('');
  }
});

$("#posts").on("click", "#show-or-hide-comments", function () {
  // toggle show comments and input forms for "Comment Text" and "Your Name"
  var $commentFormHTML = `
  <form  id="comments-form" style="margin-top:30px;" onsubmit="event.preventDefault();">
    <div class="form-group">
      <input id="comment-text-input" class="form-control" type="text" placeholder="Comment Text">
    </div>
    <div class="form-group">
      <input id="comment-name-input" class="form-control" type="text" placeholder="Your Name">
    </div>
  </form>
  <button id="submit-comment" class="btn btn-primary">Submit Comment</button>
  `;

  // if comments form exists, remove it, otherwise, add it

  // still need to make sure it sticks with the proper post
  // use closest div with class attribute comments-list-form
  console.log($(this).closest('div[comments-list-form]'));  // can't quite tell how to use this

  if ($("#comments-form").length) {
    $("#comments-form").remove();
    $("#submit-comment").remove();
  } else {
    $('#comments-list-form').html($commentFormHTML);  
  }
});

$("#posts").on("click", "#remove-post", function() {
  // remove post or comment
  // remove this post - the div 1 level (parent) up 
  $(this).parent().remove();
});

$("#comments-list-form").on("click", "button", function () {
  // add an li to the ul
  var commentName = $("#comment-name-input").val();
  var commentMsg = $("#comment-text-input").val();

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

    $("#comments-list").closest('ul').append($newCommentHTML);

    // clear inputs
    $("#comment-name-input").val("");
    $("#comment-text-input").val("");
  }
});
