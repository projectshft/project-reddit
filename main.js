$('#submitPost').click(function () {
  var post = $('#post').val();
  var name = $('#name').val();
  $('.posts').append(
    "<div class='post'><span class='remove'>Remove</span>" + " " +  "<span class='comment'>Comment</span>" +  " " +
    post + ' - Posted By: ' + name + "<div class='comments'><input type='text' id='comment' placeholder='Comment Text'></input><br/><br/><input type='text' id='commentName' placeholder='Comment Name'></input><div class='button'><a class='btn btn-primary btn-md' href='#' role='button' id='submitComment'>Submit Comment</a></div></div>");

});

$('.posts').on('click', '.remove', function (e) {
  
  var $element = $(e.target);
  
  $element.closest('.post').remove();
});

$('.posts').on('click', '.comment', function (e){
  
  var $element = $(e.target);

  $element.find('.comments').toggleClass('show');
})