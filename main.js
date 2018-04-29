// $('button').on('click', function(){
//   var post = $('<p>' + $('#post').val() + '<p>');
//   $('.posts').append(post)
//   $('#post').val('');
//
//
//   var name = $('<p>' + $('#name').val() + '<p>');
//   $('.posts').append(name)
//   $('#name').val('');
//
// })


$(document).ready(function(){
//toggle comments


  $('#toggle-comment').click(function(){
      $('.comments').toggle();


  });


//click button to post your message and name
$('#post-button').on('click', function() {


  var postInputed = $('<p>' + $('#post-input').val() + '</p>');
  var nameInputed = $('<p>' + 'Posted By: ' + $('#name-input').val() + '</p>');

  var addComment = $( "#toggle-comment" )
    .html("<a href='#'>Comments</a>");

var hey= $('.posts').append(postInputed);

$('.posts').prepend("<a id='toggle-comment' href='#'>Comments</a>");
$('#post-input').val('');

  $('.names').append(nameInputed);
  $('#name-input').val('');
});

// click button to post comments
$('#comment-button').on('click', function() {

  var commentInputed = $('<span>' + $('#comment-input').val() + '</span>' +  '<span>'+ ' ' + 'Posted By: ' + $('#username-input').val() + '</span>' + '<p>' + '</p>');
  // var usernameVar= $('<span>'+ ' ' + 'Posted By: ' + $('#username-input').val() + '</span>');


  $('.comment').append(commentInputed );
  $('#comment-input').val('');
  $('#username-input').val('');

});


});
