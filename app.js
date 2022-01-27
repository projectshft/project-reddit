"use strict";

// Variables needed for later actions

var container = $(".container");
var form = $("form");
var submitBtn = $(".submit-btn");
var nameInput = $("#name-input");
var postInput = $("#post-input");
var commentScreen = $(".comment-box");
var commentForm = $(container).clone();
var backBtn = $(
  '<div class="back-btn-div"><button type="button" class="btn btn-danger btn-lg">Back</button></div>'
);
$(commentForm).append(backBtn);
$(commentScreen).append(commentForm);
var selectedPost = $(".selected-post");

////////////////////
//Variable to keep all posts with unique ids(id creation mentioned later)
var allPosts = [];

//Variable to map original posts with their comments
var postComments = [];

//////////////////////
//Click event for MAIN POST submit button - to list post's message and name of the poster
$(submitBtn).on("click", function (e) {
  var nameInputVal = $(nameInput).val();
  $(nameInputVal).css("fontWeight", "bold");
  var postInputVal = $(postInput).val();

  var post = $("<p></p>").html(
    `<div"><span class="icon-trash"></span><span class="icon-chat"></span>
      <span class="post-input-val">${postInputVal}</span> - Posted By: <span class="name-input-val">${nameInputVal}</span></div>`
  );

  // if ($(e.target).hasClass("submit-btn-main")) {
  $(post).addClass("post");
  var id = allPosts.length + 1;
  $(post).attr("id", id);
  allPosts.push(post);
  $(".post-container").append(post);
  $(post).append($("<hr class='separator-line'/>"));

  //Clear inputs after submission
  $(nameInput).val("");
  $(postInput).val("");
});

/////////////////////
//Add an event listener to the post-container for trash/comments
//First action is to remove 'trashed' ittems from the display AND the array holding all of the posts

$(".post-container").click(function (e) {
  if ($(e.target).hasClass("icon-trash")) {
    var targetP = $(e.target).closest("p");
    var targetID = parseInt($(targetP).attr("id"));
    $(targetP).remove();
    allPosts.splice(targetID - 1, 1);
  }

  //////Now to transition to a new comment box with the selected post visible (all other posts hidden in this new box)
  if ($(e.target).hasClass("icon-chat")) {
    $(commentScreen).css("display", "block");
    $(commentScreen).append(commentForm);
    $(commentForm).css("margin-top", "4rem");
    $(commentForm).find(".btn-primary").addClass("submit-btn-comments");
    $(commentForm).find(".btn-primary").removeClass("submit-btn-main");

    var post = $(".post");
    //Selecting the post of interest
    var selectedPost = $(e.target).closest(".post");
    var clonePost = selectedPost.clone();
    $(clonePost).addClass("active");

    //Hiding the unselected posts and displaying the clone
    $(post).css("display", "none");
    $(clonePost).css("display", "block");

    $(".selected-post").html(clonePost);
    $(".selected-post .separator-line").remove();

    //Showing post comments that had been put before
    var postId = parseInt($(clonePost).attr("id"));
    console.log(postId, typeof postId);

    var arraySegment = allPosts[postId - 1];

    if (arraySegment.length > 1) {
      console.log("lots of posts");
      for (var i = 1; i < arraySegment.length; i++) {
        $(".comments").append(arraySegment[i]);
      }
    }
  }
});

/////////////////////////////////////IN COMMENT SCREEN

//Click event for the comment submit btn
$(commentForm).on("click", function (e) {
  console.log("clicked", e.target);

  if ($(e.target).hasClass("submit-btn-comments")) {
    console.log("yes");

    var nameInputVal = $(".comment-box  #name-input").val();
    $(nameInputVal).css("fontWeight", "bold");
    var postInputVal = $(".comment-box #post-input").val();

    var comment = $("<p></p>").html(
      `<div"><span class="icon-trash"></span><span class="icon-chat"></span>
      <span class="post-input-val">${postInputVal}</span> - Posted By: <span class="name-input-val">${nameInputVal}</span></div>`
    );

    $(comment).addClass("comment");
    var postId = $(".active").attr("id");

    allPosts[postId - 1].push([comment]);
    console.log(allPosts);

    $(".comments").append(comment);

    //Clear inputs after submission
    $("#name-input").val("");
    $("#post-input").val("");
  }
});

$(backBtn).click(function () {
  //first remove comment screen and get rid of our cloned "active" post
  $(commentScreen).css("display", "none");
  var clonePost = $(".active");
  $(commentScreen).remove(clonePost);
  $(".comments").html("");

  //Make the remaining posts visible again
  $(".post").css("display", "block");
  $(".post").css("visibility", "visible");
});
