
var commentToggler = function() {
  var viewComments = $('#comment-edit');
  if (viewComments.hasClass('show')) {
    viewComments.addClass('comments').removeClass('show');
  } else {
    viewComments.addClass('show').removeClass('comments');
}
};

var createComment = function(){
  $commentName = $('#username-input').val();
  $commentBody = $('#comment-input').val();
  $('#comment-input').val('');
  $('#username-input').val('');

  var commentTemplate = '<li class="comment">' + $commentBody + '<span class="text-muted"> Posted By: <strong>' + $commentName + '</strong></span>'
                        + ' <button type="button" class="close" id="close" aria-label="Close"><span aria-hidden="true">&times;</span>'
                          '</button> </li>'
  var $comment = $(commentTemplate);
  $('.comment-section').append($comment);
}

var createPost = function(){
  $postName = $('#name-input').val();
  $postBody = $('#post-input').val();
  $('#post-input').val('');
  $('#name-input').val('');



  var template = '<div class="row">'
                +  '<div class="col text-center">'
                +  '<p class="post">' + $postBody + ' </p>'
                +  '<div>'
                +  '<a href="#" class= "view-comments role="button" id="comment-toggle"> Comments </a>'
                +  '<a href="#" class="remove-post" role="button" id="post-remove"> Remove </a>'
                +  '</div>'
                +  '<div class="comments" id="comment-edit">'
                +  '<ul class="comment-section text-left"></ul> '
                +  '<form>'
                +  '<div class="form-group">'
                +  '<input type="text" class="form-control" id="comment-input"'
                +  'placeholder="Comment Text">'
                +  '<input type="text" class="form-control" id="username-input" placeholder="Username">'
                +  '<button type="button" id="comment-button" class="btn btn-primary">Post Comment</button>'
                +  '</div>'
                +  '</div>'
                +  '<p class="text-muted"> Posted By: <strong>' + $postName + '</strong> </p>'
                +  '</div>'
                +  '</div>'
                ;

  var  $post = $(template);

  $('#posts').append($post);

};


$('#post-button').click(function() {
  createPost();

  $('#post-remove').click(function(){
    var thisPost = $(this).closest('.row')
    thisPost.remove();
  });


$('#comment-toggle').click(function () {
  commentToggler();
    });
$('#comment-button').click(function(){
  createComment();

  $('#close').click(function(){
     var trashComment= $(this).closest('li')
    trashComment.remove();

});
});
});
