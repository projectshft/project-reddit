$('#submit').click(function () {
  var post = $('#post').val();
  var name = $('#name').val();
  $('.post').append("<div class='post'><span class= 'remove'> Remove </span>" + " " + "<span class= 'commentButton'> Comments </span>" + " " + post + ' -Posted By: ' + name + "<div class= 'comments'><div class= 'commentContainer'></div><input type= 'text' class= 'comment' placeholder= 'Comment Text'></input><br/><br><input type= 'text' class= 'commentName' placeholder= 'Comment Name'></input><br></br><div class='button'><a class='btn btn-primary btn-md submit-comment' href='#' role='button' id= 'submitComment'>Submit Comment</a></div></div>");
});

$('.post').on('click', '.remove', function (e) {

  var $element  = $(e.target);

  $element.closest('.post').remove();
});

$('.post').on('.click', '.commentButton', function (e) {
  var $element = $(e.target);

  $element.parent().find(".comments").toggleClass("show");
});

$('.post').on('click','.submit-comment',function (e) {
  var $element = $(e.target);
  var comment = $element.closest(".post").find(".commentName").val();
  var commentName = $element.closest(".post").find(".commentName").val();

  $element.closest('.post').find('.commentContainer').append(comment + ' - Comment By: ' + commentName + "<br/>");


});