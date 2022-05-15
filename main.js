$(document).ready(() => {
  $('.submit').click(() => {
    const $name = $('#nameInput').val();
    const $message = $('#commentInput').val();

    $('.posts').append(
      `<div class="deleteMe"><p><strong>Name</strong>: ${$name} </p> <p><strong>Comment:</strong> ${$message} </p>  <button type="delete" class="delete btn-sm btn-primary">Remove</button><hr></div>`
    );

    $($('#nameInput')).val('');
    $('#commentInput').val('');

    $('.delete').click((e) => {
      e.preventDefault();
      const test = e.currentTarget;
      console.log(test);
      $(e.currentTarget).parent().remove();
    });
  });
});
