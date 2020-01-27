var posts = []
// post object will have the following format
//[{postedByUser: 
// postText: 
// comments: [{user:
//             comment:
//            }]
//}]


//store post when post button is clicked
$('.btn-primary').click(function() {
  var $user = $('#name').val()
  var $postText = $('#message').val()
  posts.push({ postedByUser: $user, postText: $postText, comments: []})
  
  renderPostings();

  //clear input fields
  $("#name").val("");
  $("#message").val("");
  //reset focus to name input
  $("#name").focus();
} ); 
 

//Function: render the posts on the page
var renderPostings = function () {
  //clear all posts from page
  $(".post-list").empty(); 

  var post = '';

  for (var i = 0; i < posts.length; i++) {
    //create first line of post (post text) and append
    post = $("<div>").text(posts[i].postText)
    $(".post-list").append(post);

    //create second line of post (posted by user) and append
    post = 'Posted by: <b>' + posts[i].postedByUser + '</b><hr></div>'
    $(".post-list").append(post);

  }
};
