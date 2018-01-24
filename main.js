// var posts = [];
var counter = 0;

$("#post-form").submit(function(event) {
  counter += 1;

  var userPost = $("#message").val()
  var userName = $("#name").val()
  // Decided not to go with an object implementation.
  // var post = {
  //   post: userPost,
  //   name: userName
  // }
  // posts.push(post);
  var postDiv = createPost(userPost, userName, counter);

  $('.posts').append(postDiv);

  $('#message').val('');
  $('#name').val('');

  event.preventDefault();
});

// Create a function to create and append a template with the variables
// from the posts form. Attach click events to each dynamic created elements.
var createPost = function(post, name, counter) {
  userPost = `<p data-post-id="${counter}" ><span class="post-delete label label-danger"><a href="#">remove</a></span> <span class="comments label label-info"><a href="#">comments</a></span> -${post}</p>`;
  userName = `<p data-name-id="${counter}" ><small>Posted By:</small> <b class="users">${name}</b></p>`;
  var template = `
  <div class="post" id="post-${counter}" >${userPost}
    <div class="comment-section"></div>
    <form class="comment-form" id='${counter}'>
      <div class="form-row align-items-center">
        <div class="col-sm-4 my-1">
          <input type="text" class="form-control" id="comment-text${counter}" placeholder="Comment Text">
        </div>
        <div class="col-sm-4 my-1">
          <input type="text" class="form-control" id="user-text${counter}" placeholder="User Name">
        </div>
        <div class="col-auto my-1">
          <button type="button" class="btn btn-primary comment-post">Submit</button>
        </div>
      </div>
    </form>
    ${userName}<hr>
  </div>`

  var handleDeletePost = function() {
    console.log($(this).hasClass('post-delete'));
    if ($(this).hasClass('post-delete')) {
      $(this).closest('.post').remove()
    }
  };

  var handleShowPost = function() {
    $(this).closest('.post').find('.comment-form').toggle();
  };

  var handleCommentSumbit = function(e) {
    var $getCommentText = $(this).closest('.form-row').find('#comment-text' + counter);
    var $getUserCommentText = $(this).closest('.form-row').find('#user-text' + counter);
    var $commentText = $getCommentText.val();
    var $userCommentText = $getUserCommentText.val();
    $(this).closest('.post').find('.comment-section').append(`<p><mark>${$commentText}</mark> <small>Comment by:</small> <b>${$userCommentText}</b> <span class="label label-danger"><a class="delete-comment" href="#">X</a></span> </p>`);

    $getCommentText.val('')
    $getUserCommentText.val('')

    $(this).closest('.post').find('.comment-form').hide();

    $(".delete-comment").on('click', handleDeleteComment);
    e.preventDefault();
  };

  var handleDeleteComment = function() {
    // console.log('delete comment clicked!!');
    $(this).closest('p').remove()
  };

  var $post = $(template)

  $post.find('.comment-form').hide();
  $post.find(".post-delete").on('click', handleDeletePost);
  $post.find(".comments").on('click', handleShowPost);
  $post.find(".comment-post").on('click', handleCommentSumbit);

  return $post;

}
