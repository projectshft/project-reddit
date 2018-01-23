$(".post-button").click(function() {
  var userName = $(".input-username").val();
  var comment = $(".input-comment").val();

  var template =
    "<div class='row align-items-end justify-content-center'><div class='col-centered comment-box col-sm-11 col-md-10 col-lg-7'><div class='btn-group'><button type='button' class='btn btn-link remove-post'>remove</button><button type='button' class='btn btn-link show-comments'>comments</button><span class='btn comment'>" + comment + "</span></div><div class='row justify-content-center'><div class='col'><div class='added-comments btn' style='display: none;'><form class='form-inline'><input type='text' class='form-control-sm new-comment' placeholder='Comment Text'><input type='text' class='form-control-sm new-user' placeholder='User Name'><button type='button' class='btn btn-sm btn-primary post-comment'>Post Comment</button></form></div></div></div><p class='posted-by'>Posted By: <strong>" + userName + "</strong</p></div></div>"

  $('.comment-section').append(template);

  $('.remove-post').click(function () {
    $(this).closest('.row').remove();
  });

  $('.show-comments').click(function () {
    var $newComment = $($(this)[0].parentNode.parentNode).find(".added-comments");
    $newComment.toggle();
  });

  $(".added-comments").find(".post-comment").each(function(){
    $(this).click(function (e) {
      e.stopImmediatePropagation();
      var newUser = $($(this)[0].parentNode).find('.new-user').val();
      var newComment = $($(this)[0].parentNode).find('.new-comment').val();
      var newCommentTemplate = "<div><span>" + newComment + " </span><span>Posted by: <strong>" + newUser + "</strong></span><button type='button' class='btn btn-link del-post'>delete</button></div><br>"
      $(this).closest('div').prepend(newCommentTemplate);
      var $delPost = $($(this)[0].parentNode.parentNode).find(".del-post");

      $delPost.click(function(){
        $($(this)[0].parentNode).remove();
      });
    });
  });
});
