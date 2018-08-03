
var nameObject = {};
var textObject = {};
var postArray =[];
var initialPost = [];
var postNewThread = "";

$('#post-button').click(function(){

  var postersName = $('.your-name').val();
  var postersText = $('.post-text').val();
  nameObject = {name:postersName};
  textObject = {text:postersText};
  postArray = [nameObject,textObject]
  initialPost.push(postArray);


  $('.post-here').append("<li>"+postersText+"<br>Posted By: "+postersName+ "</li");


});


//outline for post should be:
// array with objects prop 1 is commenter Name
// prop 2 is text string.




// $( document ).ready(function() {
//   console.log( 'ready!' );
//   alert("page is ready");
// });
