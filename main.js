let createPost = () => {
  // get text & name and store in variable
  let text = $('#message').val();
  let name = $('#name').val();

  // create post template
  let template = "<div class='post'><p>" + text + " - Posted By: " + name + " </p> <a class='remove'>remove</a> <br> <hr></hr></div>" 

  // append text & name to posts div
  $('.posts').append(template);
}

$('.posts').on('click','.remove', function() {
  let element = $(this).parent();
  element.remove();
});

$('#submit').click(createPost);