//Listen for button clicks, append posts to the list
var button = $('button');

var clicked = function () {
   var name = $('#name').val();
   var message = $('#message').val();
   $('.posts').append('<li>' + name + '</li>');
   $('.posts').append('<li>' + message + '</li>');
};

$('button').on('click', clicked);
