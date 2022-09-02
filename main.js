$('#submit').on('click', function () {
  var name = $('#name').val();
  var text = $('#message').val();

  var postsDiv = $('.posts');

  var newPostDiv = document.createElement('div');

  var newPost = document.createElement('p');
  var newPostTextNode = document.createTextNode(text);
  var newPostNameNode = document.createTextNode(' - Posted By: ' + name);
  newPost.append(newPostTextNode);
  newPost.append(newPostNameNode);
  
  var newPostHR = document.createElement('hr');

  newPostDiv.append(newPost);
  newPostDiv.append(newPostHR);

  postsDiv.append(newPostDiv);
});

$('.posts').on('click', 'p', function (e) {
  var $element = $(e.target);

  $element.remove();
});

