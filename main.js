$('button').click(function () {
  var userName = $('#user-name').val();
  var postText = $('#post-text').val();
  
  createNewPost(userName, postText);
  bindToggleComments();
  bindCommentButton();
  bindDeletePostButton();
  bindDeleteCommentButton();
});

var createNewPost = function (user, post) {
  var newPostFormated = "<div class=\"new-post\">" + post + " - Posted By: " + user + " " + deletePostButtonHTML + newPostFieldHTML + "</div>";

  $('#post-area').append(newPostFormated);
};

var bindToggleComments = function () {
  $('.comment-word').unbind().on('click', function (e) {
    var $commentSectionDiv = $(e.target).next();

    if ($commentSectionDiv.is("[id]")) {
        $commentSectionDiv.removeAttr("id");
      } else {
        $commentSectionDiv.attr("id", "block");
      };
      
  })
};

var bindCommentButton = function () {
  $('.commentbtn').unbind().on('click', function () {
    var newCommentText = $(this).prev().prev().prev().val();
    var newCommentUserName = $(this).prev().prev().val();
    var newCommentTemplate = "<div class=\"new-comment\">" + newCommentText + " - Posted By: " + newCommentUserName + deleteCommentButtonHTML + "<br></div>"; 

    $(this).parent().prepend(newCommentTemplate);

    bindDeleteCommentButton();
  })
};

var bindDeletePostButton = function () {
  $('.deletepost').unbind().on('click', function () {
    $(this).parent().remove();
  })
};

var bindDeleteCommentButton = function () {
  $('.deletecomment').unbind().on('click', function () {
    $(this).parent().remove()
  })

}

var deletePostButtonHTML = $("#delete-post-button-template").html();

var deleteCommentButtonHTML = $("#delete-comment-button-template").html();

var newPostFieldHTML = $("#new-post-input-field").html();

