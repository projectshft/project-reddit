$(document).ready(() => {

  $('#post-button').on('click', () => {
    var $postInputed = $('<p>' + $('#post-input').val() + '</p>');
    var $nameInputed = $('<p>' + '<b>Posted by:</b> ' + $('#name-input').val() + '</p><hr>');
    var $testing = $(
      '<div class="comments">' +
        '<input type="text" id="comment-input" class="comments" placeholder="Comment Text"></input>' +
        '<input type="text" id="username-input" class="comments" placeholder="User Name"></input>' +
        '<button type="button" id="comment-button" class="comments btn btn-primary btn-sm">Comment</button>' +
      '</div>'
    );

    var $comments ='<a href="#" class="toggle-me">comment</a>'
    $('.post-section').append($comments);
    $('.post-section').append($postInputed);
    $('#post-input').val('');

    $('.post-section').append($testing);

    $('.post-section').append($nameInputed);
    $('#name-input').val('');

      //   $comments.click(function(){
      // $(this).toggle()
      // })
  });


          $('.comments').hide();

  $('a').click(()=>{
    $('.comments').toggle();
  });



})
