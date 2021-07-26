$('#submit').on('click', function () {
  var textInput = $('#message').val();
  var nameInput = $('#name').val();

    var removeComment = $('#remove-comment');
    var addComment = $('#add-comment');

  $('.posts').append('<li>' + textInput + ' - Posted By: ' + nameInput + '</li>');
 
  $('li').on('click', function (e) {
  
    var $newPost = $(e.target);

    $newPost.remove();
  });
});