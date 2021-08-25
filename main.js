$('#submitPost').click(function () {
  var post = $('#post').val();
  var name = $('#name').val();
  $('.posts').append(
    "<div class='post'><span class='remove'>Remove</span>" + " " +  "<span class='commentButton'>Comment</span>" +  " " +
    post + ' - Posted By: ' + name + "<div class='comments'><div class='commentContainer'></div><input type='text' class='comment' placeholder='Comment Text'></input><br/><br/><input type='text' class='commentName' placeholder='Comment Name'></input><div class='button'><a class='btn btn-primary btn-md submit-comment' href='#' role='button' id='submitComment'>Submit Comment</a></div></div>");

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

  var comment = $('.comment').val();
  var commentName = $('.commentName').val();

  $(e.target).closest('.post').find('.commentContainer').append(comment + ' - Posted By: ' + commentName);
});