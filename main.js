// set the template to be able to take in two parameters and hold their values as strings

var newPost = function($userNameInput, $userPostInput){
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

// Gets the template from newPost function so that when a new btn is clicked the
// user name shows in the header of the card, and the comments shows in the <p> tag
// in the post section of the card.
var $btnPost = $('#btnPost');
$btnPost.on('click', function(){
  var $userNameInput = $('#name').val();
  var $userPostInput = $('#message').val();
  var newPost = newPost($userNameInput, $userPostInput);
  $('.comment-list').prepend(newPost);

});
