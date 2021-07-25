var postsAndCommentsArray = [
  {
    originalPost: 'i enjoy cherries',
    author: 'nina',
    comments: []
  },
  {originalPost: '',
  author: '',
  comments: []
  },
]

var loadPosts = function() {
  var $li = $('li');
  $li.append(postsAndCommentsArray[0].originalPost + ' -  Posted by: ' + postsAndCommentsArray[0].author);
};

var submitPost = function() {
  $('#submit').on('click', function () {
    var numPosts = postsAndCommentsArray.length;
    console.log(numPosts);

    var $userMessage = $('#message').val();
    var $userName = $('#name').val();
      
      postsAndCommentsArray[numPosts].originalPost = $userMessage;

      postsAndCommentsArray[numPosts].author = $userName;

      numPosts++;
      console.log(numPosts);
  
      console.log(postsAndCommentsArray);
  });
};

loadPosts();
submitPost();






// When a user clicks 'comments' (above each post) it should toggle the comments and input box visible/hidden.



