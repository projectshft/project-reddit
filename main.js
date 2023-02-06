let createPost = () => {
  // get text & name and store in variable
  let text = $('#message').val();
  let name = $('#message-name').val();

  // create post template
  let template = "<div class='post'><p>" + text + " - Posted By: " + name + " </p> <a class='remove'>remove</a> <br> <hr></hr></div>" 

  // append text & name to posts div
  $('.posts').append(template);

  // clears text and name after submit
  $('.form-control').val('')
}

// remove post feature
$('.posts').on('click','.remove', function() {
  // references parent element of clicked element
  let element = $(this).parent();
  element.remove();
});

$('#submit-post').click(createPost);