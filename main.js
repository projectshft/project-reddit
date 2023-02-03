let createPost = () => {
  // get text & name and store in variable
  let text = $('#message').val();
  let name = $('#name').val();

  // append text & name to posts div
  $('.posts').append("<p>" + text + " - Posted By: " + name + " </p>")
  $('.posts').append("<hr></hr>")

}

$('#submit').click(createPost);