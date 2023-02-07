let createPost = () => {
  // get text & name and store in variable
  let text = $('#message').val();
  let name = $('#message-name').val();

  // setting up handlebars
  let source = $('#post-template').html();
  let template = Handlebars.compile(source);
  let newPost = template({text: text, name: name});

  // append text & name to posts div
  $('.posts').append(newPost);

  // clears text and name after submit
  $('.form-control').val('')
}

// remove post feature
$('.posts').on('click','.remove', function() {
  // references parent element of clicked element
  let element = $(this).parent();
  element.remove();
});

// toggle comment container
$('.posts').on('click','.comments', function () {
  let commentSection = $(this).closest('.post').find('.comments-container');
  commentSection.toggleClass('hidden')
})

// submit comment
$(document).on('click', '#submit-comment', function() {
  // get text & name and store in variable
  let comment = $(this).closest('.comments-container').find('#comment').val();
  let comName = $(this).closest('.comments-container').find('#comment-name').val();

  // setting up handlebars
  let source = $('#comment-template').html();
  let template = Handlebars.compile(source);

  let newComment = template({comment: comment, comName: comName});

  // append text & name to posts div
  $(this).closest('.comments-container').find('.comments-list').append(newComment);

  // clears text and name after submit
  $('.form-control').val('')
});

$('#submit-post').click(createPost);