var posts = [];
var currId = 1;

// ----- Returns the corresponding post -----
var getPost = function (id) {
  for (var i = 0; i < posts.length; i++) {
    var curr = posts[i];
    if (curr.id == id)
      return curr;
  }
}

// ----- Returns the corresponding comment -----
var getComment = function(post, commentId) {
  for (var i = 0; i < post.comments.length; i++) {
    var curr = post.comments[i];
    if (curr.id == commentId)
      return curr;
  }
}

// ----- Create new post -----
$('#submit').on('click', function () {
  var message = $('#message').val();
  var name = $('#name').val();
  var id = currId;
  currId++;

  if (message && name) {
    var postComments = 
     '<div class="comment-section" style="display: none;">'
      +'<div class="comments"></div>'
      +'<form id="comment-form-' + id + '" style="margin-top:30px;" onsubmit="event.preventDefault();">'
            
        +'<div class="form-group">'
          +'<input id="comment-' + id + '" type="text"'
          +'class="form-control"'
          +'placeholder="Comment text"></input>'
        +'</div>'

        +'<div class="form-group">'
          +'<input id="comment-name-' + id + '" type="text"'
          +'class="form-control"'
          +'placeholder="Your name"></input>'
        +'</div>'
      
        +'<button id="submit-comment-' + id + '" class="btn btn-primary">Post Comment</button>'
      +'</form><hr>'
    +'</div>';

    $('.posts').append(
        '<div class="post" id="' + id + '">'
        + '<p>' + message + ' - ' + 'Posted By: ' + name + '</p>'
        + '<a class="remove-post">remove</a><span> --- </span>'
        + '<a class="show-comments">comments</a>'
        + postComments + '<hr>'
        +'</div>'
    );

    $('#post-form')[0].reset();

    posts.push(
      {
        id: id,
        name: name,
        message: message,
        commentId: 1,
        comments: []
      }
    );
  }
})

 // ----- Remove post -----
$('body').on('click', '.remove-post', function () {
  var $postDiv = $(this).closest('.post');
  var index = posts.indexOf(getPost($postDiv.attr('id')));

  if (index > -1)
    posts.splice(index, 1);
  
  $postDiv.remove(); 
})

// ----- Toggle comment section -----
$('body').on('click', '.show-comments', function () {
  $(this).closest('.post').find('.comment-section').toggle();
})

// ----- Post new comment -----
$('body').on('click', '.comment-section button', function () {
  var $postDiv = $(this).closest('.post');
  var $commentSection = $postDiv.find('.comment-section');

  var postId = $postDiv.attr('id');
  var post = getPost(postId);
  var newId = post.commentId;
  post.commentId++;

  var comment = $commentSection.find('#comment-' + postId).val();
  var name = $commentSection.find('#comment-name-' + postId).val();

  if (comment && name) {
    $postDiv.find('.comments').append(
      '<div class="comment" id="' + postId + '-' + newId + '">'
      + '<hr><p>' + comment + ' - ' + 'Posted By: ' + name + '</p>'
      + '<a class="remove-comment">remove comment</a>'
      +'</div>'
    )

    $('#comment-form-' + postId)[0].reset();

    post.comments.push(
      {
        id: postId + '-' + newId,
        name: name,
        comment: comment
      }
    )
  }
})

// ----- Remove comment -----
$('body').on('click', '.remove-comment', function () {
  var $commentDiv = $(this).closest('.comment');

  var post = getPost($commentDiv.closest('.post').attr('id'));
  var index = post.comments.indexOf(getComment(post, $commentDiv.attr('id')));

  post.comments.splice(index, 1);
  $commentDiv.remove();
})
