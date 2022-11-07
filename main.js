// Click button grab elements
$('button').on('click', function(){
  var nameInput = $('#name').val();
  var messageInput = $('#message').val();

  // Display posts above user input
  $('.posts').append('<div className="post">' + messageInput + ' - Posted By: ' + nameInput + 
  '<a className="comment">' + ' comment' + '</a>' + 
  '<a class="remove">' + ' remove' + '</a>' +
  '<hr>' + '</div>' );

  $('.post').css('list-style', 'none');

  // Add comment
  $('.comment').css('cursor', 'pointer');
  $('.comment').css('color', 'white');
  $('.comment').css('margin-left', '5px');
  $('.comment').on('click', function(){
    console.log('comment clicked');
    })
  
  //Remove comment
  $('.remove').css('cursor', 'pointer');
  $('.remove').css('color', 'white');
  $('.posts').on('click', '.remove', function () {
    $(this).closest('div').remove();
    });
  });

