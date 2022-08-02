function isValidName(name) {
  const regex = /^[A-Za-z].*/;
  return regex.test(name);
}
function isValidMessage(msg) {
  return msg.length > 0;
}

function addPost() {
  const message = $('#new-message').val();
  const name = $('#user-name').val();
  if (isValidMessage(message) && isValidName(name)) {
    const template = `<div class="container">
    <div class="row">
    <div class="col-xs-1 col-md-1 text-left post-header">
      <div class="post-bubble text-center"><i class="fa-solid fa-${name[0].toLowerCase()}"></i></div>
    </div>
    <div class="col-xs-10 col-md-4">
      <strong class = "post-author">${name}</strong>
    </div>
    </div>
    <div class="row">
      <p class = "col-md-12 post-comment"> ${message} </p>
    </div>
    <button class="btn btn-danger remove">Remove</button>
    </div>
    <hr></hr>`;
    const $post = $(template);
    $('.posts').append($post);
    $('#new-message').val('');
    $('#user-name').val('');

    // using jquery to scroll to the bottom of posts section
    const postScrollHeight = $('.posts').prop('scrollHeight');
    $('.posts').scrollTop(postScrollHeight);
  }
}

$('#submit').click(addPost);

// create listener for new .remove buttons that are children of .posts
$('.posts').on('click', '.remove', function () {
  $(this).parent().remove();
});
