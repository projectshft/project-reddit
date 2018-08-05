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
  var template =
     '<ul>'
   + '  <li class="li-click">' + 'remove' + ' ' + 'comment' + '</li>'
   + '  <li class="li-plain">' + text + '</li>'
   + '  <li class="li-plain">' + "<strong>Posted by: </strong>" + name + '</li>'
   + '  <li class="li-plain">' + '<i>' + date + '</i>' + '</li>'
   + '</ul>'
   ;
   var $row = $(template);
   return $row;
};

var postPost = function () {
  $submitButtom.click(function() {
    var $postList = $('.post-list');
    var $postrow = createPost($textInput.val(), $userName.val(), new Date().toLocaleString())
    $postList.append($postrow)
  })
}

postPost();
