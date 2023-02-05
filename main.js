
var button = $('#only');
var commentbtn = $('#commentbtn')

// var cloneFunction = $(button).on('click', function () {
//   var clone = $('#everything');
//   $(clone).clone().appendTo('.addarea');
// });

var addTextName =  $(button).on('click', function () {
  // cloneFunction();
  var postnamebox = $('#postnamein').val();
  var textbox = $('#posttextin').val();

    $('#postname').append('<h3>'  + postnamebox +  '</h3>');
    $('.postbody').append('<p>' + textbox + '</p>');
    // cloneFunction();
})

// $(commentbtn).on('click', function () {
//   console.log('im click')
//   $('.postbody').append('<h6>' + commentName + '</h6>' )
// })

// var addComment = function () {
//   var commentName = $('#commentname').val();
//   var commentFrom = $('#commentfrom').val();
  $(commentbtn).on('click', function () {
    // var commentName = $('#commentname').val();
    var commentFrom = $('#commentbox').val();
    $('.postbody').append('<h6>' + commentFrom + '</h6>')
    // $('postbody').append('<p>' + commentFrom + '</p>')
  })
