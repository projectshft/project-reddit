$("#submit").on("click", function () {
  var $name = $("#name").val();
  var $text = $("#text").val();

  createSubmitPost($name, $text);

  $("form :input").val("");
});


var createSubmitPost = function ($name, $text) {
  $(".posts").append('<div class="post">' + '<button class="btn btn-link" id="remove">remove</button>' + '<button class="btn btn-link" id="comments">comments</button>' + $text + " - " + "Posted By: " + $name + "<hr></div");

  $("form :input").val("");
};

$(".posts").on("click", "#remove", function () {
  $(this).closest(".post").remove();
});

$(".posts").on("click", "#comments", function () {
  $(this).append($("#comment-form"));
  $("#comment-form").toggle();
});

