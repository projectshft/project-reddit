// listens for the button clicks, gets values of inputs, and appends them to the posts div
$('#submit').on('click', function () {
  let $text = $('#post-text').val();
  let $name = $('#your-name').val();

  let $newPostsHR = $('<hr>');
  let $newPosts = $('<p></p>').addClass('new-posts').append('<b>' + $text + ' - Posted By: ' + $name + '</b>');
  let $removeButton = $('<button></button>').addClass('remove-button').append('remove post');

  $newPosts.append($removeButton);

  if ($text && $name) {
    $('.posts').append($newPosts, $removeButton, $newPostsHR);
  } else {
    alert('Please complete all fields');
  }
});

// Remove button is not working! This only removes the "remove post" button, not the post. Other variations removed the ability to add new posts, or removed both the button and the post by clicking on them individually. I played around with the <button> and <p> elements to try to combine them as parent and child elements, but couldn't figure it out. 
$('.posts').on('click', 'button', function(e) {
  let $element = $(e.target);

  $element.remove();
});
