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
  '<div class="back-btn-div return-btn"><button type="button" class="btn btn-danger btn-lg">Back</button></div>'
);
$(commentForm).append(backBtn);
$(commentScreen).append(commentForm);
var selectedPost = $(".selected-post");

////////////////////
//Variable to keep all posts and their associated comments. It'll be an array of objects
var allPosts = [];

//////////////////////
//Click event for MAIN POST submit button - to list post's message and name of the poster
$(submitBtn).on("click", function (e) {
  var nameInputVal = $(nameInput).val();
  $(nameInputVal).css("fontWeight", "bold");
  var postInputVal = $(postInput).val();

  if (postInputVal === "") {
    $(".error-msg").css("display", "block");
    setTimeout(() => {
      $(".error-msg").css("display", "none");
    }, 3000);
  }

  if (postInputVal !== "") {
    var post = $("<p></p>").html(
      `<div><span class="icon-trash"></span><span class="icon-chat"></span>
      <span class="post-input-val">${postInputVal}</span> - Posted By: <span class="name-input-val">${nameInputVal}</span><div class="like-div"><span class="icon-like"></span></div><p class="like-count">0</p><div class="dislike-div"><span class="icon-dislike"></span></div><p class="dislike-count">0</p></div>`
    );

    ///Adding new post with a unique ID so we can locate it later
    $(post).addClass("post");
    var id = "id" + Math.random().toString(16).slice(2);
    $(post).attr("id", id);

    //Create object data and push to our global data array
    var postData = {
      id,
      name: nameInputVal,
      post: postInputVal,
      comments: [],
      likes: 0,
      dislikes: 0,
    };

    allPosts.push(postData);
    $(".post-container").append(post);
    $(post).append($("<hr class='separator-line'/>"));
  }

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
    var targetID = $(targetP).attr("id");
    $(targetP).remove();
    var arrayIndex = allPosts.findIndex((post) => post.id === targetID);
    allPosts.splice(arrayIndex, 1);
  }

  ///////////////////////////////////////////////
  //////Now to transition to a new comment box with the selected post visible (all other posts hidden in this new box)
  if ($(e.target).hasClass("icon-chat")) {
    $(commentScreen).css("display", "block");
    $(commentScreen).append(commentForm);
    $(commentForm).css("margin-top", "4rem");
    $(commentForm).find(".btn-primary").addClass("submit-btn-comments");
    $(".btn.submit-btn-comments").text("Submit");
    $(commentForm).find(".btn-primary").removeClass("submit-btn-main");

    var post = $(".post");
    //Selecting the post of interest
    var selectedPost = $(e.target).closest(".post");
    var clonePost = selectedPost.clone();
    $(clonePost).addClass("active");

    //Hiding the unselected posts and displaying the clone only in the comment area
    //Also displaying the 'return to posts' button on the navbar
    $(post).css("display", "none");
    $(clonePost).css("display", "block");
    $(".navbar").css("z-index", "1000");
    $(".return-btn").css("display", "block");

    $(".selected-post").html(clonePost);
    $(".selected-post .separator-line").remove();
    //I am greying out the like/dislikes here as I'm not making them functional on this page
    $(".selected-post .icon-like").css("color", "lightgrey");
    $(".selected-post .icon-dislike").css("color", "lightgrey");

    //Showing post comments that had been put before (if they exists) OR the general "no-comments-yet" text
    var postId = $(clonePost).attr("id");
    var arrayIndex = allPosts.findIndex((post) => post.id === postId);

    if (allPosts[arrayIndex].comments.length > 0) {
      for (var i = 0; i < allPosts[arrayIndex].comments.length; i++) {
        var name = allPosts[arrayIndex].comments[i].name;
        var post = allPosts[arrayIndex].comments[i].post;
        var likes = allPosts[arrayIndex].comments[i].likes;
        var dislikes = allPosts[arrayIndex].comments[i].dislikes;
        var comment = $("<p></p>").html(
          `<div"><span class="icon-trash"></span><span class="post-input-val">${post}</span> - Posted By: <span class="name-input-val">${name}</span><div class="like-div"><span class="icon-like"></span></div><p class="like-count">${likes}</p><div class="dislike-div"><span class="icon-dislike"></span></div><p class="dislike-count">${dislikes}</p></div>`
        );
        $(".comments").append(comment);
        $(comment).attr("id", allPosts[arrayIndex].comments[i].id);
      }
    } else if (allPosts[arrayIndex].comments.length === 0) {
      $(".comments").html(
        "<em class='no-comment-text'>There are no comments on this post yet.</em>"
      );
    }
  }
});

/////////////////////////////////////IN COMMENT SCREEN

