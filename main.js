// On post button click, retrieve "Post Text" and "Name" from form inputs
postClicked = function() {
  let postInput = $("#post-text").val()
  let nameInput = $("#name-text").val()
  let postHtml  = '<div class="page-header">' +
                  '<p>'+ postInput + '</p>' +
  '<p>Posted By: <span><strong>' + nameInput + '</strong></span></p>' +
    '</div>'
    
// Add our saved inputs to the page
  $("#post-container").prepend(postHtml);

  $("#post-form")[0].reset();
}

$(".btn").on("click", postClicked);

