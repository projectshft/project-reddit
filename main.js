var numberOfPosts = 0;
// keep track of the number of posts that have been added

$("#submit-post").on("click", function () {
  numberOfPosts = numberOfPosts + 1;
  var postsCenter = $(".submitted-posts");
  var userInputMesg = $("#message").val();
  var userInputName = $("#name").val();
  var divElement = $("<p>", { "name": "Submitted Post", class: numberOfPosts, id: "post-to-submit" });
  var commentButton = $("<button>", { id: "comment-on-post-" + numberOfPosts, "number": numberOfPosts, "text": "comment", "action": "create" });
  commentButton.addClass("btn btn-link comment");
  var removeButton = $("<button>", { id: "remove-post" + numberOfPosts, "text": "remove", })
  removeButton.addClass("btn btn-link remove");
  var post = $("<div>", { "name": "Post " + numberOfPosts, class: "new-post", id: "new-post" + numberOfPosts })
  var userInputElement = document.createTextNode(userInputMesg + " - Posted by: " + userInputName);

  divElement.append(commentButton, removeButton, userInputElement);
  post.append(divElement);
  postsCenter.append(post);

  addCommentForm();
  removePost();
});

var removePost = function () {
  $("#remove-post" + numberOfPosts).on('click', function (e) {
    if (e.target.classList.contains('remove')) {
      var postToRemove = e.target.closest('div');
    }
    postToRemove.remove();
  });
};

var addCommentForm = function () {
  $('#comment-on-post-' + numberOfPosts).on('click', function (e) {
    var element = $(e.target);
    var number = element.attr('number');
    var commentForm = $('.comment-form-' + number);

    if (element.attr('action') === 'create') {
      var form = $("<form>", { id: "comments", class: "show", class: "comment-form-" + number, "onsubmit": "event.preventDefault()" });
      var divComment = $("<div>", { class: "form-group" });
      var inputDivComment = $("<input>", { class: "form-control", id: "comment-text", type: "text", placeholder: "Comment Text" });
      var divCommentName = $("<div>", { class: "form-group" });
      var inputDivCommentName = $("<input>", { class: "form-control", id: "comment-name", type: "text", placeholder: "Name" });
      var formButton = $("<button>", { id: "submit-comment", class: "submit-comment-" + number, "number": number, type: "submit", "text": "Submit Comment" });
      formButton.addClass("btn btn-primary");
      var commentsListDiv = $("<div>", { class: "commentary-" + number });
      var posts = $("#new-post" + number);

      posts.append(form);
      form.append(commentsListDiv, divComment, divCommentName, formButton);
      divComment.append(inputDivComment);
      divCommentName.append(inputDivCommentName);

      element.attr("action", "hide");
      submitComment();
    } else if (element.attr("action") === "hide") {
      commentForm.addClass("hide");
      commentForm.removeClass("show");
      element.attr("action", "show");
    } else {
      commentForm.addClass("show");
      commentForm.removeClass("hide");
      element.attr("action", "hide");
    }
  })
};

var submitComment = function () {
  var count = $('#submit-comment').attr('number');
  $(".submit-comment-" + count).on("click", function () {
    var userInputComment = $('#comment-text').val();
    var userInputCommentName = $('#comment-name').val();
    var comment = $("<div>", { id: "new-comment", class: "new-comment-" + count, "onsubmit": "event.preventDefault()" });
    var commentDiv = $("<p>", { class: "comms" + count });
    var removeCommentButton = $("<button>", { id: "remove-comment", "count": count, text: "remove this comment" });
    removeCommentButton.addClass("btn btn-link remove-comment");
    var commentSection = $(".commentary-" + count);
    var userInputCommentElement = document.createTextNode(userInputComment + " - Posted by: " + userInputCommentName);

    commentSection.append(comment);
    comment.append(commentDiv);
    commentDiv.append(removeCommentButton, userInputCommentElement);
    removeComment();
  })
};

var removeComment = function () {
  $('.remove-comment').on('click', function (e) {
    if (e.target.classList.contains('remove-comment')) {
      var commentToRemove = e.target.closest('div');
    }
    commentToRemove.remove();
  })
};