var ReReddit = {
  newPost: function () {
    var postTemplate = "<div class=\'post\'><div class=\"post-text-container\"><h4 class=\"post-text\">" + $('.text-input').val() + "</h4></div><h4> - " + "Posted by: <strong>" + $('.name-input').val() + "</strong></h4>" +"<p><button class=\'remove btn-danger btn-xs\'>remove</button> <button class=\'comment btn-xs btn-warning\'>comment</button><button class=\"edit-button btn-xs btn-success\">edit</button></p>";
    
    var commentTemplate = "<div class=\"all-comments hidden\"><div class=\"comment-container\"></div><div class=\"comment-input\"><div class=\"form-group\">" + 
    "<input type=\"text\" placeholder=\"Comment\" class=\"comment-text form-control\"/>" + "</div>" + "<div class=\"form-group\">" + "<input type=\"text\" placeholder=\"Name\" class=\"comment-name form-control\"/>" + "</div>" + "<div class=\"clearfix\">" + "<button class=\"submit-comment-button btn btn-info btn-xs\">Add Comment</button>" + "</div>" + "</div></div></div>";

    $('.blog-container').append(postTemplate + commentTemplate);

    $('.remove').unbind().click((e) => {
      $(e.target).parent().parent().remove();
    })

    $('.comment').unbind().click((e) => {
      ReReddit.openComments(e);
    })

    $('.submit-comment-button').unbind().click((e) => {
      ReReddit.submitComment(e);
    })

    $('.edit-button').unbind().click((e) => {
      ReReddit.editPost(e);
    })
  },

  openComments: (e) => {
    var $allComments = $(e.target).parent().parent().find('.all-comments');
    if ($allComments.hasClass('hidden')){
      $allComments.removeClass('hidden');
    } else {
      $allComments.addClass('hidden');
    }
  },

  submitComment: (e) =>{
    var $grandparent = $(e.target).parent().parent();
    var comment = "<h5>" + $grandparent.find('.comment-text').val() + " - Posted By: " + $grandparent.find('.comment-name').val() + "<span class=\"remove-comment\">    [remove]</span></h5>";

    $grandparent.parent().find('.comment-container').append(comment);
      
    $('.remove-comment').unbind().click((e) => {
      $(e.target).parent().remove();
    })
  },

  editPost: (e) => {
    var $grandparent = $(e.target).parent().parent();
    
    $grandparent.find('.post-text-container').find('.post-text').html('<input type=\"text\" placeholder=\"edit your post\" class=\"edit-input form-control\"/>');
    $grandparent.find('.post-text-container').append("<button class=\"btn btn-info btn-xs save-edit-button\">save edit</button>")

    $('.save-edit-button').unbind().click((e) => {
      $(e.target).parent().find('.post-text').html($('.edit-input').val())
      $(e.target).remove();
    })
  }
};

$('.submit-post-button').click( function () {
  ReReddit.newPost();
});

