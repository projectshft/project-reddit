$(document).ready(() => {

  $('#post-button').on('click', () => {

    var $postInputed = $('<div class="remove"><span><a href="#" class="remove-it">remove</a></span>' + ' ' + '<span><a href="#" class="toggle-me">comments</a></span>' + ' '+ '<span>' + $('#post-input').val() + '</span>');
    var $nameInputed = $('<p>' + '<b>Posted by:</b> ' + $('#name-input').val() + '</p><hr></div>');
    var $commentForm = $(
      '<div class="comments">' +
      '<input type="text" id="comment-input" class="comments" placeholder="Comment Text"></input>' +
      '<input type="text" id="username-input" class="comments" placeholder="User Name"></input>' +
      '<button type="button" id="comment-button" class="comments btn btn-primary btn-sm">Comment</button>' +
      '</div>'

    );



//post section
    $('.post-section').append($postInputed);
    $('#post-input').val('');



    $('.post-section').append($commentForm);

    $('.post-section').append($nameInputed);
    $('#name-input').val('');


//comments hide toggle
    $('.comments').hide();
    $('.toggle-me').on('click', () => {
      $('.comments').toggle();
    });
//remove post- only works one time
    $('.remove-it').on('click', () => {
      $('.post-section').remove();
    });

    //add comments
    $('#comment-button').on('click', () => {
      var $commentInput = $('<p class="comments">' + $('#comment-input').val() + '</p>');
      var $usernameInput = $('<span class="comments">' + '<b>Posted by:</b> ' + $('#username-input').val() + ' ' + '<a href="#" class="remove-it">remove</a></span>');

      $('.post-section').append($commentInput);
      $('#comment-input').val('');

      $('.post-section').append($usernameInput);
      $('#username-input').val('');
  });

  });
})
