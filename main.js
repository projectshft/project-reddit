$('.btn-post').on('click', function () {
  const $name = $('#name').val();
  const $message = $('#message').val();

  const $parentLi = $('<li></li>').addClass('parent-li');

  const $pTagPost = $(`<p></p>`).text(`${$message} —— Posted By:${$name}`);

  const $viewComments = $('<button></button>')
    .text('View Comments')
    .addClass('btn btn-link view-comment-btn');

  const $deletePost = $('<button></button>')
    .text('Delete Post')
    .addClass('btn btn-link delete-btn');

  $parentLi.appendTo('.post-lists');
  $pTagPost.appendTo('.parent-li');

  $deletePost.appendTo('.parent-li');

  $viewComments.appendTo('.parent-li');

  $('.view-comment-button').on('click', function (e) {
    console.log(e);
  });

  $('.delete-btn').on('click', function (e) {
    console.log(e);
    const $remove = $(e.target.parentElement);
    $remove.remove();
  });
});
