var postsAndCommentsArray = [
  {
    originalPost: 'i enjoy cherries',
    author: 'nina',
    comments: []
  }
]

var loadPosts = function() {
  var $li = $('li');
  $li.append(postsAndCommentsArray[0].originalPost + ' -  Posted by: ' + postsAndCommentsArray[0].author);
};

var submitPost = function() {
  $('#submit').on('click', function () {
    var $userMessage = $('#message').val();
    var $userName = $('#name').val();

    console.log(postsAndCommentsArray[numPosts-1]);
      
      postsAndCommentsArray.push({originalPost: $userMessage, author: $userName});

      

  
      console.log(postsAndCommentsArray);
  });
};

loadPosts();
submitPost();






// When a user clicks 'comments' (above each post) it should toggle the comments and input box visible/hidden.



