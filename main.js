
var createPost = function(){
  $postName = $('#name-input').val();
  $postBody = $('#post-input').val();
  $('#post-input').val('');
  $('#name-input').val('');



  var template = '<div class="row">'
                +  '<div class="col text-center">'
                +  '<p class="post">' + $postBody + ' </p>'
                +  '<div>'
                +  '<div class="comments show-toggle">'
                +  '<ul class="comment-section text-left"></ul> '
                +  '<div class="form-group">'
                +  '<input type="text" class="form-control comment-input"'
                +  'placeholder="Comment Text">'
                +  '<input type="text" class="form-control username-input"  placeholder="Username">'
                +  '<button type="button"  class="btn btn-primary comment-button">Post Comment</button>'
                +  '</div>'
                +  '</div>'
                +  '<div class="action-buttons">'
                +  '<a href="#" class="view-comments" role="button"> Comments </a>'
                +  '<a href="#" class="remove-post" role="button"> Remove </a>'
                +  '<a href="#" class="edit-post" role="button"> Edit </a>'
                +  '</div>'
                +  '</div>'
                +  '<p class="text-muted"> Posted By: <strong>' + $postName + '</strong> </p>'
                +  '</div>'
                +  '</div>'
                ;

  var $post = $(template);

  $('#posts').append($post);

  };


  $('#post-button').click(function() {
    createPost();


    //looping through multiple times when multiple posts are open.
    $('.form-group').unbind('click').click(function(e) {
      if (e.target.classList.contains('comment-button')) {
        $commentName = $(this).find('.username-input').val();
        $commentBody = $(this).find('.comment-input').val();
        $('.comment-input').val('');
        $('.username-input').val('');

        var commentTemplate = '<li class="comment">' + $commentBody + '<span class="text-muted"> Posted By: <strong>' + $commentName + '</strong></span>' +
          ' <button type="button" class="close Xout" id="close" aria-label="Close"><span class="close close-out" aria-hidden="true">&times;</span>'
        '</button> </li>'
        var $comment = $(commentTemplate);


        $(this).prev('.comment-section').append($comment);

      }
      $('.comment-section').click(function(e) {
        if (e.target.classList.contains('close')) {
          var trashComment = e.target.closest('li')
          trashComment.remove();
        }

      })

    })

    //deletes the post
    $('.action-buttons').unbind('click').click(function(e) {
      if (e.target.classList.contains('remove-post')) {
        var thisPost = $(this).closest('.row')
        thisPost.remove();
      }
      //edit function
      if (e.target.classList.contains('edit-post')) {
        var edit = prompt("Place edit here");
        var targetEdit = $(this).closest('.col').find('.post');
        targetEdit.text(edit);
      }

      //toggles comment section and forms
      if (e.target.classList.contains('view-comments')) {
        var commentSection = $(this).prev('.show-toggle');
        if (commentSection.hasClass('show')) {
          commentSection.addClass('comments').removeClass('show');
        } else if (commentSection.hasClass('comments')) {
          commentSection.addClass('show').removeClass('comments');
        }
      }
    });




  });
