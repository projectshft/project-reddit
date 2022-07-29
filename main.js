$("button").click(() => {
  let $userPost = $("#post").val();
  let $userName = $("#name").val();
  let $divPosts = $(".posts").append("<div></div>");

  $divPosts.append(`<p>${$userPost} - Posted By: ${$userName}</p> <hr>`);

  rmPost();
});

const rmPost = function () {
  $("p").click(function () {
    $(this).remove();
  });
};
