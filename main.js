var postsAndCommentsArray = [
  {
    originalPost: 'i enjoy cherries',
    author: 'nina',
    comments: []
  }
]

var loadPosts = {
  initial: function() {
    var $li = $('li');
    if (postsAndCommentsArray.length == 1) {
      $li.append('<li>' + postsAndCommentsArray[0].originalPost + ' -  Posted by: ' + postsAndCommentsArray[0].author + '</li>');
    };
  },

  allPosts: function() {
    var $li = $('li');
    if (postsAndCommentsArray.length > 1) {
      postsAndCommentsArray.forEach(obj => {
        console.log(obj.originalPost);
        $li.append('<li>' + obj.originalPost + ' -  Posted by: ' + obj.author + '</li>');
      });
    }
  }
};



// var loadPosts = function() {
//   var $li = $('li');
//   if (postsAndCommentsArray.length == 1) {
//     $li.append('<li>' + postsAndCommentsArray[0].originalPost + ' -  Posted by: ' + postsAndCommentsArray[0].author + '</li>');
//   } else {
//     postsAndCommentsArray.forEach(obj => {
//       console.log(obj.originalPost);
//       $li.append('<li>' + obj.originalPost + ' -  Posted by: ' + obj.author + '</li>');
//     });
//   }
  
// };

var submitPost = function() {
  $('#submit').on('click', function () {
    var $userMessage = $('#message').val();
    var $userName = $('#name').val();      
    
    postsAndCommentsArray.push({originalPost: $userMessage, author: $userName});

    console.log(postsAndCommentsArray);
    loadPosts.allPosts();
  });
};
loadPosts.initial();
submitPost();





// When a user clicks 'comments' (above each post) it should toggle the comments and input box visible/hidden.



