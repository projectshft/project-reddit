// var postButton = $('#post-button'); //this doesn't get used in function but might have a purpose later?

var rule = '<hr />';

//Listen for post button clicks, append posts to the post list
var postButtonClicked = function () {
  var name = $('#name').val();
  var message = $('#message').val();
  $('.posts').append(rule);  //add divider
  $('.posts').append('<li>'+'<span id=removePost>'+"remove "+'</span>'+'<span id=commentPost>'+"comments "+'</span>'+'<span id=newMessage>'+message+'</span>'+'</li>');
  $('.posts').append('<li>' + "Posted By: " + '<b>' + name + '</b>'+ '</li>');  //add the post
  $('#name').val('');  //clear the input boxes
  $('#message').val('');
  $('#removePost').on('click', removePost);  //invoke whenever this function runs, for dynamically added elements
  $('#commentPost').on('click', commentPost);
};

//only the first remove button is clickable, and it removes all the li items -- tried this/parent/child, revisit later
var removePost = function () {
  $('li').remove();
};

//also only works on the first comment button
//this dynamically creates a comment section, but i think that's wrong -- i need to define it in index.html and toggle class here to show/hide
//tried that but couldn't get working - revisit later
var commentPost = function () {
  $('.posts').append(
    '<div class="comment-submission">' +
      '<div class="container">' +
        '<div class="row text-left">' +
          '<div class="col-md-4">' +
            '<div class="form-group">' +
              '<input id="comment" type="text" class="form-control" placeholder="Your Comment">'+'</textarea>' +
            '</div>' +
          '</div>' +
          '<div class="col-md-4">' +
            '<div class="form-group">' +
                '<input id="name" type="text" class="form-control" placeholder="Your Name">'+'</input>' +
            '</div>' +
          '</div>' +
          '<div class="col-md-4">' +
            '<button type="button" id="post-button" class="btn btn-primary">' + 'Comment' + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
    '</div>'
  );

  var name = $('#name').val();
  var comment = $('#message').val();

  $('li').append('<li>' + comment + " Posted By: " + '<b>' + name + '</b>' + '</li>');

};

$('#post-button').on('click', postButtonClicked);
