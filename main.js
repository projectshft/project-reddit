$(document).ready(function () {
  console.log('hello world');
  $('.add-post').on('click', function () {
    const $name = $('#name').val();
    const $post = $('#post').val();

    console.log('adding post', $name, $post);

    const $newPost = $('<h5></h5>').text($post).addClass('mb-1');
    const $newName = $('<p></p>').text($name).addClass('mb-1');
    const $deletePostBtn = $('<button></button>')
      .text('Delete')
      .addClass('btn btn-danger delete-post');
    const $newPostToAdd = $('<a></a>').addClass(
      'list-group-item list-group-item-action post-item'
    );

    $newPostToAdd.append($newPost, $newName, $deletePostBtn);

    $('.posts').append($newPostToAdd);
  });
  $('.posts').on('click', '.delete-post', (e) => {
    console.log('deleting post');
    const $remove = $(e.target.parentElement);
    $remove.remove();
  });

  $('.posts').on('click', '.delete-comment', (e) => {
    console.log('deleting comment');
    const $remove = $(e.target.parentElement);
    $remove.remove();
  });

  $('.posts').on('click', '.add-comment', () => {
    const $commentName = $('#comment-name').val();
    const $comment = $('#comment').val();
    console.log('adding  comment', $comment, $commentName);
    const $addComment = $('<li></li>').text('new comment');
    const $currentComments = $(this).closest('ul');

    $currentComments.append($addComment);
  });
});

/* <li class="list-group-item comment">
An item<button
  type="button"
  class="btn btn-outline-danger delete-comment btn-sm"
>
  Delete Comment
</button>
</li> */

/* <button type="button" class="btn btn-danger delete-post">Delete</button> */

/* <h5 class="mb-1">List group item heading</h5>
        <p class="mb-1">Some placeholder content in a paragraph.</p> */

// $('.btn-post').on('click', function () {
//   const $name = $('#name').val();
//   const $message = $('#message').val();

//   const $parentLi = $('<li></li>').addClass('parent-li');

//   const $pTagPost = $(`<p></p>`).text(`${$message} —— Posted By:${$name}`);

//   const $viewComments = $('<button></button>')
//     .text('View Comments')
//     .addClass('btn btn-link view-comment-btn');

//   const $deletePost = $('<button></button>')
//     .text('Delete Post')
//     .addClass('btn btn-link delete-btn');

//   $parentLi.appendTo('.post-lists');
//   $pTagPost.appendTo('.parent-li');

//   $deletePost.appendTo('.parent-li');

//   $viewComments.appendTo('.parent-li');

//   $('.view-comment-btn').on('click', function (e) {
//     alert(e.target.innerHTML);
//   });

//   $('.delete-btn').on('click', function (e) {
//     console.log(e);
//     const $remove = $(e.target.parentElement);
//     $remove.remove();
//   });
// });
