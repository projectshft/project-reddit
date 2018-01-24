//Fix problem with deleting comments and adding new comments

//Fix problem with comments section showing comments for every post no matter what post was clicked



//create list of posts and names to be associated with those posts
var postsArray = [];

//adding each post to list of posts
var postsObj = function(msg, name) {
  postsArray.push({
    userMsg: msg,
    userName: name,
    post: postsArray.length + 1,
    comments: []
  })
};

//Allows user to post upon clicking 'post'
$('#post').on('click', function() {
  postsObj($('#message').val(), $('#name').val());
  console.log(postsArray[postsArray.length - 1].post);
  //console.log(postsArray);
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
    var postModal = '<div class="show-post" id="' + '"><div class="msg">' + postsArray[id - 1].userMsg + '</div><div class="name">Posted by: <b>' + postsArray[id - 1].userName + '</b></div><hr></div>'
    $('.post-modal').append(postModal);

    //adding each comment to list of posts
    var commentObj = function(msg, name) {
      postsArray[id - 1].comments.push({
        userComment: msg,
        userCommentName: name,
        comment: postsArray[id - 1].comments.length + 1
      })
    };

    //add numbered id to 'comment' button
    var changeCommentNumber = function() {
      if (postsArray[id - 1].comments != '') {
        return commentNumber = postsArray[id - 1].comments[postsArray[id - 1].comments.length - 1].comment;
      } else {
        return commentNumber = 0;
      };
    };
    changeCommentNumber();
    console.log(commentNumber);

    //post comments with 'comment' button
    $('.comment').on('click', function(e) {
      e.stopImmediatePropagation();

      //Add info to commentObj object
      commentObj($('#comment').val(), $('#name-comment').val());
      console.log(postsArray);
      changeCommentNumber();

      var userComment = postsArray[id - 1].comments[commentNumber - 1].userComment;
      console.log(userComment);
      var userCommentName = postsArray[id - 1].comments[commentNumber - 1].userCommentName;
      var deleteId = commentNumber * -1;
      console.log(deleteId);
      var newComment = '<div><div><button type="button" class="close-comment" id="' + deleteId + '">&times;</button></div><div>' + userComment + '</div><div>Posted by <b>' + userCommentName + '</b></div><hr></div>';
      $('#comments').append(newComment);

      //clear text boxes after each comment
      $('#comment').val('');
      $('#name-comment').val('');

      //delete comments
      $('.close-comment').on('click', function(e) {
        e.stopImmediatePropagation();
        var deleteNumber = $(this).attr('id') * -1;
        console.log(deleteNumber);
        var index = postsArray[id - 1].comments.findIndex(x => x.comment == deleteNumber);
        console.log(index);
        $(this).parent().parent().remove();
        postsArray[id - 1].comments.splice(index, 1);
        console.log(postsArray);
      });
    });

    //close comments with (x) button
    $('.close').on('click', function() {
      $('#comments-modal').css({"display":"none"});
      $('.show-post').remove();
      $('.new-comment').remove();
    });
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
