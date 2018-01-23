$(".post-button").click(function() {
  var userName = $(".input-username").val();
  var comment = $(".input-comment").val();

  //handlebars
  var newPost = {
    userName: userName, comment: comment
  }
  var source = $("#post-template").html();
  var template = Handlebars.compile(source);
  var newHTML = template(newPost);
  $('.comment-section').append(newHTML);
  //!handlebars

  //clear texboxes
  $(".input-username").val('');
  $(".input-comment").val('');

  $('.remove-post').click(function () {
    $(this).closest('.row').remove();
  });



  $('.edit-post').click(function(){
    var oldPost = $($(this)[0]).siblings(".comment")[0].textContent;
    var changes = {
      oldPost: oldPost
    }
    var editSource = $("#edit-post-template").html();
    var editTemplate = Handlebars.compile(editSource);
    var editComment = editTemplate(changes);
    // delete original post
    $($(this)[0]).siblings(".comment").remove();
    // add text box and save button
    $(this).closest('div').append(editComment);


    $('.save-changes').click(function(){
      //handlebars for post edit.
      // save input.
      var updatedComment = $($(this)[0].parentNode).find(".input-comment").val();
      var updates = {
        updatedComment: updatedComment
      }
      var updateSource = $("#save-changes-template").html();
      var updateTemplate = Handlebars.compile(updateSource);
      var updateComment = updateTemplate(updates);

      //remove edit text box, update DOM with new version of the comment, remove save button.
      $($(this)[0].parentNode).find(".input-comment").remove();
      $(this).closest('.btn-group').append(updateComment);
      $(this).remove();
    });
  });


  $('.show-comments').click(function (e) {
    e.stopImmediatePropagation();
    var $newComment = $($(this)[0].parentNode.parentNode).find(".added-comments");
    console.log($newComment);
    $newComment.toggle();
  });


  $(".added-comments").find(".post-comment").each(function(){
    $(this).click(function (e) {
      //stop multiple click events from firing.
      e.stopImmediatePropagation();

      var newUser = $($(this)[0].parentNode).find('.new-user').val();
      var newComment = $($(this)[0].parentNode).find('.new-comment').val();

      //handlebars
      var commentObject = {
        newUser: newUser, newComment: newComment
      }
      var commentSource = $("#new-comment-template").html();
      var commentTemplate = Handlebars.compile(commentSource);
      var commentHTML = commentTemplate(commentObject);
      $(this).closest('.added-comments').prepend(commentHTML);
      //!handlebars

      //clear texboxes
      $($(this)[0].parentNode).find('.new-user').val('');
      $($(this)[0].parentNode).find('.new-comment').val('');

      var $delPost = $($(this)[0].parentNode.parentNode).find(".del-post");

      $delPost.click(function(){
        $($(this)[0].parentNode).remove();
      });
    });
  });
});
