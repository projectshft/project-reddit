// var postButton = $('#post-button'); //this doesn't get used in function but might have a purpose later?

$('#comment-submission').hide;

var rule = '<hr />';

//Listen for button clicks, append posts to the list, invoke remove/comment functions for dynamically added elements
var postButtonClicked = function () {
  var name = $('#name').val();
  var message = $('#message').val();
  $('.posts').append(rule);
  $('.posts').append('<li>'+'<span id=removePost>'+"remove "+'</span>'+'<span id=commentPost>'+"comments "+'</span>'+'<span id=newMessage>'+message+'</span>'+'</li>');
  $('.posts').append('<li>' + "Posted By: " + '<b>' + name + '</b>'+ '</li>');
  $('#removePost').on('click', removePost);
  $('#commentPost').on('click', commentPost);
};

//only the first remove button is clickable, and it removes all the li items -- tried this/parent/child, revisit later
var removePost = function () {
  $('li').remove();
};

//also only works on the first comment button
//this dynamically creates a comment section, but i think that's wrong -- i need to define it in index.html and toggle class here to show/hide
var commentPost = function () {
  $('.posts').append(
    '<section id="comment-submission">' +
      '<div class="container">' +
        '<div class="row text-left">' +
          '<div class="col-md-3">' +
            '<div class="form-group">' +
              '<textarea id="comment" type="text" class="form-control" placeholder="Your Comment">'+'</textarea>' +
            '</div>' +
          '</div>' +
          '<div class="col-md-3">' +
            '<div class="form-group">' +
                '<input id="name" type="text" class="form-control" placeholder="Your Name">'+'</input>' +
            '</div>' +
          '</div>' +
          '<div class="col-md-2">' +
            '<button type="button" id="post-button" class="btn btn-primary">' + 'Comment' + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
    '</section>'
  )
  var name = $('#name').val();
  var comment = $('#message').val();

  $('li').append('<li>' + comment + " Posted By: " + '<b>' + name + '</b>' + '</li>');

};






$('#post-button').on('click', postButtonClicked);
