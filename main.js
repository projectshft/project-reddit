// Button click event for posting on ReReddit App
$("input#post-button").on("click", function(e) {
  var $postText = $("#post-text");
  var $postName = $("#post-name");
  // Logic so user can't submit post before inserting a value into the inputs
  if ($postText.val() !== '' && $postName.val() !== '') {
    $(".post-section").append("<div class='commentDivSection'><a href='#' class='text-primary removePost'>remove</a> <p style='display: inline'>" + $postText.val() + " - Posted By: " + $postName.val() + "</p><hr></div>");
    bindEvent1();
    // Resets text inputs after input value is submitted
    $("form#post-form").trigger("reset");
  } else {
    return;
  }
});

// Function that binds event clicks on remove button to account for future post
var bindEvent1 = function() {
  $("a.removePost").on("click", function(e) {
    $(e.target).parent().remove();
  })
};
