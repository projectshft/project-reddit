let $userName = $('#your-name');
let $message = $('#post-text');



$('#submit').on('click', () => {
  var $nameValue = $userName.val();
  var $messageValue = $message.val();

  if ($nameValue === "" || $messageValue === "") {
    window.alert ("Please ensure you fill out all fields");
  }
  
  $('.posts').append(`<div class ="post-row"<div><p id="post-content">"${$messageValue}" - Posted By: ${$nameValue} <button class="delete-btn">Delete</button><button class="comment-btn">Add Comment</button></p></div></div><hr>`);

 $(function() {
  $('.comment-btn').on('click',function(e) {
      $('<div/>').addClass('new-text-div').html($('<input type="textbox"/>').addClass('commentBox') ).append( $('<button/>').addClass('remove').text('Remove Comment')).insertBefore(this);
  });
  $(document).on('click', 'button.remove', function(e) {
      e.preventDefault();
      $(this).closest('div.new-text-div').remove();
  });
});

  $userName.val("");
  $message.val("");
})

$('.posts').on('click', '.delete-btn', (e) => {
  $(e.target).parent().remove();
});
;
