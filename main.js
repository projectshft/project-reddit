// after document is ready
$(document).ready(function () {
  // add post button
  $('.add-post').on('click', function (e) {
    e.preventDefault(); // prevent page from refreshing
    // get values of post inputs
    const $name = $('#name').val();
    const $post = $('#post').val();
    // create h5 and p tags
    const $newPost = $('<h5></h5>').text($post).addClass('mb-1');
    const $newName = $('<p></p>').text(`Posted By: ${$name}`).addClass('mb-1');
    // create delete post button
    const $deletePostBtn = $('<button></button>')
      .text('Delete Post')
      .addClass('btn btn-danger delete-post');
    // toggle comments
    const $toggleComments = $('<button></button>')
      .text('Toggle Comments')
      .addClass('btn btn-secondary toggle-comments');
    // create add comments button
    const $addCommentBtn = $('<button></button>')
      .text('Add Comment')
      .addClass('btn btn-primary add-comment');
    // create comments list
    const $commentsList = $('<ul></ul>').addClass('list-group comments');
    // wrap inner additions in an a tag
    const $newPostToAdd = $('<a></a>').addClass(
      'list-group-item list-group-item-action post-item'
    );
    // create inputs for comments
    const $commentForm = $('<input></input>')
      .addClass('form-control')
      .attr({ id: 'comment', placeholder: 'Comment' });
    const $nameForm = $('<input></input>')
      .addClass('form-control')
      .attr({ id: 'comment-name', placeholder: 'Name' });
    // append all the creations into the a tag
    $newPostToAdd.append(
      $newPost,
      $newName,
      $commentsList,
      $deletePostBtn,
      $toggleComments,
      $commentForm,
      $nameForm,
      $addCommentBtn
    );
    // add all the additions to the main div with class of .posts
    $('.posts').append($newPostToAdd);
  });
  // button action for delete posts
  $('.posts').on('click', '.delete-post', (e) => {
    const $remove = $(e.target.parentElement);
    $remove.remove();
  });
  // button action for toggle comments
  $('.posts').on('click', '.toggle-comments', (e) => {
    const $targetComment = $(e.target).closest('.post-item');
    $targetComment.find('.comments').toggle();
  });
  // button action for delete comments
  $('.posts').on('click', '.delete-comment', (e) => {
    const $remove = $(e.target.parentElement);
    $remove.remove();
  });
  // button action for add comments
  $('.posts').on('click', '.add-comment', (e) => {
    e.preventDefault(); // prevents page referesh causes add buttons to not work
    // get values of inputs
    const $commentName = $('#comment-name').val();
    const $comment = $('#comment').val();
    // create li tag for comment
    const $addComment = $('<li></li>')
      .text(`${$comment} ——Posted By: ${$commentName}`)
      .addClass('list-group-item comment');
    // button for delete comment
    const $deleteCommentBtn = $('<button></button>')
      .text('Delete Comment')
      .addClass('btn btn-outline-danger delete-comment btn-sm');

    $addComment.append($deleteCommentBtn);
    // grabs the closet of the target finds the comments class and appends to li
    $(e.target).closest('.post-item').find('.comments').append($addComment);
  });
  // deletes all comments button action
  $('.posts').on('click', '.delete-all-comments', (e) => {
    e.preventDefault(); // to prevent page refresh
    // grabs the closet of the target finds the comments class and removes it
    $(e.target).closest('.post-item').find('.comments').remove();
  });
});
