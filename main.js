$('#submitPost').click(function () {
  var post = $('#post').val();
  var name = $('#name').val();
  $('.posts').append(
    "<div id='postContainer'><span id='remove'>Remove</span>" + " " +  "<span id='comment'>Comment</span>" +  " " +
    post + ' - Posted By: ' + name + 
    "<div class='comments'><input type='text' id='comment' placeholder='Comment Text'></input><br/><br/><input type='text' id='commentName' placeholder='Your Name'></input><div class='button'><a class='btn btn-primary btn-md' href='#' role='button' id='submitComment'>Submit Comment</a></div></div></div>");
 
});

$('#comments').click(function () {
  var comment = $('#comment').val();
  var commentName = $('#commentName').val();
  $('#postContainer').append(comment + ' - Posted By: ' + commentName);
});

$('.posts').on('click', '#remove', function (e) {
  
  var $element = $(e.target);
  
  $element.remove();
});

