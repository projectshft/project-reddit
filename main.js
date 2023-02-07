$(document).ready(function() {
  $('.sub-btn').on('click', function() {
    let postText = $('#post-input').val();
    let nameText = $('#name-input').val();

    $('.posts').append('<li>' + postText + ' - Posted By: ' + nameText  + '<p class="rem-btn">' + 'remove' + '</p>' + '<hr />' + '</li>');
  });
});

$(document).ready(function() {
  $('.posts').on('click', '.rem-btn', function() {
    $(this).closest('li').remove();
    $(this).children('hr').remove()
    $(this).remove();
  });
});