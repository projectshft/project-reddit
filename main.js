var posts = [];

var submitPost = function() {
  var text = $('#post-text').val();
  var name = $('#poster-name').val()

  var post = {
    name: name,
    text: text,
  };

  posts.push(post);
}

$('#submit').click(function(){
  submitPost();
});