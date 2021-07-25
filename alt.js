var postsAndCommentsArray = [
  {
    originalPost: 'i enjoy cherries',
    author: 'nina',
    comments: []
  },
  {},
]

var submitPost = function() {
  $('#submit').on('click', function () {
    var $userMessage = $('#message').val();
    postsAndCommentsArray[1][originalPost].push($userMessage);
  })
};



var bindEvents = function () {
  var $removePost = $('.remove');
      $removePost.on('click', function(event){
        console.log(event.target);
      });

    var $comments = $('.comments');
    $comments.on('click', function(event) {
      // comments be an array?
      var commentsArray = [];
      // if commentsArray.length > 0, then publish the comments in an li using jquery. give it a remove as well
      // if comments link is clicked, show comment input box
      $('.commentBox').append('<li><form id="commentInput" style="margin-top: 30px" onsubmit="event.preventDefault();">' + `<div class="form-group">
      <textarea id="commentMessage" type="text"
      class="form-control"
      placeholder="comment text"></textarea>` + `<div class="form-group">
      <input id="commentName" type="text"
        class="form-control"
        placeholder="your name"></input>
    </div>

    <button id="submitComment" class="btn btn-primary">submit comment</button>
  </form></li>`);
      $('#commentInput').toggleClass('show');

    console.log(event.target);
    });
  };

var showPostsAndComments = {

  submitPost: function() {
    $('#submit').on('click', function () {
      var $userMessage = $('#message').val();
      var $userName = $('#name').val();
      // alert($userName + ' said ' + $userMessage + ' ! ');
     
    
      var $posts = $('.posts');
      $posts.append('<hr><a class="remove">remove</a>' + ' ' + '<a class="comments">comments</a><li>' + $userMessage + ' - Posted by: ' + $userName + '</li><hr>');

      bindEvents();
    })
  }
};


showPostsAndComments.submitPost();
bindEvents();