var posts = [];
var source = $('#post-template').html();
var template = Handlebars.compile(source);

$('#post-button').click(function(e){
  e.preventDefault();
  var post = {
    name: $('#post-name').val(),
    message: $('#post-message').val()
  };
  posts.push(post);
  renderPosts();
})

var renderPosts = function () {
  for (i=0; i<posts.length; i++) {
    posts[i].postNumber = i;
  }
  $('.post-container').empty();
  for(i=0; i<posts.length; i++) {
    var newHTML = template(posts[i]);
    $('.post-container').append(newHTML);
  }
  setRemoveEventListener();
}

var setRemoveEventListener = function () {
  $('.remove-button').off("click");
  $('.remove-button').on("click", function() {
  var $post = $(this).parent().parent();
  var postNumberIndex = $post.data().number;

  //remove the post from the array posts
  posts.splice(postNumberIndex, 1);

  //remove the post from the DOM
  renderPosts();
})
}
