//Figure out how to change id of 'comment' button immediately after clicking 'comment' button

//create list of posts and names to be associated with those posts
var postsArray = [];

//function that pushes object into array
var postsObj = function(msg, name) {
  postsArray.push({
    userMsg: msg,
    userName: name,
    post: postsArray.length + 1,
    comments: []
  })
};

//function that posts array items on click event
$('#post').on('click', function() {
  postsObj($('#message').val(), $('#name').val());
  var newPost = '<div><div><button type="button" style="padding:0px" class="btn-link remove">remove</button><button type="button" class="btn-link comments" id="' + postsArray[postsArray.length - 1].post + '" data-toggle="modal" data-target="commentsModal">comments</button></div><div class="msg">' + postsArray[postsArray.length - 1].userMsg + '</div><div class="name">Posted by: <b>' + postsArray[postsArray.length - 1].userName + '</b></div><hr></div>'
  $('.posts').append(newPost);

  //clear text boxes after each post
  $('#message').val('');
  $('#name').val('');

  //remove posts upon clicking 'remove' button
  $('.remove').on('click', function() {
    $(this).parent().parent().remove();
  });

  //show comments modal when user clicks 'comments' button
  $('.comments').on('click', function(e) {
    e.stopImmediatePropagation();
    $('#comments-modal').css({"display":"block"});

    //comments modal to feature original post
    var id = $(this).attr('id');
    var postModal = '<div class="show-post"><div class="msg">' + postsArray[id - 1].userMsg + '</div><div class="name">Posted by: <b>' + postsArray[id - 1].userName + '</b></div><hr></div>'
    $('.post-modal').append(postModal);

    //post comments with 'comment' button

    if (postsArray[id - 1].comments != '') {
      var commentButtonId = postsArray[id - 1].comments[postsArray[id - 1].comments.length - 1].comment * -1;
    } else {
      var commentButtonId = 0;
    };
    var commentButton = '<button type="button" class="btn btn-secondary comment" id="' + commentButtonId + '">Comment</button>'
    $('.modal-footer').append(commentButton);

    if (postsArray[id - 1].comments != '') {
      for (let i = 0; i < postsArray[id - 1].comments.length; i++) {
        var returnComments = '<div class="new-comment"><div><button type="button" class="close-comment">&times;</button></div><div>' + postsArray[id - 1].comments[i].userComment + '</div><div>Posted by: <b>' + postsArray[id - 1].comments[i].userCommentName + '</b></div><hr></div>';
        $('#comments').append(returnComments);
      }
    };

    $('.comment').on('click', function(e) {
      e.stopImmediatePropagation();

      //push comment into postsArray
      var commentsObj = function(msg, name) {
        postsArray[id - 1].comments.push({
          userComment: msg,
          userCommentName: name,
          comment: postsArray[id - 1].comments.length + 1
        })
      }
      commentsObj($('#comment').val(), $('#name-comment').val());

      commentButtonId = postsArray[id - 1].comments[postsArray[id - 1].comments.length - 1].comment;

      var idComment = $(this).attr('id') * -1;

      var newComment = '<div class="new-comment"><div><button type="button" class="close-comment">&times;</button></div><div>' + postsArray[id - 1].comments[idComment].userComment + '</div><div>Posted by: <b>' + postsArray[id - 1].comments[idComment].userCommentName + '</b></div><hr></div>';
      $('#comments').append(newComment);

      //clear text boxes after each comment
      $('#comment').val('');
      $('#name-comment').val('');

      //delete comments
      $('.close-comment').on('click', function() {
        $(this).parent().parent().remove();
        postsArray[id - 1].comments.splice(idComment - 1, 1);
      });
    });


  });

  //close comments with (x) button
  $('.close').on('click', function() {
    $('#comments-modal').css({"display":"none"});
    $('.show-post').remove();
    $('.new-comment').remove();
  });
});

//function that adds comment information to post information objects

/*$('#post').on('click', function() {

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
});*/

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
