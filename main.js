$(document).ready(() => {
  // Submit button //
  $('.submit').click(() => {
    const $name = $('#nameInput').val();
    const $message = $('#commentInput').val();
    $('.posts').append(
      `<div class="deleteMe">
        <div class="d-flex">
          <p class="text-primary p-1">Name:</p>
              <span class="p-1">${$name}</span>
        </div>
        <div class="d-flex">
          <p class="text-primary p-1">Comment:</p>
              <span class="p-1">${$message}</span>
        </div>
        <div class="d-flex">
        <button type="like" class="like btn-sm btn-primary m-1">
            <i class="bi bi-heart-fill p-1"></i></button>
        <button type="delete" class="delete btn-sm btn-primary m-1">
            <i class="bi bi-trash p-1"></i></button>
        </div>
        <hr>
        </div>`
    );
    // Reset Placeholder //
    $($('#nameInput')).val('');
    $('#commentInput').val('');

    // Delete post //
    $('.delete').click((e) => {
      $(e.currentTarget).parent().parent().remove();
    });

    // Like post //
    $('.like').click((e) => {
      $(e.currentTarget).toggleClass('text-danger');
    });
  });

  // Word Count //
  $('#commentInput').on('keyup', (e) => {
    const $thePost = $(e.currentTarget).val();
    const wordsRemaining = 150 - $thePost.length;
    if (wordsRemaining <= 0) {
      $('.count').addClass('text-danger');
    } else {
      $('.count').removeClass('text-danger');
    }
    $('.wordsToCount').html(wordsRemaining);
  });

  // Reset Word Count //
  $('.submit').click(() => {
    $('.wordsToCount').html('150');
    $('.count').removeClass('text-danger');
  });
});
