var posts = [];

var submitPost = function() {
  var text = $('#post-text').val();
  var posterName = $('#poster-name').val();

  var post = {
    name: posterName,
    text: text,
    comments: [],
  };

  posts.push(post);

  $('.posts').append(`<div class="post"><p>${post.text} - Posted By: ${post.name}</p><hr></div>`)
}

var clearForm = function() {
  $('#post-text').val('');
  $('#poster-name').val('');
}

$('#submit').click(function(){
  submitPost();
  clearForm();
});

