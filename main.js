// Button click event for posting name and text
var $button = $(".button");
$button.on("click", function(e) {
  var $post = $("#postText");
  var $name = $("#yourName");
  // Logic so user can't submit post before inserting a value into the inputs
  if ($post.val() !== '' && $name.val() !== '') {
    var $postSection = $(".post-section");
    $postSection.append("<div><a href='#' class='text-primary'>Remove</a><p>" + $post.val() + " - Posted By: " + $name.val() + "</p><hr></div>");
    bindEvent();
    // Resets text inputs after input value is submitted
    $("form").trigger("reset");
  } else {
    return;
  }
});

// Function to bind event clicks to account for future post
var bindEvent = function() {
  var $remove = $('a');
  $remove.on('click', function(e) {
    var $removePost = $(e.target).parent();
    $removePost.remove();
})
}
