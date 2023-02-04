let createPost = () => {
  // get text & name and store in variable
  let text = $('#message').val();
  let name = $('#name').val();

  // create post template
  let template = "<div class='post'><p>" + text + " - Posted By: " + name + " </p> <a>remove</a> <br> <hr></hr></div>" 

  // append text & name to posts div
  $('.posts').append(template);
}

$('.posts').on('click','.post', function() {
  let element = $(this);
  console.log(element)
  element.remove();
});

$('#submit').click(createPost);