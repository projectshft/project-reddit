var postsAndCommentsArray = [
  {
    originalPost: 'i enjoy cherries',
    author: 'nina',
    comments: []
  }
]

var loadPosts = function() {
  postsAndCommentsArray.forEach(obj => {
    console.log(obj.originalPost);
    var $li = $('li');
    $li.append(obj.originalPost + ' -  Posted by: ' + obj.author);

  });
  
};

var submitPost = function() {
  $('#submit').on('click', function () {
    var $userMessage = $('#message').val();
    var $userName = $('#name').val();      
    
    postsAndCommentsArray.push({originalPost: $userMessage, author: $userName});

    console.log(postsAndCommentsArray);

    loadPosts();
  });
};
loadPosts();
submitPost();





// When a user clicks 'comments' (above each post) it should toggle the comments and input box visible/hidden.



