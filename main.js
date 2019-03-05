
// *** We want the user to be able to enter a new post into the text box with a user name, and when the submit button is clicked, a new post is generated.

const createPost = function() {
  // Capture the input from the .user-name and textarea #new-post.
  const $newPostName = $("#new-post-name").val();
  const $newPostMessage = $("#new-post-message").val();
  // Place the newPostText and userName into newPostTemplate
  const newPostTemplate = `
    <div class="post-content border-bottom">
      <div class="post pt-3">
        <h4 class="post-heading"><strong class="user-name">${$newPostName}</strong><em> says: </em></h4>
        <p class="lead ml-2">${$newPostMessage}</p>
      </div>

      <div class="form-group text-right">
        <button type="button" class="leave-comment-button btn btn-secondary btn-sm" data-toggle="modal" data-target="#comment-modal">
        Leave comment
        </button>
        <button type="button" class="delete-post-button btn btn-danger btn-sm">
        Delete post
        </button>
      </div>
    </div>`;
  // append the content wrapper with the new post, if there is content
  if($newPostName !== "" && $newPostMessage !== ""){
    
    $(".post-wrapper").append(newPostTemplate);

    $("#new-post-name").val("");
    $("#new-post-message").val("");
  }
};

// *** We now want users to be able to leave comments on each post. When a user clicks 'comments' (above each post) it should toggle the comments and input box visible/hidden.

// Initialize the $selectedPost variable.

let $selectedPost;
// Target the spcific post corresponding to the clicked button. No longer duplicates messages.

const leaveComment = function() {

  $selectedPost = $(this)
    .closest(".post-content")
    .find(".post");
  };

  // *** When a user fills out the two comment inputs and clicks 'Post Comment' it should immediately add the comment to the list of comments.

const createComment = function() {
  // Capture input from the Bootstrap modal input fields
  const $commenterName = $("#commenter-name").val();
  const $commentText = $("#comment-text").val();
  // Place into commentTemplate
  const commentTemplate = `
    <div class="comment">
      <a class="delete-comment ml-4 pr-2 float-left" title="Delete comment"><i class="fas fa-minus-circle"></i></a>
      <p class="comment-text d-inline-block w-75"><em class="commenter-name">${$commenterName}</em><strong> comments: </strong>${$commentText}</p>
    </div>`;
  // append to the related post, only if there is content
  if($commentText !== "" && $commenterName !== "") {

    $selectedPost.append(commentTemplate);
    
    $("#commenter-name").val("");
    $("#comment-text").val("");
    // hide comment modal 
    $("#comment-modal").modal("hide");
  }
};

// *** When a user clicks the 'x' next to a comment, it should delete it.

const deleteComment = function() {
  if(confirm("Are you sure you want to permanently delete this comment?"));
    $(this)
      .closest(".comment")
      .remove();
};

// *** Lastly, when a user clicks 'remove' above a post, it should remove the post too.
const deletePost = function() {
  if(confirm("Are you sure you want to permanently delete this entire post and its contents?"));
    $(this)
      .closest(".post-content")
      .remove();
};

const onHover = function() {
  $(this).css("color", "#DB3545");
};

const offHover = function () {
  $(this).css("color", "inherit");
};


// Add a click event listener to the submit button to create a post
$(".new-post-button").click(createPost);
// Click event listener for the leave comment buttons.
$(document).on("click", ".leave-comment-button", leaveComment);
// Add a click event listener to the modal submit button
$("#add-comment-button").click(createComment);

$(document).on("click", ".delete-comment i", deleteComment);

$(document).on("click", ".delete-post-button", deletePost);

$(document).on("mouseenter", ".delete-comment i", onHover);

$(document).on("mouseleave", ".delete-comment i", offHover);