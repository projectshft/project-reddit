
var createPost = function(){
  var obj = {}
  obj.postName = $('#name-input').val();
  obj.bodyText = $('#post-input').val();
  $('#post-input').val('');
  $('#name-input').val('');

  var source = $('#post-template').html();
  var template = Handlebars.compile(source);
  var newHtml = template(obj);

  $('#posts').append(newHtml);

  };

  $('#post-button').click(function() {
    createPost();

    //looping through multiple times when multiple posts are open.
    $('.form-group').unbind('click').click(function(e) {
      if (e.target.classList.contains('comment-button')) {
        var commentObj = {};
        commentObj.commentName = $(this).find('.username-input').val();
      commentObj.commentBody = $(this).find('.comment-input').val();
        $('.comment-input').val('');
        $('.username-input').val('');

        var source = $('#comment-template').html();
        var template = Handlebars.compile(source);
        var newHtml = template(commentObj);


        $(this).prev('.comment-section').append(newHtml);

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
