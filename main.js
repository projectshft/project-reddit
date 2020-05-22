var appFunctions = function() {
  // posts protected inside module
  var posts = [];
  // counter provides unique id
  var counter = 0;
  // take input values and push them to posts array as single object
  var createPost = function() {
    var postText = $('#postText').val();
    var postUser = $('#postUser').val();
    counter ++
    posts.push({postText: postText, postUser: postUser, postID: counter})
  }

  var renderPosts = function() {
    // empty all posts every time
    $('#post-section').empty();
    // setup handlbars for post template
    var source = $('#post-template').html();
    var template = Handlebars.compile(source);
    // loop through each post as the template object
    posts.forEach(function(post) {
      var newHTML = template(post)
      $('#post-section').append(newHTML);
    })
  }

  var removePost = function(eventButton) {
    // var selectedPostText = eventButton.closest('p').find('span').text()
    var index = $('.individual-post').index(eventButton.closest('.individual-post'))
    posts.splice(index, 1)
  }


  return {
    createPost: createPost,
    renderPosts: renderPosts,
    removePost: removePost,
  }
}


var controls = appFunctions();


$('#post-button').click(function(){
  controls.createPost();
  controls.renderPosts();
});

$('#post-section').on('click', '.remove', function() {
  controls.removePost($(this));
  controls.renderPosts();
})

$('#post-section').on('click', '.comments', function() {
  $(this).closest('p').closest('div').find('div').toggle()
})
