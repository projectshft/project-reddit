//new post function
var newPost = function () {
  var userName = $('#user-name').val();
  var newPostText = $('#new-post-text').val();
  
  if (userName && newPostText) {
    $('.posts').append('<div class="row individual-post"><div class="col-sm-10 each-post data-postID="' + postID +'"><span id="editThis">' + newPostText + '</span><br> <br>Posted by ' + userName + '</div>' +
    '<div class="col-sm-1"><button type="button" class="btn btn-warning btn-sm editPost">Edit</button><br><button type="button" class="btn btn-danger btn-sm removePost">Remove</button></div></div>');

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
  var $postLocation = $(this).parent().prev().children();
  var tempStorage = $(this).parent().prev().children().html();
  // var tempStorage = $postLocation.html();

  $('#edited-post-text').html(tempStorage);
  $('#post-comment').css('display','none');
  $('#edit-comment').css('display','inline');

  $('#cancel-edit-button').click(function () {
    $('#edit-form').trigger("reset");
    $('#post-comment').css('display','inline');
    $('#edit-comment').css('display','none');
  });

  $('#edit-post-button').click(function () {
    var editedPostText = $('#edited-post-text').val();
    $postLocation.html(editedPostText);
    $('#post-comment').css('display','inline');
    $('#edit-comment').css('display','none');
  });
}

//global variables
var postID = 0;

//event listeners
$('#submit-post').click(newPost);
$('.editPost').on("click", editPost);


