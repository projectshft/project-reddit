


$('#post').click(function(){
  // alert("Your button works, ya big dummy");
  var postersName = $('.your-name').val();
  var postersText = $('.post-text').val();
  var nameObject = {name:postersName};
  var textObject = {text:postersText};
  var postArray = [nameObject,textObject]
  console.log(nameObject);
  console.log(textObject);
  console.log(postArray);
});


//outline for post should be:
// array with objects prop 1 is commenter Name
// prop 2 is text string.
var initialPost=[];



// $( document ).ready(function() {
//   console.log( 'ready!' );
//   alert("page is ready");
// });
