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
    // <div class="comment">
    // <button class="btn btn-warning comment-removal remove">X</button>
    // <span>Im a comment- Dillon</span>
    // </div>
    const template = `<div class="container post">
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
    <button class="btn btn-info btn-comments">Comments</button>
    <div class="comments hidden">
      ${commentSectionTemplate}
      ${commentInputSection}
    </div>
    </div>
    <hr></hr>`;
    const $post = $(template);
    $post.data('comments', []);
    $('.posts').append($post);
    resetInputs();

    // using jquery to scroll to the bottom of posts section
    const postScrollHeight = $('.posts').prop('scrollHeight');
    $('.posts').scrollTop(postScrollHeight);
  }
}
function renderPosts(post) {
  const $commentList = post.find('.comment-list');
  // console.log($commentList, 'commentList');
  $commentList.empty();
  // while ($commentList.children().length > 0) {
  //   $commentList.find('.comment').remove();
  //   console.log($commentList.children());
  // }
  const commentArray = post.data('comments');
  let comments = '';
  for (let i = 0; i < commentArray.length; i += 1) {
    comments += `<div class="comment" data-index="${i}"> <button class="btn btn-warning comment-removal remove">X</button>${commentArray[i].comment} - Comment by: ${commentArray[i].name} }</div>`;
  }
  $commentList.append(comments);
}
$('#submit').click(addPost);

// create listener for new .remove buttons that are children of .posts
$('.posts').on('click', '.remove', function () {
  // console.log($(this).parent());
  // console.log($(this).parent().parent());

  if ($(this).hasClass('comment-removal')) {
    const dataArray = $(this).closest('.post').data('comments');
    dataArray.splice($(this).closest('.comment').data('index'), 1);
    renderPosts($(this).closest('.post'));
  }
  $(this).parent().remove();
});

$('.posts').on('click', '.btn-comments', function () {
  const commentSection = $(this).parent().find('.comments');
  if (commentSection.hasClass('hidden')) {
    commentSection.removeClass('hidden');
  } else {
    commentSection.addClass('hidden');
  }
  // console.log($(this).parent().data('comments'));
});

$('.posts').on('click', '.comment-btn', function () {
  const comment = $(this).parent().find('.comment-message').val();
  const name = $(this).parent().find('.commenter-name').val();
  const $post = $(this).closest('.post');
  if (isValidMessage(comment) && isValidName(name)) {
    const commentData = {
      name,
      comment,
    };
    $post.data('comments').push(commentData);
    // console.log($post.data('comments'));
    renderPosts($post);
    // const postScrollHeight = $(this).prop('scrollHeight');
    // $('.posts').scrollTop(postScrollHeight);
  }
});

// function renderCart() {
//   const commentList = document.getElementsByClassName('cart-list')[0];

//   while (cartList.hasChildNodes()) {
//     cartList.removeChild(cartList.firstChild);
//   }

//   let items = '';
//   for (let i = 0; i < cart.length; i++) {
//     items += `${'<div>' + 'QTY: '}${cart[i].quantity} - ${cart[i].name} - $${
//       cart[i].price * cart[i].quantity
//     }</div>`;
//   }
//   document.querySelector('.total').innerText = total;
//   cartList.innerHTML = items;
// }

// document.querySelector('.clear-cart').addEventListener('click', () => {
//   cart = [];
//   total = 0;
//   renderCart();
// });
