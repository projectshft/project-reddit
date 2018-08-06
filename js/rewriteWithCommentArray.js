//following Aaron's walkthrough and Sean's lecture on CDD, this is a re-write utilizing an array to store posts and comments, rather than generating it all dynamically
//also, i should generate the comment section dynamically, so that it can be attached to anything in the post array easily, rather than toggling something in index.html on/off

// I think I pasted too much in here from my original file

//define an array to store posts and comments as objects: {name: name, post: post, comments: [];}
var dataContainer = [];

//function to handle post button click, capture user input
var $('.add-post') = function () {
  var postName = $('#name').val();
  var postMessage = $('#message').val();
  createPost(message, name);
};

//function to append posts to the array
var createPost = function (message, name) {
  dataContainer.push({name: name, message: message, comments: []});
}

//TODO factor this commented out code into building the dynamic html portion, then delete
//
// $('.posts').append(rule);  //adds a divider
//
// // here I need to push the posts to the array instead of to the dynamic concat string
// $('.posts').append('<li>'+'<span id=removePost>'+"remove "+'</span>'+'<span id=commentPost>'+"comments "+'</span>'+'<span id=newMessage>'+message+'</span>'+'</li>');
// $('.posts').append('<li>' + "Posted By: " + '<b>' + name + '</b>'+ '</li>');
//
// // rework to push the comments to the placeholder array
// $('.posts').append('<ul id=commentList>' + '</ul>')


//function to remove a post
//TODO change this to remove post commentContainer instead of deleting an li
//keep in mind finding the right index, emptying the container/DOM
var removePost = function () {
  if ($('#comment-submission').css('display') == 'none') {
    $('li').remove();
  } else {
    $('#comment-submission').hide();
    $('li').remove();
  }
};

//function to create a comment section dynamically, hidden by default
//TODO simplify this HTML
//TODO work out having it hidden by default, toggled on
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
//TODO fix where the comments are being appended
//TODO fix how the HTML is showing the info from the array -- good use case for Handlebars?
  $('li').append('<li>' + comment + " Posted By: " + '<b>' + name + '</b>' + '</li>');
};

//function to show comment form on a post, submit comment
//TODO change this to hide by default, show dynamically for a given post in the array
var commentPost = function () {
  if ($('#comment-submission').css('display') == 'none') {
    $('#comment-submission').show();
  } else {
    $('#comment-submission').hide();
  }
};

//function to push posts and comments to the container array
//TODO keep working this out! in the ballpark
var commentButtonClicked = function () {
  var commentName = $('#comment-name').val();
  var comment = $('#comment').val();
  var commentContainer = [];

  commentContainer.push({comment: comment, commentName: commentName});
  $('#commentList').append(commentContainer);
  $('#removeComment').on('click', removeComment);
}

//function to remove a comment
//TODO like with the post removal, this needs to change to work with commentContainer array
var removeComment = function () {
  if ($('#comment-submission').css('display') == 'none') {
    $('#commentList').remove();
  } else {
    $('#comment-submission').hide();
    $('commentList').remove();
  }
};

//render the posts/comments

//event handlers
//TODO add the "third" variable like Aaron showed?
$('#post-button').on('click', postButtonClicked);
$('#comment-button').on('click', commentButtonClicked);
