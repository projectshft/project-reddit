$(document).ready(function () {
  $('.btn-post').on('click', function () {
    const $name = $('#name').val();
    const $message = $('#message').val();

    const $parentLi = $('<li></li>').addClass('parent-li');

    const $pTagPost = $(`<li></li>`)
      .html(`<h5 class='lead'>${$message} —— Posted By:${$name}</h5>`)
      .addClass('child-li');

    const $deletePost = $('<button></button>')
      .text('Delete Post')
      .addClass('btn btn-link delete-btn');
    const $commentInput = $('<form></form>')
      .html(
        `<h4 class='text-center'>Add a comment</h4><input id="name" type="text" class="form-control comment-name" placeholder="add comment name here" ><br>
    <textarea id="comment-message" type="text" class="form-control comment-message" placeholder="comment message" ></textarea>`
      )
      .addClass('comment-input');
    const $viewComments = $('<button></button>')
      .text('Add Comment')
      .addClass('btn btn-link view-comment-btn');

    $parentLi.appendTo('.post-lists');
    $pTagPost.appendTo('.parent-li');

    $deletePost.appendTo('.parent-li');

    $viewComments.appendTo('.parent-li');
    $commentInput.appendTo('.child-li');

    $('.delete-btn').on('click', function (e) {
      console.log(e);
      const $remove = $(e.target.parentElement);
      $remove.remove();
    });
  });

  $('.post-container').on('click', '.view-comment-btn', function () {
    const $commentName = $('.comment-name').val();
    const $commentMessage = $('.comment-message').val();
    const $removeCommentBtn = $('<button></button>')
      .html('Delete Comment')
      .addClass('btn btn-link delete-comment');

    const $commentText = $(`<p><p>`).html(
      `${$commentMessage} ——Posted By: ${$commentName} `
    );
    $removeCommentBtn.appendTo($commentText);
    $commentText.insertBefore('.comment-input');
  });

  $('.post-container').on('click', '.delete-comment', function (e) {
    console.log(e.target.parentElement);
    const $remove = $(e.target.parentElement);
    $remove.remove();
  });
});

//  <form>comm
//   <label for="name">Name:</label><br>
//   <input type="text" id="comment-name" name="fname"><br>
//   <label for="comment">Comment:</label><br>
//   <input type="text" id="comment-message" name="comment">
// </form>
