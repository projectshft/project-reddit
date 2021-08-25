$('#submit').click(function () {
  var post = $('#post').val();
  var name = $('#name').val();
  $('.posts').append("<div id='postContainer'><span id='remove'>Remove</span>" + " " + "<span id='comment'>Comment</span>" +  " " + post + ' - Posted By: ' + name + "</div>");
 
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