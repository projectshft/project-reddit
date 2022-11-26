// Button click event for posting name and text
var $postButton = $("input#post-button");
$postButton.on("click", function(e) {
  var $postText = $("#post-text");
  var $postName = $("#post-name");
  // Logic so user can't submit post before inserting a value into the inputs
  if ($postText.val() !== '' && $postName.val() !== '') {
    var $postSection = $(".post-section");
    $postSection.append("<div class='commentDivSection'><a href='#' class='text-primary removePost'>remove</a> <a href='#' class='text-primary addComment'>comment</a> <p style='display: inline'>" + $postText.val() + " - Posted By: " + $postName.val() + "</p><hr></div>");
    bindEvent1();
    // bindEvent2(); Function not currently in use
    // Resets text inputs after input value is submitted
    $("form#post-form").trigger("reset");
  } else {
    return;
  }
});

// Function that binds event clicks on remove button to account for future post
var bindEvent1 = function() {
  var $removePostQuery = $("a.removePost");
  $removePostQuery.on("click", function(e) {
    var $removePost = $(e.target).parent();
    $removePost.remove();
  })
};

// Function that binds event clicks on comment button to account for future post
// var bindEvent2 = function() {
//   var $addCommentQuery = $("a.addComment");
//   $addCommentQuery.on("click", function(e) {
//     var $commentSection = $("div.commentDivSection");
//     $commentSection.find("p").after("<form id='comment-form'><input class='form-control my-4' type='text' name='' id='comment-text' placeholder='Comment Text'><input class='form-control my-4' type='text' name='' id='comment-name' placeholder='Your Name'><input class='btn btn-primary' id='comment-button' type='button' value='Submit Comment'></form>");
    
//     // Button click event for commenting name and text on post
//     var $commentButton = $("input#comment-button");
//     $commentButton.on("click", function(e) {
//       var $commentText = $("#comment-text");
//       var $commentName = $("#comment-name");
//       // Logic so user can't submit comments before inserting a value into the inputs
//       if ($commentText.val() !== '' && $commentName.val() !== '') {
//         $commentSection.find("p").after("<br /><a href='#' class='text-primary removePost'>remove</a> <p style='display: inline'>" + $commentText.val() + " - Posted By: " + $commentName.val() + "</p><hr>");

//         $("form#comment-form").trigger("reset");
//       } else {
//         return;
//       }
//     });
//   })
// };
