const remove = '<a class= r> remove </a>';
const comments = '<a class = c> comments </a>';

const clear = function () {
  $('#message').val(null);
  $('#name').val(null);
};

$('.btn').on('click', () => {
  const $text = $('#message').val();
  const $name = $('#name').val();

  $('.posts').append(`<div>${remove} ${comments}  ${$name} - ${$text}</div>`);

  clear();

  $('.r').on('click', function () {
    $(this).closest('div').remove();
  });
});
