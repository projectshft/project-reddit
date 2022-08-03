function isValidName(name) {
  const regex = /^[A-Za-z].*/;
  return regex.test(name);
}
function isValidMessage(msg) {
  return msg.length > 0;
}
function resetInputs() {
  $('#new-message').val('');
  $('#user-name').val('');
}
function addPost() {
  const message = $('#new-message').val();
  const name = $('#user-name').val();
  if (isValidMessage(message) && isValidName(name)) {
    const commentInputSection = `<form style="margin-top:10px;" onsubmit="event.preventDefault();">
    <div class="form-group">
      <input class="commenter-name" name="commenter-name" type="text"
        class="form-control"
        placeholder="Name" pattern="^[A-Za-z].*" title="Please begin your username with a letter" ></input>
    </div>
    <div class="form-group">
      <textarea class="comment-message" name="new-message" type="text"
      class="form-control"
      placeholder="Comment"></textarea>
    </div>
    <button class="btn btn-primary comment-btn">Post Comment</button>
  </form>`;

    const commentSectionTemplate = `<section class="comment-list"></section>`;
    const template = `<div class="container post">
    <div class="row">
    <div class="col-xs-1 col-md-1 text-left post-header">
      <div class="post-bubble text-center"><i class="fa-solid fa-${name[0].toLowerCase()}"></i></div>
    </div>
    <div class="col-xs-10 col-md-4">
      <strong class = "post-author"></strong>
    </div>
    </div>
    <div class="row">
      <p class = "col-md-9 post-comment"></p>
    </div>
    <button class="btn btn-danger remove">Remove</button>
    <button class="btn btn-info btn-comments">Comments</button>
    <button type="button" class="btn btn-secondary edit">Edit Post</button>
    <div class="comments hidden">
      ${commentSectionTemplate}
      ${commentInputSection}
    </div>
    </div>
    <hr></hr>`;
    const $post = $(template);
    $post.data('comments', []);

    // done for security reasons so no HTML can be injected via the html template
    $post.find('.post-author').text(name);
    $post.find('.post-comment').text(message);

    $('.posts').append($post);
    resetInputs();

    // using jquery to scroll to the bottom of posts section
    const postScrollHeight = $('.posts').prop('scrollHeight');
    $('.posts').scrollTop(postScrollHeight);
  }
}
function renderPosts(post) {
  const $commentList = post.find('.comment-list');
  $commentList.empty();
  const commentArray = post.data('comments');
  let comments = '';
  for (let i = 0; i < commentArray.length; i += 1) {
    comments += `<div class="comment" data-index="${i}"> <button class="btn btn-warning comment-removal remove">X</button>${commentArray[i].comment} - Comment by: ${commentArray[i].name} }</div>`;
  }
  $commentList.append(comments);
}

function toggleComments() {
  const commentSection = $(this).parent().find('.comments');
  if (commentSection.hasClass('hidden')) {
    commentSection.removeClass('hidden');
  } else {
    commentSection.addClass('hidden');
  }
}

function addComment() {
  const comment = $(this).parent().find('.comment-message').val();
  const name = $(this).parent().find('.commenter-name').val();
  const $post = $(this).closest('.post');
  if (isValidMessage(comment) && isValidName(name)) {
    const commentData = {
      name,
      comment,
    };
    $post.data('comments').push(commentData);
    renderPosts($post);
    $(this).parent().find('.comment-message').val('');
    $(this).parent().find('.commenter-name').val('');
  }
}

function remove() {
  if ($(this).hasClass('comment-removal')) {
    const dataArray = $(this).closest('.post').data('comments');
    dataArray.splice($(this).closest('.comment').data('index'), 1);
    renderPosts($(this).closest('.post'));
  }
  $(this).parent().remove();
}

function editPost() {
  const message = $(this).closest('.post').find('.post-comment');
  if (message.hasClass('edit-message')) {
    const $messageTemplate = $(`<p class = "col-md-9 post-comment"></p>`);
    $messageTemplate.text(message.val());
    message.replaceWith($messageTemplate);
    $(this).text('Edit Post');
  } else {
    const $editTemplate =
      $(`<input class="col-md-9 edit-message post-comment" name="new-message" type="text"
  class="form-control"></input>`);
    $(this).text('Save Changes');
    const messageText = message.text();
    $editTemplate.val(messageText);

    message.replaceWith($editTemplate);
  }
}
// Event listeners
$('#submit').click(addPost);

$('.posts').on('click', '.remove', remove);

$('.posts').on('click', '.btn-comments', toggleComments);

$('.posts').on('click', '.comment-btn', addComment);

$('.posts').on('click', '.edit', editPost);
