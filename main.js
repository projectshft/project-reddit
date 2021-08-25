$('#submitPost').click(function () {
  var timeStamp = new Date();
  var post = $('#post').val();
  var name = $('#name').val();
  $('.posts').append(
    "<div class='post'><span class='remove'>Remove</span>" + " " +  "<span class='commentButton'>Comments</span>" +  " " +
    post + ' - Posted By: ' + name + " at: " + timeStamp.toLocaleString() + "<div class='comments'><div class='commentContainer'></div><input type='text' class='comment' placeholder='Comment Text'></input><br/><br/><input type='text' class='commentName' placeholder='Comment Name'></input><div class='button'><a class='btn btn-primary btn-md submit-comment' href='#' role='button' id='submitComment'>Submit Comment</a></div></div>");
});

$('.posts').on('click', '.remove', function (e) {
  
  var $element = $(e.target);
  
  $element.closest('.post').remove();
});

$('.posts').on('click', '.commentButton', function (e){

  var $element = $(e.target);

  $element.parent().find(".comments").toggleClass("show");
})

$('.posts').on('click', '.submit-comment', function (e) {
  var timeStamp = new Date();
  var $element = $(e.target);
  var comment = $element.closest(".post").find(".comment").val();
  var commentName = $element.closest(".post").find(".commentName").val();

  $element.closest('.post').find('.commentContainer').append(comment + ' - Comment By: ' + commentName + " at: " + timeStamp.toLocaleString() + "<br/>");
});