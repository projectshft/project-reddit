$("button").click(() => {
  const $userPost = $("#post").val();
  const $userName = $("#name").val();

  $("#post").val("");
  $("#name").val("");

  const $divPosts = $(".posts").append("<div></div>");

  // $divPosts.append(
  //   `<div><button class="btn btn-link delete">remove</button> ${$userPost} - Posted By: ${$userName}<hr></div>`
  // );
  const b = $("<button>").html("remove").addClass("btn btn-link delete");
  // const p = $("<div>").html(`${$userPost} - Posted By: ${$userName}<hr>`);

  $divPosts.append(b);
  $divPosts.append(`${$userPost} - Posted By: ${$userName}<hr>`);
});

$(".posts").on("click", ".delete", function () {
  this.parentElement.remove();
});
