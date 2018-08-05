// 'posts' object with one example
var posts = [
  { text: 'oh yea', name: 'Sean', time: null,
    comments:  [
      {text: 'so what?', name: 'David'}
    ]
  }
]

var $submitButtom = $('#button1');
var $userName = $('#name');
var $textInput = $('#message');

var dataUpdater = function () {
  postsSendoff = {}
  var dateTime = new Date().toLocaleString();
  $submitButtom.click(function() {
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
   var $row = $(post);

   return $row;
};

var postPost = function () {
  $submitButtom.click(function() {
    var $postList = $('.post-list');
    var $postrow = createPost($textInput.val(), $userName.val(), new Date().toLocaleString())
    var $commentButton = $('<button/>').addClass('comment-buttton').css({'background-color': 'rgb(222, 243, 251)',
      'width': '100px',
      'height': '20px',
      'border-radius': '5'}).html("Comment")
    $postList.append($commentButton);
    var $removeButton = $('<button/>').addClass('remove-buttton').css({'background-color': 'rgb(222, 243, 251)',
      'width': '100px',
      'height': '20px',
      'padding-right': '5px',
      'border-radius': '5'}).html("Remove")
    $postList.append($removeButton);
    $postList.append($postrow);
  })
}

postPost();
