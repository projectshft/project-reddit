var posts = [];
var currId = 1;

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
      
        +'<button id="submit-comment-' + id + '" class="btn btn-primary">Submit Post</button>'
      +'</form>'
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

$('body').on('click', '.show-comments', function () {
  var $postDiv = $(this).closest('.post');
  var $commentSection = $postDiv.find('.comment-section');
  $commentSection.toggle();

  // if ($commentSection.css('display') != 'none') {
  //   console.log('comment');

  
// }
})

$('body').on('click', '.comment-section button', function () {
  console.log('post comment');
  var $postDiv = $(this).closest('.post');
  var $commentSection = $postDiv.find('.comment-section');
  var id = $postDiv.attr('id');

  var comment = $commentSection.find('#comment-' + id).val();
  var name = $commentSection.find('#comment-name-' + id).val();

  if (comment && name) {
    $('.comments').append(
      '<div class="comment">'
      + '<hr><p>' + comment + ' - ' + 'Posted By: ' + name + '</p>'
      + '<a class="remove-comment">remove comment</a><hr>'
      +'</div>'
    )

    $('#comment-form-' + id)[0].reset();

    getPost(id).comments.push(
      {
        name: name,
        comment: comment
      }
    )
  }
})
