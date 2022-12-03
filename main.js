
  
$('#submit').on('click', function () {
  var myName = $('#name').val();
  var post = $('#message').val();


  var postContainer = '<p>' + post + ' - posted by: '  + myName + '</p>' ;

  $(".posts").append(postContainer); 



})


  $('.posts').on('click', function () {
 $(this).remove();
 });









 
 








 
  
  