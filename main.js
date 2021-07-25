var postsAndCommentsArray = [
  {
    originalPost: 'i enjoy cherries',
    author: 'nina',
    comments: []
  }
]

var loadPosts = {
  initial: function() {
    var $posts = $('.posts');
    if (postsAndCommentsArray.length == 1) {
      $posts.append('<div data-id="0"><a data-id="0" class="remove">remove </a><a class="comments" data-id="0"> comments</a><li data-id="0">' + postsAndCommentsArray[0].originalPost + ' -  Posted by: ' + postsAndCommentsArray[0].author + '</li></div>');
      bindEvents.removePosts();
      bindEvents.viewComments();

    };
  },

  allPosts: function() {
    var $posts = $('.posts');
    var i = postsAndCommentsArray.length - 1;
    $posts.append('<div data-id="' + i + '"><a data-id="' + i + '"class="remove"> remove </a><a class="comments" data-id="' + i + '"> comments</a><li data-id="' + i + '">' + postsAndCommentsArray[i].originalPost + ' -  Posted by: ' + postsAndCommentsArray[i].author + '</li>');
    bindEvents.removePosts();
    bindEvents.viewComments();

  }
};

var bindEvents = {
  removePosts: function () {
    $('.remove').on('click', function (e) {
      var dataId = $(e.target).data('id'); 
      $('div[data-id="' + dataId + '"]').remove();
    }); 
  },

  viewComments: function () {
    $('.comments').on('click', function (e) {
    var dataId = $(e.target).data('id');
    console.log('clicked the comment box of ' + dataId + '!');

    var formTemplate = '<form data-id="' + dataId + '" id="commentInput" style="margin-top: 30px" onsubmit="event.preventDefault();"><div class="form-group"><textarea id="commentMessage" type="text"class="form-control"placeholder="comment text"></textarea><div class="form-group"><input id="commentName" type="text"class="form-control"placeholder="your name"></input></div><button id="submitComment" class="btn btn-primary">submit comment</button></form>';

    
    // grab the div we just clicked
      var $clickedPostDiv = $('div[data-id="' + dataId + '"');
    // append that div with the formTemplate containing the dataId
      $clickedPostDiv.append(formTemplate);
    
      // grab the comment form of the div with our dataId
      var $currentComments = $('form[data-id="' + dataId + '"');
    
    // if form does not contain 'show' class, toggle class
    if ($currentComments.hasClass('show')) {
      $currentComments.removeClass('show');
    } else {
      $currentComments.addClass('show');
    };
    });
  }
}


var submitPost = function() {
  $('#submit').on('click', function () {
    var $userMessage = $('#message').val();
    var $userName = $('#name').val();      
    
    postsAndCommentsArray.push({originalPost: $userMessage, author: $userName});

    console.log(postsAndCommentsArray);
    loadPosts.allPosts();
    $('#postForm')[0].reset();

  });
}

loadPosts.initial();
submitPost();







