//global variables
var buttonLock = false;

//new post function
var newPost = function () {
  var userName = $('#user-name').val();
  var newPostText = $('#new-post-text').val();
  
  if (userName && newPostText) {
    var d = new Date();
    var n = d.toLocaleTimeString();
    
    $('.posts').append('<div class="row post-and-comments"> <div class="row individual-post"> <div class="col-sm-10 each-post"><span id="editThis">' + newPostText + '</span><br><br><br><br>Posted by ' + userName + ' at ' + n + '.<button type="button" class="btn btn-info btn-sm leave-comment-button">Comment</button><button type="button" class="btn btn-info btn-sm hide-comments-button">Hide Comments</button><button type="button" class="btn btn-info btn-sm show-comments-button">Show Comments</button></div> <div class="col-sm-1"><button type="button" class="btn btn-warning btn-sm editPost">Edit</button><br><button type="button" class="btn btn-danger btn-sm removePost">Remove</button></div></div><div class ="row comments"></div>');

    $('#post-form').trigger("reset");
  } else if (!userName){
    alert("You need to write your User Name before you can post!");
  } else if (!newPostText) {
    alert("You haven't written a post yet!");
  }
  $('.removePost').on("click", removePost);
  $('.editPost').on("click", editPost);
  $('.leave-comment-button').on("click", leaveComment);
};

var removePost = function() {
  $(this).closest('.post-and-comments').remove();
  if (buttonLock) {
  $('#post-comment').css('display','inline');
  buttonLock = false;
  $(this).closest('#edit-comment').remove();
  }
};

var removeComment = function() {
  $(this).closest('.new-comment').remove();
  if (buttonLock) {
  $('#post-comment').css('display','inline');
  buttonLock = false;
  }
};

var editPost = function() {

  if(!buttonLock) {
    buttonLock = true;
    $('#post-comment').css('display','none');
    $(this).closest('.individual-post').append(editPostTemplate);
    var $postLocation = $(this).closest('.individual-post').find('#editThis');
    var tempStorage = $postLocation.html();
    $('#edited-post-text').html(tempStorage);
  }


    $('#cancel-edit-button').click(function () {
      buttonLock = false;
      $('#post-comment').css('display','inline');
      $(this).closest('#edit-comment').remove();
    });

    $('#edit-post-button').click(function () {
      buttonLock = false;
      var editedBy = $('#edited-by').val();
      var d = new Date();
      var n = d.toLocaleTimeString();
      if(editedBy) {
        var editedPostText = $('#edited-post-text').val();
        $postLocation.html(editedPostText);
        $('#post-comment').css('display','inline');
        $(this).closest('.post-and-comments').find('.each-post').append('<span> (Edited by ' + editedBy + ' at ' + n + ')</span>');
        $(this).closest('#edit-comment').remove();
      // } else {
      //   alert("Before you can make these edits, you need to tell us who the editor is!");
      }
    });
  };

var leaveComment = function() {
  if (!buttonLock){
    buttonLock = true;
    $(this).closest('.post-and-comments').append(leaveCommentTemplate);
    $(this).closest('.post-and-comments').find('.leave-comment-button').css('display', 'none');
    $(this).closest('.post-and-comments').find('.hide-comments-button').css('display', 'inline');
  }

  $('#cancel-comment-button').click(function () {
    buttonLock = false;
    $('#post-comment').css('display','inline');
    $(this).closest('#leave-comment').remove();
  });

  $('.hide-comments-button').click(function () {
    $(this).closest('.post-and-comments').find('#leave-comment').css('display', 'none');
    $(this).closest('.post-and-comments').find('.comments').css('display', 'none');
    $(this).closest('.post-and-comments').find('.show-comments-button').css('display', 'inline');
    $(this).closest('.post-and-comments').find('.hide-comments-button').css('display', 'none');
  });

  $('.show-comments-button').click(function () {
    $(this).closest('.post-and-comments').find('.comments').css('display', 'contents');
    $(this).closest('.post-and-comments').find('#leave-comment').css('display', 'contents');
    $(this).closest('.post-and-comments').find('.show-comments-button').css('display', 'none');
    $(this).closest('.post-and-comments').find('.hide-comments-button').css('display', 'inline');
    buttonLock = false;
  });

  $('#comment-button').click(function () {
    var commentBy = $('#comment-by').val();
    var commentPostText = $('#comment-text').val();
    var d = new Date();
    var n = d.toLocaleTimeString();
    if(commentBy && commentPostText) {
      $(this).closest('.post-and-comments').find('.comments').append('<div class="row new-comment"><div class="col-sm-10"><div id="comment">' + commentPostText + '<br><br><br><br>Posted by ' + commentBy + ' at ' + n + '.</div></div> <div class="col-sm-1"><button type="button" class="btn btn-danger btn-sm removeComment">Remove</button></div>');
      $('#comment-form').trigger("reset");
    }
    $('.removeComment').on("click", removeComment);
  });
};

//event listeners
$('#submit-post').click(newPost);



var editPostTemplate ='<div class="row" id="edit-comment"><div class="col-sm-10"><form id="edit-form"><p>Edit Post</p><div class="form-group"><input type="text" class="form-control" id="edited-by" aria-describedby="Edited By" placeholder="Edited by"></div><div class="form-group"><textarea class="form-control" id="edited-post-text" rows="10"></textarea></div><button type="button" class="btn btn-warning" id="edit-post-button">Make Edits</button><button type="button" class="btn btn-default" id="cancel-edit-button">Cancel</button></form></div></div>';

var leaveCommentTemplate ='<div class="row" id="leave-comment"><div class="col-sm-10"><form id="comment-form"><p>Leave a Comment</p><div class="form-group"><input type="text" class="form-control" id="comment-by" aria-describedby="Comment By" placeholder="Comment by"></div><div class="form-group"><textarea class="form-control" id="comment-text" rows="5" placeholder="What would you like to comment?"></textarea></div><button type="button" class="btn btn-info" id="comment-button">Leave Comment</button><button type="button" class="btn btn-default" id="cancel-comment-button">Cancel</button></form></div></div>';
