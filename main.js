// 'posts' object with one dummy example
var posts = [{
   text:  null,
   name: null,
   time: null,
   comments: [{
      text: null,
      name: null
   }]
}];

var $submitButton = $('#button1');
var $userName = $('#name');
var $textInput = $('#message');

// saves displayed post data in the 'posts' object
var dataUpdater = function () {
  postsSendoff = {}
  var dateTime = new Date().toLocaleString()
  $submitButton.click(function() {
    postsSendoff.text = $textInput.val()
    postsSendoff.name = $userName.val()
    postsSendoff.datetime = dateTime
    posts.push(postsSendoff)
  })
};

dataUpdater();

var createPost = function (text, name, date) {
  var post =
     '<ul>'
    + '  <li class="li-plain">' + text + '</li>'
    + '  <li class="li-plain">' + "<strong>Posted by: </strong>" + name + '</li>'
    + '  <li class="li-plain">' + '<i>' + date + '</i>' + '</li>'
    + '</ul>'
    ;
   var $row = $(post)
   return $row
};

// display post containing date/time of posting
var postPost = function () {
  $submitButton.click(function() {
    var $postList = $('.post-list')
    var $postrow = createPost($textInput.val(), $userName.val(), new Date().toLocaleString())
    var $commentButton = $('<button/>').addClass('comment-buttton').css({'background-color': 'rgb(222, 243, 251)',
      'width': '100px',
      'height': '20px',
      'border-radius': '5'}).html("Comment")
    $postList.append($commentButton)
    var $removeButton = $('<button/>').addClass('remove-buttton').css({'background-color': 'rgb(222, 243, 251)',
      'width': '100px',
      'height': '20px',
      'padding-right': '5px',
      'border-radius': '5'}).html("Remove")
    $postList.append($removeButton)
    $postList.append($postrow)
  })
};

postPost();

var $hidden = $('.form-inline')

// tried to toggle 'display: hidden/inline-block' - didn't work
// trying instead to toggle opacity of hidden comment input form
$(document).ready(function(){
  $('.comment-button').click(function(){
    if ($hidden.style.opacity = 0) {
      $hidden.style.opacity = 1;
    }
    else if ($hidden.style.opacity = 1) {
      $hidden.style.opacity = 0
    }
  });
});
