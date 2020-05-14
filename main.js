var appFunctions = function() {
  // posts protected inside module
  var superObject = { posts: [] }

  // push object to posts array for rendering later
  var postPost = function() {
    var $postText = $('#postText').val();
    var $postUser = $('#postUser').val();
    // user is only able to post if form is filled out
    if ($postText && $postUser) {
      superObject.posts.push({text: $postText, author: $postUser});
    } else {
      alert('Post Text and Your Name must be entered to post.')
    }
  }

  // empty post section and render posts array with handlebars each time called
  var renderPosts = function() {
    $('#post-section').empty();
    var source = $('#post-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(superObject);
    $('#post-section').append(newHTML);
  }

  var removePost = function() {
    // delete post from posts array
    var $postToBeRemoved = $(this).closest('#individual-post').find('#postTextParagraph').text()
    // var authorToBeRemoved = $(this).closest('#individual-post').find('#postAuthorParagraph').find('strong').html()
    console.log($postToBeRemoved)
    // superObject.posts.splice(, 1)
  }



  return {
    // only return
    postPost: postPost,
    renderPosts: renderPosts,
    removePost: removePost
  }
}


var controls = appFunctions()


  $('#post-button').click(function(){
    controls.postPost();
    controls.renderPosts();
  });

  $('#post-section').on('click', '#remove', function() {
    controls.removePost();
    // render posts
    controls.renderPosts();

    // controls.removePost();
  })

  // toggle comment group by clicking comments button
  $('#post-section').on('click', '#comments', function() {
    $(this).closest('p').closest('div').find('div').toggle()
  })

  $('#post-section').on('click', '#comments', function() {
    $(this).closest('p').closest('div').find('div').toggle()
  })
