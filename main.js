var posts = [];
var currId = 1;

var Post = function (id, name, message) {
  this.id = id;
  this.name = name;
  this.message = message;
  this.currCommentId = 1;
  this.comments = [];

  this.toggleEditForm = function () {
    var $editForm = $('#' + this.id).find('.edit-post-form');
    $editForm.find('#edit-' + this.id).attr('value', this.message);

    $('#' + this.id).find('.edit-post-form').toggle();
  }

  this.toggleComments = function () {
    var $post = $('#' + this.id);

    $post.siblings().toggle();    
    $('#post-form, a:not(.show-comments)').toggle();
    $post.find('.comment-section').toggle();

    var $editForm = $post.find('.edit-post-form');

    if ($editForm.css('display') != 'none')
      this.toggleEditForm();
  }

  this.editMessage = function (newMessage) {
    if (newMessage && newMessage != this.message) {
      var edit = '<p class="post-message">' + newMessage + '<em> (edited)</em> - ' + '<strong>Posted By:</strong> ' + this.name + '</p>';
      var $post = $('#' + this.id);

      $post.find('.post-message').remove();
      $post.prepend(edit);
      this.message = newMessage;

      $('#edit-form-' + this.id)[0].reset();
      this.toggleEditForm();
    }
  }

  this.newComment = function (comment, commenter, $commentSection) {
    var newId = this.currCommentId;
    this.currCommentId++;

    if (comment && commenter) {
      $commentSection.find('.comments').append(
        '<div class="comment" id="' + this.id + '-' + newId + '">'
        + '<hr><p>' + comment + ' - ' + '<strong>Posted By:</strong> ' + commenter + '</p>'
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

// ----- Create new Post -----
$('#submit').on('click', function () {
  var message = $('#message').val();
  var name = $('#name').val();
  var id = currId;
  currId++;

  if (message && name) {
    var editPost = 
    '<div class="edit-post-form" style="display: none;">'
      +'<form id="edit-form-' + id + '" style="margin-top:30px;" onsubmit="event.preventDefault();">'
        +'<div class="form-group">'
          +'<input id="edit-' + id + '" type="text"'
          +'class="form-control">'
          +'</input>'
        +'</div>'
        +'<button class="btn btn-primary">Save Changes</button>'
      +'</form><hr>'
    +'</div>'

    var postComments = 
     '<div class="comment-section" style="display: none;">'
      +'<h4><strong>Comments:</strong></h4>'
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
      
        +'<button class="btn btn-primary">Post Comment</button>'
      +'</form><hr>'
    +'</div>';
    
    $('.posts').append(
        '<div class="post" id="' + id + '">'
          + '<p class="post-message">' + message + ' - ' + '<strong>Posted By:</strong> ' + name + '</p>'
          + '<a class="edit-post">edit post</a><span> --- </span>'
          + '<a class="remove-post">remove</a><span> --- </span>'
          + '<a class="show-comments">toggle comments</a>'
          + editPost
          + postComments + '<hr>'
        +'</div>'
    );

    $('#post-form')[0].reset();

    var newPost = new Post(id, name, message);
    posts.push(newPost);
  }
})

// ----- Toggle Post edit form -----
$('body').on('click', '.edit-post', function () {
  var post = getPost($(this).closest('.post').attr('id'));
  post.toggleEditForm(); 
})

// ----- Edit Post -----
$('body').on('click', '.edit-post-form button', function () {
  var post = getPost($(this).closest('.post').attr('id'));

  var $editForm = $(this).closest('.edit-post-form');
  var newMessage = $editForm.find('#edit-' + post.id).val();

  post.editMessage(newMessage); 
})

 // ----- Remove Post -----
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
