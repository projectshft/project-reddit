

// get the value of the users name and the value of the post they wrote


var foo = function($userNameInput, $userPostInput){
var template =
'<article class="row">' +
  '<div class="col-md-10 col-sm-10">' +
    '<div class="panel panel-default">' +
      '<div class="panel-body">' +
        '<header class="text-left">' +
          '<div class="comment-user"><i class="fa fa-user"></i> ' + $userNameInput + '</div>' +
          '<time class="comment-date" datetime="16-12-2014 01:05"><i class="fa fa-clock-o"></i> Dec 16, 2014</time>' +
        '</header>' +
        '<div class="comment-post">' +
          '<p>'+ $userPostInput+'</p>' +
        '</div>' +
        '<button type="button" class="btn btn-primary btn-sm" id="btnReply">reply</button>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</article>'
;
return template;
}


var $btnPost = $('#btnPost');
$btnPost.on('click', function(){
  var $userNameInput = $('#name').val();
  var $userPostInput = $('#message').val();
  var callingFoo = foo($userNameInput, $userPostInput);
  $('.comment-list').prepend(callingFoo);

});
