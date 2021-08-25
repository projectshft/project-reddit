$('#submit').click(function () {
  var post = $('#post').val();
  var name = $('#name').val();
  $('.posts').append("<div id='postContainer'><span id='remove'><font color='#0000ff'>Remove</font></span>" + " " + "<span id='comment'><font color='#0000ff'>Comment</font></span>" +  " " + post + ' - Posted By: ' + name + "</div>");
 
});

$('.posts').on('click', '#remove', function (e) {
  
  var $element = $(e.target);
  
  $element.remove();
});