// On post button click, retrieve "Post Text" and "Name" from form inputs
postClicked = function() {
  let postInput = $("#post-text").val()
  let nameInput = $("#name-text").val()
  if (!postInput || !nameInput) {
    alert('Please fill in all fields')
    return;
  }

  let postHtml  = '<div class="page-header">' +
                  '<p>'+ postInput + '</p>' +
                  '<p>Posted By: <span><strong>' + nameInput + '</strong></span></p>' +
                  '<form class="comment-form">' +
                  '<input id="comment-text" type="text" placeholder="Comment Text">' +
                  '<input id="comment-user" type="text" placeholder="Name">' +
                  '<button class="btn btn-primary comment-button">Add Comment</button>' +
                  '</form></div>'

  // Add our saved inputs to the page and clear form
  $("#post-container").prepend(postHtml);
  $("#post-form")[0].reset();

  //$(".comment-form").hide();
}

$(".post-button").on("click", postClicked);