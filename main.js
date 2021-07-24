var posts = [];
var currId = 1;

var Post = function (id, name, message) {
  this.id = id;
  this.name = name;
  this.message = message;
  this.currCommentId = 1;
  this.comments = [];

  this.toggleComments = function () {
    $('#' + this.id).find('.comment-section').toggle();
  }

  this.newComment = function (comment, commenter, $commentSection) {
    var newId = this.currCommentId;
    this.currCommentId++;

    if (comment && commenter) {
      $commentSection.find('.comments').append(
        '<div class="comment" id="' + this.id + '-' + newId + '">'
        + '<hr><p>' + comment + ' - ' + 'Posted By: ' + commenter + '</p>'
        + '<a class="remove-comment">remove comment</a>'
        +'</div>'
      );

      $('#comment-form-' + this.id)[0].reset();

      this.comments.push(
        {
          id: this.id + '-' + newId,
          commenter: commenter,
          comment: comment
        }
      );
    }
  }

  this.removeComment = function (commentId) {
    var index = this.comments.findIndex(function (comment) {
      return comment.id === commentId;
    });

    var $commentDiv = $('#' + commentId);

    this.comments.splice(index, 1);
    $commentDiv.remove();
  }
}

// ----- Returns the corresponding post -----
var getPost = function (id) {
  return posts.find(function (post) {
    return post.id == id;
  });
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

    var newPost = new Post(id, name, message);
    posts.push(newPost);
  }
})

 // ----- Remove post -----
$('body').on('click', '.remove-post', function () {
  var $postDiv = $(this).closest('.post');
  var index = posts.indexOf(getPost($postDiv.attr('id')));

  posts.splice(index, 1);
  $postDiv.remove(); 
})

// ----- Toggle comment section -----
$('body').on('click', '.show-comments', function () {
  var post = getPost($(this).closest('.post').attr('id'));
  post.toggleComments();
})

// ----- Post new comment -----
$('body').on('click', '.comment-section button', function () {
  var post = getPost($(this).closest('.post').attr('id'));
  var $commentSection = $('#' + post.id).find('.comment-section');

  var comment = $commentSection.find('#comment-' + post.id).val();
  var commenter = $commentSection.find('#comment-name-' + post.id).val();

  post.newComment(comment, commenter, $commentSection);
})

// ----- Remove comment -----
$('body').on('click', '.remove-comment', function () {
  var commentId = $(this).closest('.comment').attr('id');
  var post = getPost($(this).closest('.post').attr('id'));
  post.removeComment(commentId);
})
