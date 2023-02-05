//Use Bootstrap
//Write good HTML,CSS,JS
//Use jQuery
//Make sure a user can add posts as well as remove them

// var postButton = $('.btnpost');
// var commentButton = $('.btncomment');;

// var deletePost = null;
// var deleteComment = null;

// var postNameIn = $('#postnameinput');
// var postTextIn = $('#posttextinput');

// var commentName = $('commentname');
// var commentText = $('.commenttext');

// var postBoxName = $('.postname');
// var postBoxText = $('.postbody');

// var commentBoxName = $('.commentname');
// var commentBoxText = $('.commentbody');
var button = $('.btn');

$(button).on('click', function () {
  var clone = $('#everything');
  $(clone).clone(true).appendTo('.addarea');
})

// $(button).on('click', function(e) {
//   var $element = e.target;
//   console.log($element);
// })
// 
// var bindEvent = function () {
//   $(button).click(function () {
//     var clone = $('#everything');
//   $(clone).clone().appendTo('.addarea');
//   });
// }