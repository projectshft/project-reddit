var postsAndCommentsArray = [
  {
    originalPost: 'i enjoy cherries',
    author: 'nina',
    comments: []
  }
]

var loadPosts = {
 
  allPosts: function() {
    // i think this function if what's messing it up. it's dependent on the length of the array, and i think my setting of the iterator variable is not helping..... how can i do this better 😣
    var $posts = $('.posts');

    if (postsAndCommentsArray.length == 1) {
      $posts.append('<div data-id="0"><a data-id="0" class="remove">remove </a><a class="comments" data-id="0"> comments</a><li data-id="0">' + postsAndCommentsArray[0].originalPost + ' -  Posted by: ' + postsAndCommentsArray[0].author + '</li></div>');
      this.attachComments();
      bindEvents.viewComments();
    } else {
      // this iterator qurl right here.... god
      for (let i = (postsAndCommentsArray.length-1); i < postsAndCommentsArray.length; i++) {
        $posts.append('<div data-id="' + i + '"><a data-id="' + i + '"class="remove"> remove </a><a class="comments" data-id="' + i + '"> comments</a><li data-id="' + i + '">' + postsAndCommentsArray[i].originalPost + ' -  Posted by: ' + postsAndCommentsArray[i].author + '</li>');
        // this.attachComments();
        // bindEvents.viewComments();

        

      }
    }
    // this.attachComments();
    // bindEvents.viewComments();
    bindEvents.removePosts();
  },

    
    
  
  attachComments: function() {
    
    var i = postsAndCommentsArray.length - 1;
    var formTemplate = '<form data-id="' + i + '" id="commentInput" style="margin-top: 30px" onsubmit="event.preventDefault();"><div class="form-group"><textarea id="commentMessage" type="text"class="form-control"placeholder="comment text"></textarea><div class="form-group"><input id="commentName" type="text"class="form-control"placeholder="your name"></input></div><button id="submitComment" class="btn btn-primary">submit comment</button></form>';

    var $postCommentDiv = $('div[data-id="' + i + '"');
    $postCommentDiv.append(formTemplate);
    // debugger;
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

    // grab the comment form of the div with our dataId
    var $currentComments = $('form[data-id="' + dataId + '"');    
    console.log('this is ' + dataId);
    // if form does not contain 'show' class, toggle class
    $currentComments.toggleClass('show');
    });
  }
}


var submitPost = function() {
  $('#submit').on('click', function () {
    var $userMessage = $('#message').val();
    var $userName = $('#name').val();      
    
    postsAndCommentsArray.push({originalPost: $userMessage, author: $userName});
    console.log(postsAndCommentsArray.length);
    $('#postForm')[0].reset();
    loadPosts.allPosts();
    loadPosts.attachComments();


  });
};

loadPosts.allPosts();
submitPost();
 bindEvents.viewComments();
// loadPosts.attachComments();









