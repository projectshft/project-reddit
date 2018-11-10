var posts = [];
var source = $('#post-template').html();
var template = Handlebars.compile(source);

//Adds an event listener to the post button.
$('#post-button').click(function(e){
  e.preventDefault();
  createNewPostInPostsArray();
  renderPosts();
  resetPlaceholderText();
})

var createNewPostInPostsArray = function () {
  var post = {
    name: $('#post-name').val(),
    message: $('#post-message').val(),
    comments: [],
    numberOfComments: 0
  };
  posts.push(post);
}

var resetPlaceholderText = function () {
  $('#post-name').val('');
  $('#post-message').val('');
}

var renderPosts = function () {
  for (i=0; i<posts.length; i++) {
    posts[i].postNumber = i;
  }
  $('.post-container').empty();
  for(i=0; i<posts.length; i++) {
    var newHTML = template(posts[i]);
    $('.post-container').append(newHTML);
  }
  setRemoveButtonEventListener();
  setCommentsButtonEventListener();
  setPostCommentButtonEventListener();
}

var setRemoveButtonEventListener = function () {
  $('.remove-button').off("click");
  $('.remove-button').on("click", function() {
  var $post = $(this).parent().parent();
  var postNumberIndex = $post.data().postNumber;

  //remove the post from the array posts
  posts.splice(postNumberIndex, 1);

  //remove the post from the DOM
  renderPosts();
})
}

var setCommentsButtonEventListener = function () {
  $('.comments-button').off("click");
  $('.comments-button').on("click", function() {
  var $commentsContainer = $(this).parent().next().children('.comments-container');
  if ($commentsContainer.css('display') === "none") {
    $commentsContainer.css('display', "inline");
  } else {
    $commentsContainer.css('display', 'none');
  }
})
}

var setPostCommentButtonEventListener = function () {
  $('.post-comment-button').off('click');
  $('.post-comment-button').on('click', function(e){
    e.preventDefault();
    var indexOfParentPost = $(this).closest('.post').data().postnumber;
    var comment = {
      text: $(this).siblings('.comment-text-input').val(),
      userName: $(this).siblings('.user-name-input').val(),
      commentNumber: 0
    };
    console.log(comment);
    posts[indexOfParentPost].comments.push(comment);
    posts[indexOfParentPost].numberOfComments += 1;
    //renderPosts();
  })
}
