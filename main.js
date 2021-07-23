var posts = [];

var getPost = function (postId) {
  for (var i = 0; i < posts.length; i++) {
    var curr = posts[i];
    if (curr.id == postId)
      return curr;
  }
}

$('#submit').on('click', function () {
  var message = $('#message').val();
  var name = $('#name').val();
  var id = posts.length;

  if (message && name) {
    $('.posts').append(
        '<div class="post" id="' + id + '">'
        + '<p>' + message + ' - ' + 'Posted By: ' + name + '</p>'
        + '<a class="remove-post">remove</a><span> --- </span>'
        + '<a class="show-comments">comments</a><hr>'
        +'</div>'
    );
    $('#post-form')[0].reset();

    posts.push(
      {
        id: id,
        name: name,
        message: message,
        comments: []
      }
    );
  }
})

$('body').on('click', '.remove-post', function () {
  var $postDiv = $(this).closest('.post');
  var index = posts.indexOf(getPost($postDiv.attr('id')));

  if (index > -1)
    posts.splice(index, 1);
  
  $postDiv.remove(); 
})
