$('#post').on('click', function() {
  //get information from input
  var userMsg = $('#message').val();
  var userName = $('#name').val();
  //create post
  var newPost = '<div><div><button type="button" style="padding:0px" class="btn-link remove">remove</button><button type="button" class="btn-link comments" data-toggle="modal" data-target="commentsModal">comments</button></div><div class="msg">' + userMsg + '</div><div class="name">Posted by: <b>' + userName + '</b></div><hr></div>'
  $('.posts').append(newPost);
  //clear text box
  $('#message').val('');
  $('#name').val('');
  //remove post with 'remove' button
  $('.remove').on('click', function() {
    $(this).parent().parent().remove();
  });
  //open comments modal with 'comments' button
  $('.comments').on('click', function() {
    $('#comments-modal').css({"display":"block"});
    //comments modal features original post
    var postModal = '<div class="show-post"><div class="msg">' + userMsg + '</div><div class="name">Posted by: <b>' + userName + '</b></div><hr></div>'
    $('.post-modal').append(postModal);
    //var openComments = '<div id="commentsModal"><div class="modal-header"><h4 class="modal-title">Comments</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><hr><div class="modal-body"><div class="comments"><hr></div><hr><div class="form-group"><input id="comment" type="text" class="form-control" placeholder="Comment Text"></input><input id="name-comment" type="text" class="form-control" placeholder="Your Name"></input></div></div><hr><div class="modal-footer"><button type="button" class"btn btn-secondary comment">Comment</button></div></div>'
  });
  //close comments with (x) button
  $('.close').on('click', function() {
    $('#comments-modal').css({"display":"none"});
    $('.show-post').remove();
  });
  //close comments when user clicks outside of modal
  /*window.onclick = function(event) {
    if (event.target == $('#comments-modal')) {
      $('#comments-modal').css({"display":"none"});
    };
  };*/
})


//post message with 'Enter' key
$('#name').keyup(function(event) {
  if (event.keyCode == 13) {
    $("#post").click();
  }
});
