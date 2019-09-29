// On post button click, retrieve "Post Text" and "Name" from form inputs
postClicked = function() {
  let postInput = $("#post-text").val()
  let nameInput = $("#name-text").val()
  if (!postInput || !nameInput) {
    alert('Please fill in all fields')
    return;
  }

  let postHtml =  '<div class="post">' +
                  '<a href="#" class="remove-link" role="button">Remove</a>' +
                  '<a href="#" class="comment-link" role="button">Comments</a>' + '<div class="page-header">' +
                  '<p>'+ postInput + '</p>' +
                  '<p>Posted By: <span><strong>' + nameInput + '</strong></span></p>' +
                  '<form class="comment-form hidden">' +
                  '<input class="comment-text" type="text" placeholder="Comment Text">' +
                  '<input class="comment-user" type="text" placeholder="Name">' +
                  '<button class="btn btn-primary comment-button" type="button">Add Comment</button>' +
                  '</form></div>' +
                  '</div>'

  // Add our saved inputs to the page and clear form
  $("#post-container").prepend(postHtml);
  $("#post-form")[0].reset();
}

///////////////////////////////////////////////////
/* MASTER CLICK HANDLER FOR ALL POST INTERACTION */
///////////////////////////////////////////////////
// Check for comment link click and only open comments for that post on click
// Add comment to it's parent post on 'Add Comment'
// Remove entire post + comments on 'Remove'
postContainerClick = function(event) {
  // Comment link handler
  if ($(event.target).hasClass('comment-link')) {
    $(event.target).next(".page-header").children(".comment-form").toggleClass("hidden")
  }

  // Add comment handler
  if ($(event.target).hasClass("comment-button")) {
    let commentUserInput = $(event.target).prev('.comment-user').val()
    let commentTextInput = $(event.target).prevAll('.comment-text').val()

    let commentHtml = '<p class="comment">' + commentTextInput + ' <em>' + 'Comment By: <strong>' + commentUserInput + 
                      ' </strong></em><a class="btn remove-comment" href="#"><i class="far fa-times-circle fa-lg"></i></a></p>';
    $(event.target).prevAll(".comment-text").before(commentHtml)
  }

  // Remove post handler
  if($(event.target).hasClass('remove-link')) {
    $(event.target).closest('.post').remove();
  }

  if($(event.target).parent().hasClass('remove-comment')) {
    //alert("Click remove comment icon")
    $(event.target).closest('p').remove();
  }

}

$(".post-button").on("click", postClicked);
$("#post-container").on("click", postContainerClick)
