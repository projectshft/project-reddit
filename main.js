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





var postIt = $('button').on('click', function() {

  // var addComment = 'comments';
  var posted = $('<p>'+ $input +  $('#post').val() + '<p>');
  var addedName = $('<p>' + 'Posted By: ' + $('#name').val() + '<p>');

  // posted.click(function() {
  //   $(this).alert("Hello");
  // })
  // $($input).prependTo(posted);
$('.posts').append(posted)

  $('#post').val('');


  // var name = $('<p>' + 'Posted By: '+ $('#name').val() + '<p>');
  $('.posts').append(addedName)
  $('#name').val('');
})


var commentIt = $('button').on('click', function() {

  // var addComment = 'comments';
  var posted = $('<p>'+ $input +  $('#post').val() + '<p>');
  var addedName = $('<p>' + 'Posted By: ' + $('#name').val() + '<p>');


  $('.posts').append(posted)
  $('#post').val('');

  $('.posts').append(addedName)
  $('#name').val('');
})
