$('#post').on('click', function() {

  //create post
  var userMsg = $('#message').val();
  var userName = $('#name').val();

  var newPost = '<div><div><button type="button" style="padding:0px" class="btn-link remove">remove</button><button type="button" class="btn-link comments" data-toggle="modal" data-target="commentsModal">comments</button></div><div class="msg">' + userMsg + '</div><div class="name">Posted by: <b>' + userName + '</b></div><hr></div>'
  $('.posts').append(newPost);

  //clear text boxes after each post
  $('#message').val('');
  $('#name').val('');

  //remove post with 'remove' button
  $('.remove').on('click', function() {
    $(this).parent().parent().remove();
  });

  //open comments modal with 'comments' button
  $('.comments').on('click', function(e) {
    e.stopImmediatePropagation();
    $('#comments-modal').css({"display":"block"});

    //comments modal to feature original post
    var postModal = '<div class="show-post"><div class="msg">' + userMsg + '</div><div class="name">Posted by: <b>' + userName + '</b></div><hr></div>'
    $('.post-modal').append(postModal);

    //post comments with 'comment' button
    $('.comment').on('click', function(e) {
      e.stopImmediatePropagation();
      var userComment = $('#comment').val();
      var userCommentName = $('#name-comment').val();
      var newComment = '<div><div><button type="button" class="close-comment">&times;</button></div><div>' + userComment + '</div><div>Posted by: <b>' + userCommentName + '</b></div><hr></div>';
      $('#comments').append(newComment);

      //clear text boxes after each comment
      $('#comment').val('');
      $('#name-comment').val('');

      //delete comments
      $('.close-comment').on('click', function() {
        $(this).parent().parent().remove();
      });
    });
  });

  //close comments with (x) button
  $('.close').on('click', function() {
    $('#comments-modal').css({"display":"none"});
    $('.show-post').remove();
  });
});

//post message with 'Enter' key
$('#name').keyup(function(event) {
  if (event.keyCode == 13) {
    $("#post").click();
  }
});

//post comment with 'Enter' key
$('#name-comment').keyup(function(event) {
  if (event.keyCode == 13) {
    $(".comment").click();
  }
});
