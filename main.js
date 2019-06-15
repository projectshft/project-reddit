// set the template to be able to take in two parameters and hold their values as strings

var newPost = function($userNameInput, $userPostInput, date){
var postTemplate =
'<article class="row">' +
  '<div class="col-md-10 col-sm-10">' +
    '<div class="panel panel-default">' +
      '<div class="posted panel-body">' +
        '<header class="text-left">' +
          '<div class="comment-user"><i class="fa fa-user"></i> ' + $userNameInput + '</div>' +
          '<time class="comment-date"><i class="fa fa-clock-o"></i>' + date + '</time>' +
        '</header>' +
        '<div class="comment-post">' +
          '<p>'+ $userPostInput+'</p>' +
        '</div>' +
        '<button type="button" class="btn btn-primary btn-sm" id="btnReply">reply</button>  ' +
        '<button type="button" class="btn btn-success btn-sm" id="btnReply">Comments</button><br><br>' +
        '<form class="comment" action="index.html" method="post">' +
          '<div class="form-group">' +
            '<input id="commentName" type="text" class="form-control" placeholder="Username">' +
          '</div>' +
          '<div class="form-group">' +
            '<textarea id="commentMessage" type="text" class="form-control" placeholder="Message"></textarea>' +
          '</div>' +
        '</form>' +
        '<div class="col-md-1 comment">' +
          '<button type="button" class="btn btn-primary btn-sm" id="btnPostComment">Post Comment</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</article>'
;
return postTemplate;
}

var newComment = function($commentNameInput, $commentPostInput){
  var commentTemplate =
  
}

// Gets the template from newPost function so that when btnPost is clicked the
// user name shows in the header of the card, and the comment shows in the <p> tag
// in the post section of the card.
var $btnCreatePost = $('#btnPost');
$btnCreatePost.on('click', function(){
  var $userNameInput = $('#name').val();
  var $userPostInput = $('#message').val();
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  var callNewPost = newPost($userNameInput, $userPostInput, date);
  $('.comment-list').prepend(callNewPost);

  // Gets the template of reply info boxes from reply function so that when btnReply is clicked
  // the boxes to enter name and comment are toggled
  var $btnReply = $('#btnReply');
  $btnReply.on('click', function(e){
    e.preventDefault();
    $(this).siblings('div.comment').toggle();
    $(this).siblings('form.comment').toggle();
  });

  var $btnPostComment = $('#btnPostComment');
  $btnPostComment.on('click', function(e){
    e.preventDefault();
    var $commentNameInput = $('#commentName').val();
    var $commentPostInput = $('#commentMessage').val();
    $('.posted').append('<p>' + $commentNameInput + ': ' + $commentPostInput + '</p>');

  });



});
