$(document).ready(() => {
  $('.submit').click(() => {
    const $name = $('#nameInput').val();
    const $message = $('#commentInput').val();

    $('.posts').append(
      `<div class="deleteMe"><p><strong>Name</strong>: ${$name} </p> <p><strong>Comment:</strong> ${$message} </p><button type="like" class="like btn-sm btn-primary m-1"><i class="bi bi-heart m-1"></i></button><button type="delete" class="delete btn-sm btn-primary">delete</button><hr></div>`
    );

    $($('#nameInput')).val('');
    $('#commentInput').val('');

    $('.delete').click((e) => {
      $(e.currentTarget).parent().remove();
    });

    $('.like').click((e) => {
      $(e.currentTarget).css('color', 'red');
    });
  });
});
