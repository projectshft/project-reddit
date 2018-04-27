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





var postIt = $('#post-button').on('click', function() {

  // var addComment = 'comments';
  var posted = $('<p>' + $('#post-input').val() + '<p>');
  var addedName = $('<p>' + 'Posted By: ' + $('#name-input').val() + '<p>');

  // posted.click(function() {
  //   $(this).alert("Hello");
  // })
  // $($input).prependTo(posted);
$('.posts').append(posted);
$('#post-input').val('');


  // var name = $('<p>' + 'Posted By: '+ $('#name').val() + '<p>');
  $('.names').append(addedName);
  $('#name-input').val('');
})

//
// var commentIt = $('button').on('click', function() {
//
//   // var addComment = 'comments';
//   var posted = $('<p>'+ $input +  $('#post').val() + '<p>');
//   var addedName = $('<p>' + 'Posted By: ' + $('#name').val() + '<p>');
//
//
//   $('.posts').append(posted)
//   $('#post').val('');
//
//   $('.posts').append(addedName)
//   $('#name').val('');
// })
