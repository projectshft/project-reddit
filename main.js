$("button").click(() => {
  const $userPost = $("#post").val();
  const $userName = $("#name").val();

  $("#post").val("");
  $("#name").val("");

  const $divPosts = $(".posts").append("<div></div>");

  $divPosts.append(
    `<div class="post-head"><button class="btn btn-link delete">remove</button> ${$userPost} - Posted By: ${$userName}<hr></div>`
  );
});

$(".posts").on("click", ".delete", function () {
  this.parentElement.remove();
});
