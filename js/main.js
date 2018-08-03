//Listen for button clicks, append posts to the list
var button = $('button');
var rule = '<hr />';

var clicked = function () {
   var name = $('#name').val();
   var message = $('#message').val();
   $('.posts').append(rule);
   $('.posts').append('<li>' + message + '</li>');
   $('.posts').append('<li>' + "Posted By: " + '<b>' + name + '</b>'+ '</li>');
};

$('button').on('click', clicked);
