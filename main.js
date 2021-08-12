var currentlyEditing = false;

//new post function
var newPost = function () {
  var userName = $('#user-name').val();
  var newPostText = $('#new-post-text').val();
  
  if (userName && newPostText) {
    var d = new Date();
    var n = d.toLocaleTimeString();
    
    $('.posts').append('<div class="row individual-post" data-postID=' + postID +'> <div class="col-sm-10 each-post"><span id="editThis">' + newPostText + '</span><br> <br>Posted by ' + userName + ' at ' + n + '.</div> <div class="col-sm-1"><button type="button" class="btn btn-warning btn-sm editPost">Edit</button><br><button type="button" class="btn btn-danger btn-sm removePost">Remove</button></div></div>');

    $('#post-form').trigger("reset");
  } else if (!userName){
    alert("You need to write your User Name before you can post!");
  } else if (!newPostText) {
    alert("You haven't written a post yet!");
  }
  postID++;
  $('.removePost').on("click", removePost);
  $('.editPost').on("click", editPost);
};

var removePost = function() {
  var $rowTBD = $(this).closest('.individual-post');
  $rowTBD.remove();
};

var editPost = function() {
  // var $postLocation = $(this).closest('.individual-post').find('.editThis');
  // console.log($postLocation.html());
  // var $postLocation = $(this).parent().prev().children();
  // var tempStorage = $(this).parent().prev().children().html();
  // var tempStorage = $postLocation.html();
  // editPostID = $(this).closest('.individual-post').attr('data-postID');
  // editPostID = Number(editPostID);
  // console.log(editPostID);
  // var tempStorage = null;

  if (!currentlyEditing) {
    currentlyEditing = true;
    $(this).closest('.individual-post').append(editPostTemplate);
    var $postLocation = $(this).closest('.individual-post').find('#editThis');
    var tempStorage = $postLocation.html();
    $('#edited-post-text').html(tempStorage);

    $('#post-comment').css('display','none');
    // $('#edit-comment').css('display','inline');

    $('#cancel-edit-button').click(function () {
      currentlyEditing = false;
      $('#post-comment').css('display','inline');
      $(this).closest('#edit-comment').remove();
    });

    $('#edit-post-button').click(function () {
      currentlyEditing = false;
      var editedBy = $('#edited-by').val();
      var d = new Date();
      var n = d.toLocaleTimeString();
      if(editedBy) {
        var editedPostText = $('#edited-post-text').val();
        $postLocation.html(editedPostText);
        $('#post-comment').css('display','inline');
        $(this).closest('.individual-post').find('.each-post').append('<span> (Edited by ' + editedBy + ' at ' + n + ')</span>');
        $(this).closest('#edit-comment').remove();
      } else {
        alert("Before you can make these edits, you need to tell us who the editor is!");
      }
      
    });
  }
}

//event listeners
$('#submit-post').click(newPost);

//global variables
var postID = 0;

var editPostTemplate ='<div class="row" id="edit-comment"><div class="col-sm-10"><form id="edit-form"><p>Edit Comment</p><div class="form-group"><input type="text" class="form-control" id="edited-by" aria-describedby="Edited By" placeholder="Edited by"></div><div class="form-group"><textarea class="form-control" id="edited-post-text" rows="10"></textarea></div><button type="button" class="btn btn-warning" id="edit-post-button">Make Edits</button><button type="button" class="btn btn-default" id="cancel-edit-button">Cancel</button></form></div></div>';

