let createPost = () => {
  // get text & name and store in variable
  let text = $('#message').val();
  let name = $('#message-name').val();

  console.log('clicked')

  // create post template
  let template = "<div class='post'><p>" + text + " - Posted By: " + name + " </p> <a class='remove'>remove</a> <a class='comments'>comments</a> <br> <hr></hr></div>" 

  // append text & name to posts div
  $('.posts').append(template);
}

// remove post feature
$('.posts').on('click','.remove', function() {
  // references parent element of clicked element
  let element = $(this).parent();
  element.remove();
});

// comments feature
$('.posts').on('click','.comments', function () {

  console.log('clicked on comments')
  // display comments section

  // display input field for text & name

  // display submit comment button
})

$('#submit-post').click(createPost);