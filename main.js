// logic goes here
$(document).ready(function(){


// PART 1


// $('#post').on('click', function(){
//   alert('Submitted!');
// });


// listen for post button click
// grab inputs: post and name
// display in virtual DOM as html

$('form').submit(function(e){
  e.preventDefault();
  var name = $('input#name').val();
  var message = $('textarea#message').val();
  $('.comments').html('<h6>'+message+'<br>'+'Posted by: '+'<strong>'+name+'</strong>'+'</h6>');
// TODO: 1) apply Bootstrap to make name bold & italic
//       2) apply Bootstrap to space out lines

});

// $('form').submit(function(e){
//   e.preventDefault();
//   var message = $('textarea#message').val();
//   $('.comments').html('<h6>'+message+'</h6>');
// });




// PART 2
// a) When a user clicks 'comments' (above each post) it should
// toggle the comments and input box visible/hidden.

// $('#btn1').on('click', function(){
//   // $('.para1').hide();
//   $('.para1').toggle();

// $('#btn1').click(function(e){
//   alert(e.currentTarget.id);
//   alert(e.currentTarget.className);
//   alert(e.currentTarget.innerHTML);
//   alert(e.currentTarget.outerHTML);
//   alert(e.currentTarget.value);
// });
//
// $('#btn1').on('click', function(){
//   $('.para1').show();
// });

// b) When a user clicks the 'x' next to a comment, it should delete it.
//
// $('#btn1').on('click', function(){
//   $('.para1').hide();
// });

// c) When a user fills out the two comment inputs and clicks 'Post Comment'
// it should immediately add the comment to the list of comments.

// d) Lastly, when a user clicks 'remove' above a post, it should remove the post too.

// $('#btn1').on('click', function(){
//   $('.para1').hide();
// });
});
