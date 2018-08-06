var rule = '<hr />';

//Listen for post button clicks, append posts to the post list
var postButtonClicked = function () {
  var name = $('#name').val();
  var message = $('#message').val();
  $('.posts').append(rule);  //add divider
  $('.posts').append('<li>'+'<span id=removePost>'+"remove "+'</span>'+'<span id=commentPost>'+"comments "+'</span>'+'<span id=newMessage>'+message+'</span>'+'</li>');
  $('.posts').append('<li>' + "Posted By: " + '<b>' + name + '</b>'+ '</li>');  //add the post
  $('.posts').append('<ul id=commentList>' + '</ul>') //placeholder for comments
  $('#name').val('');  //clear the input boxes
  $('#message').val('');
  $('#removePost').on('click', removePost);  //invoke whenever this function runs, for dynamically added elements
  $('#commentPost').on('click', commentPost);
};

//only the first remove button is clickable, and it removes all the li items -- tried this/parent/child, revisit later
//added a check for the comment section -- must hide comments before removing li or you lose comment button
var removePost = function () {
  if ($('#comment-submission').css('display') == 'none') {
    $('li').remove();
  } else {
    $('#comment-submission').hide();
    $('li').remove();
  }
};

//also only works on the first comment button
//this dynamically creates a comment section, but i think that's wrong -- i need to define it in index.html and toggle class here to show/hide
// var commentPost = function () {
//   $('.posts').append(
//     '<div class="comment-submission">' +
//       '<div class="container">' +
//         '<div class="row text-left">' +
//           '<div class="col-md-4">' +
//             '<div class="form-group">' +
//               '<input id="comment" type="text" class="form-control" placeholder="Your Comment">'+'</textarea>' +
//             '</div>' +
//           '</div>' +
//           '<div class="col-md-4">' +
//             '<div class="form-group">' +
//                 '<input id="name" type="text" class="form-control" placeholder="Your Name">'+'</input>' +
//             '</div>' +
//           '</div>' +
//           '<div class="col-md-4">' +
//             '<button type="button" id="post-button" class="btn btn-primary">' + 'Comment' + '</button>' +
//             '</div>' +
//           '</div>' +
//         '</div>' +
//     '</div>'
//   );
//
//   var name = $('#name').val();
//   var comment = $('#message').val();
//
//   $('li').append('<li>' + comment + " Posted By: " + '<b>' + name + '</b>' + '</li>');
//
// };

//new comment section: toggle HTML on or off instead of generating dynamically
//works! but how do i make it a "child" of a dynamically added li instead of in a fixed location?
//still only works on the first li
var commentPost = function () {
  if ($('#comment-submission').css('display') == 'none') {
    $('#comment-submission').show();
  } else {
    $('#comment-submission').hide();
  }
};


//I should change this to push the comments into an array of objects instead of just being dynamic HTML, which doesn't scale well at all
var commentButtonClicked = function () {

  var commentName = $('#comment-name').val();
  var comment = $('#comment').val();
  $('#commentList').append('<button id="removeComment" type="button" class="close" aria-label="Close">'+'<span aria-hidden="true">'+'&times;'+'</span>'+'</button>');
  $('#commentList').append('<li>' + comment + " Posted By: " + '<b>' + commentName + '</b>' + '</li>');
  $('#removeComment').on('click', removeComment);
}

//rewriting to use an array of objects
//not fully baked, reverting to above version for monday pull request
// var commentButtonClicked = function () {
//   var commentName = $('#comment-name').val();
//   var comment = $('#comment').val();
//   var commentContainer = [];
//
//   commentContainer.push({comment: comment, commentName: commentName});
//   $('#commentList').append(commentContainer);
//   $('#removeComment').on('click', removeComment);
// }

var removeComment = function () {
  if ($('#comment-submission').css('display') == 'none') {
    $('#commentList').remove();
  } else {
    $('#comment-submission').hide();
    $('commentList').remove();
  }
};

$('#post-button').on('click', postButtonClicked);
$('#comment-button').on('click', commentButtonClicked);
