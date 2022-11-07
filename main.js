$("body").on("click", ".post-button", function () {
  var post = $(".post").find("input").val();
  var poster = $(".poster").find("input").val();
  $("#add").append(
    $(
      `<div class="post-text"><p><span class="text-primary font-weight-bold comments">comments </span>${post} - <strong>Posted By:</strong> ${poster}<i class="delete-button fa-solid fa-trash"></i></p></div>`
    )
  );

  $(
    `<div class="hide" style="display:none">
      <div class="mt-4 comment">
        <input class="w-100" type="text" placeholder="Comment Text">
      </div>
      <div class="my-3 commenter">
        <input class="w-100" type="text" placeholder="Your Name">
      </div>
      <div>
        <button class="btn btn-primary my-2 comment-button">Submit Comment</button>
    </div><hr/>`
  ).insertAfter($("p").last());
});

$("body").on("click", ".comments", function () {
  if ($(this).closest("p").nextAll(".hide")[0].style.display === "none") {
    $(this).closest("p").nextAll(".hide")[0].style.display = "block";
  } else {
    $(this).closest("p").nextAll(".hide")[0].style.display = "none";
  }
});

$("body").on("click", ".delete-button", function () {
  $(this).closest("div").remove();
});

$("body").on("click", ".comment-button", function () {
  var comment = $(".comment").find("input").val();
  var commenter = $(".commenter").find("input").val();
  $(this)
    .closest(".hide")
    .prepend(
      `<div class="comment-text"><p>${comment} - <strong>Posted By:</strong> ${commenter} <i class=" delete-button fa-solid fa-xmark"></i></p></div>`
    );
});
