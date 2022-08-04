$("button").click(() => {
  const $userPost = $("#post").val();
  const $userName = $("#name").val();

  $("#post").val("");
  $("#name").val("");

  const $divPosts = $(".posts").append("<div></div>");

  $divPosts.append(
    `<div><p>${$userPost} - Posted By: ${$userName}</p><hr></div>`
  );

  rmPost();
});

const rmPost = function () {
  $("p").click(function () {
    this.parentElement.remove();
  });
};
