// set the template to be able to take in two parameters and hold their values as strings

var newPost = function($userNameInput, $userPostInput, date){
var postTemplate =
'<article class="row comment-section">' +
  '<div class="col-md-10 col-sm-10">' +
    '<div class="panel panel-default">' +
      '<div class="posted panel-body">' +
        '<button style="float: right" type="button" class="btn btn-danger btn-xs" id="btnDeletePost">delete post</button>' +
        '<header class="text-left">' +
          '<div class="comment-user"><i class="fa fa-user"></i> ' + $userNameInput + '</div>' +
          '<time class="comment-date"><i class="fa fa-clock-o"></i>' + date + '</time>' +
        '</header>' +
        '<div class="comment-post">' +
          '<p>'+ $userPostInput+'</p>' +
        '</div>' +
        '<button type="button" class="btn btn-success btn-sm" id="btnComments">Comments</button><br><br>' +
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
        '<div class="comment">' +
          '<ul id="ul">' +
          '</ul>' +
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
  '<article class="row comments"><br><br>' +
    '<div class="col-md-10 col-sm-10">' +
      '<div class="panel panel-default">' +
      '<div class="panel-heading right">Comment</div>' +
        '<div class="panel-body">' +
          '<header class="text-left">' +
            '<div class="comment-user"><i class="fa fa-user"></i> ' + $commentNameInput + '</div>' +
          '</header>' +
          '<div class="comment-post">' +
            '<p>'+ $commentPostInput+'</p>' +
          '</div>' +
          '<button type="button" class="btn btn-danger btn-xs" id="btnDelete" onclick="var li = this.parentNode.parentNode; var ul = li.parentNode; ul.removeChild(li);">delete</button>' +
          '<form class="comment" action="index.html" method="post">' +
            '<div class="form-group">' +
              '<input id="commentName" type="text" class="form-control" placeholder="Username">' +
            '</div>' +
            '<div class="form-group">' +
              '<textarea id="commentMessage" type="text" class="form-control" placeholder="Message"></textarea>' +
            '</div>' +
          '</form>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</article>'
  ;
return commentTemplate;
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

  // this adds new posts to the top sorted by newer posts first
  $('.comment-list').prepend(callNewPost);

  // Gets the template of reply info boxes from reply function so that when btnReply is clicked
  // the boxes to enter name and comment are toggled
  var $btnComments = $('#btnComments');
  $btnComments.on('click', function(e){
    e.preventDefault();
    $(this).siblings('div.comment').toggle();
    $(this).siblings('form.comment').toggle();
  });

  var $btnDeletePost = $('#btnDeletePost');
  $btnDeletePost.on('click', function(e){
    e.preventDefault();
    var post = this.parentNode.parentNode;
    var targetPost = post.parentNode;
    targetPost.removeChild(post);
  });

  var $btnPostComment = $('#btnPostComment');
  $btnPostComment.on('click', function(e){
    e.preventDefault();
    var ul = $('#ul');
    var $commentNameInput = $('#commentName').val();
    var $commentPostInput = $('#commentMessage').val();
    var callNewComment = newComment($commentNameInput, $commentPostInput);
    ul.append('<li>'+callNewComment+'</li>');

    var $btnComments = $('#btnComments');
    $btnComments.on('click', function(e){
      e.preventDefault();
      $(this).siblings('div.comments').toggle();
    });
  });


});

//onclick="var li = this.parentNode.parentNode; var ul = li.parentNode; ul.removeChild(li);"

// var $btnDelete = $('#btnDelete');
// $btnDelete.on('click', function(e){
//   e.preventDefault();
//
//   $('li').remove()
//
// });

//   var $btnPostComment = $('#btnPostComment');
//   $btnPostComment.on('click', function(e){
//     e.preventDefault();
//     var $commentNameInput = $('#commentName').val();
//     var $commentPostInput = $('#commentMessage').val();
//     var callNewComment = newComment($commentNameInput, $commentPostInput);
//     var li = document.createElement('li');
//     var ul = $('.ul').val();
//     li.setAttribute('id',$commentNameInput);
//     li.appendChild(document.createTextNode($commentNameInput));
//
//     ul.appendChild(li);
// });