//Click event for the comment submit btn
$(commentForm).on("click", function (e) {
  if ($(e.target).hasClass("submit-btn-comments")) {
    var nameInputVal = $(".comment-box  #name-input").val();
    $(nameInputVal).css("fontWeight", "bold");
    var postInputVal = $(".comment-box #post-input").val();
    $(".no-comment-text").css("display", "none");

    var comment = $("<p></p>").html(
      `<div"><span class="icon-trash"></span><div class="post-input"><span class="post-input-val">${postInputVal}</span></div> - Posted By: <span class="name-input-val">${nameInputVal}</span><div class="like-div"><span class="icon-like"></span></div><p class="like-count">0</p><div class="dislike-div"><span class="icon-dislike"></span></div><p class="dislike-count">0</p></div>`
    );

    var id = "id" + Math.random().toString(16).slice(2);
    $(comment).addClass("comment");
    $(".comments").append(comment);
    $(comment).attr("id", id);

    //Update our global array of data with a comment object (one per comment)
    var comment = {
      id,
      name: nameInputVal,
      post: postInputVal,
      likes: 0,
      dislikes: 0,
    };
    var postId = $(".active").attr("id");
    var arrayIndex = allPosts.findIndex((post) => post.id === postId);
    allPosts[arrayIndex].comments.push(comment);

    //Clear inputs after submission
    $("#name-input").val("");
    $("#post-input").val("");
  }
});

//Event listenders on COMMENT page
//This  one is specific for the post being commented on
$(".post-comment").on("click", function (e) {
  if ($(e.target).hasClass("icon-trash")) {
    var targetP = $(e.target).closest("p");
    var targetID = $(targetP).attr("id");
    var arrayIndex = allPosts.findIndex((post) => post.id === targetID);
    $(targetP).remove();
    $(".comments").html(
      "<em class='no-comment-text'>The post and associated comments have been removed.</em>"
    );

    //Deleting the post and all of its associated comments
    allPosts.splice(arrayIndex, 1);
    $(".post-container #" + targetID).remove();
  }
});

//Now for the trash button to be functional on the comments themselves
//Deletion means removing from the DOM but also from the global 'all posts' comment array
$(".comments").on("click", function (e) {
  if ($(e.target).hasClass("icon-trash")) {
    var targetPcomment = $(e.target).closest("p");
    var targetID = $(targetPcomment).attr("id");
    var targetPostID = $(".post-comment .selected-post .post").attr("id");
    var arrayIndex = allPosts.findIndex((post) => post.id === targetPostID);

    var commentIndex = allPosts[arrayIndex].comments.findIndex(
      (post) => post.id === targetID
    );

    $(targetPcomment).remove();
    allPosts[arrayIndex].comments.splice(commentIndex, 1);
  }
});

//Back button event listener to remove our 'cloned' active post and swithc back to the main post page again
//This works for both the return to post in the navbar and the back button (shared class)
$(".return-btn").click(function () {
  $(commentScreen).css("display", "none");
  $(".return-btn").css("display", "none");
  var clonePost = $(".active");
  $(commentScreen).remove(clonePost);
  $(".comments").html("");

  $(".post").css("display", "block");
});

//////////////////////////////////////////////
//EXTRA
//////////////////////////////////////////
//Implemented a like/dislikes button on the posts/comments
//Event listeners for those below - changing fields in the global array of post objects and updating the DOM
//First for the main post page (like/dislike)
$(".post-container").on("click", function (e) {
  if ($(e.target).hasClass("like-div") || $(e.target).hasClass("icon-like")) {
    var target = $(e.target).closest("p.post");
    var targetID = $(target).attr("id");
    var arrayIndex = allPosts.findIndex((post) => post.id === targetID);
    allPosts[arrayIndex].likes++;
    $(`#${targetID} .like-count`).html(allPosts[arrayIndex].likes);
  }
});

//AND a dislike button
$(".post-container").on("click", function (e) {
  if (
    $(e.target).hasClass("dislike-div") ||
    $(e.target).hasClass("icon-dislike")
  ) {
    var target = $(e.target).closest("p.post");
    var targetID = $(target).attr("id");
    var arrayIndex = allPosts.findIndex((post) => post.id === targetID);
    allPosts[arrayIndex].dislikes++;
    $(`#${targetID} .dislike-count`).html(allPosts[arrayIndex].dislikes);
  }
});

//Now for comment updates for likes/dislikes
$(".comments").on("click", function (e) {
  if ($(e.target).hasClass("like-div") || $(e.target).hasClass("icon-like")) {
    var targetPcomment = $(e.target).closest("p");
    var targetID = $(targetPcomment).attr("id");
    var targetPostID = $(".post-comment .selected-post .post").attr("id");
    var arrayIndex = allPosts.findIndex((post) => post.id === targetPostID);
    var commentIndex = allPosts[arrayIndex].comments.findIndex(
      (post) => post.id === targetID
    );
    allPosts[arrayIndex].comments[commentIndex].likes++;
    $(`#${targetID} .like-count`).html(
      allPosts[arrayIndex].comments[commentIndex].likes
    );
  }
});

$(".comments").on("click", function (e) {
  if (
    $(e.target).hasClass("dislike-div") ||
    $(e.target).hasClass("icon-dislike")
  ) {
    var targetPcomment = $(e.target).closest("p");
    var targetID = $(targetPcomment).attr("id");
    var targetPostID = $(".post-comment .selected-post .post").attr("id");
    var arrayIndex = allPosts.findIndex((post) => post.id === targetPostID);
    var commentIndex = allPosts[arrayIndex].comments.findIndex(
      (post) => post.id === targetID
    );
    allPosts[arrayIndex].comments[commentIndex].dislikes++;
    $(`#${targetID} .dislike-count`).html(
      allPosts[arrayIndex].comments[commentIndex].dislikes
    );
  }
});
