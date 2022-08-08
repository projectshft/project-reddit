function isValidName(name) {
  // valid if only contains letters from a to Z
  const regex = /^[A-Za-z].*/;
  return regex.test(name);
}
function isValidMessage(msg) {
  // no empty messages allowed
  return msg.length > 0;
}
function resetInputs() {
  $('#new-message').val('');
  $('#user-name').val('');
}
function buildPostTemplate(name) {
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
  const baseTemplate = `<div class="container post">
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

  return baseTemplate;
}
function addPost() {
  // Need to grab user input to check if valid for a new post
  const message = $('#new-message').val();
  const name = $('#user-name').val();
  if (isValidMessage(message) && isValidName(name)) {
    const template = buildPostTemplate(name);
    const $post = $(template);
    // This data attribute on the post element will hold the comments for this specific post
    $post.data('comments', []);

    // done so no HTML can be injected via the html template (without the user changing the client's code)
    $post.find('.post-author').text(name);
    $post.find('.post-comment').text(message);

    $('.posts').append($post);
    resetInputs();

    // using jquery to scroll to the bottom of posts section every time a post is added
    const postScrollHeight = $('.posts').prop('scrollHeight');
    $('.posts').scrollTop(postScrollHeight);
  }
}

function buildCommentTemplate(index, comment, name) {
  return `<div class="comment" data-index="${index}"> <button class="btn btn-warning comment-removal">X</button>${comment} - Comment by: ${name} }</div>`;
}

function renderComments(post) {
  const $commentList = post.find('.comment-list');
  $commentList.empty();
  const commentArray = post.data('comments');
  let comments = '';
  for (let i = 0; i < commentArray.length; i += 1) {
    comments += buildCommentTemplate(
      i,
      commentArray[i].comment,
      commentArray[i].name
    );
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
    renderComments($post);
    $(this).parent().find('.comment-message').val('');
    $(this).parent().find('.commenter-name').val('');
  }
}

function remove() {
  $(this).parent().remove();
}
function removeComment() {
  const dataArray = $(this).closest('.post').data('comments');
  dataArray.splice($(this).closest('.comment').data('index'), 1);
  renderComments($(this).closest('.post'));
  remove();
}
function editPost() {
  const message = $(this).closest('.post').find('.post-comment');
  // Conditional toggles the editing state depending on if the user if currently editing
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

$('.posts').on('click', '.comment-removal', removeComment);
