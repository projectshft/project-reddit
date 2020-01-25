//post button is clicked and then the input data goes into an object.
//then calls add post function to push it into my empty array
$('.btn-primary').on('click', function () {
  var postedMessageUserName = $('#post-name').val()
  var postedMessage = $('#post-message').val()
  var post = {
    name:postedMessageUserName,
    message:postedMessage,
    comments:[]
  }
  addPost(post);
});

//Get user input from main post and stores in variables

var posts = [];


//appends the new html also called remove and comment to invoke the ability to click them
var renderBoard = function () {
  $('.posts').empty();

  for (var i = 0; i < posts.length; i++) {
    var newPost = posts[i];
    $('.posts').append('<div class = post> <p class = "btn-remove inline-text">Remove</p><p class = "btn-comment inline-text"> Comment </p><p class = "inline-text"> '+ newPost.message + ' </p><form class = "form-inline comment"><input id = "comment-name" type = "text" class = "form-control" placeholder = "User Name"><input id="comment" type = "text" class = "form-control" placeholder = "Comment"><button type="button" class = "btn btn-primary">Post</button></form><p>Posted by:<strong>' + newPost.name + '</strong></p>');
  }
removeAndComment()
};

//pushes the posts into the posts array. Then calls the renderBoard function to post to screen
var addPost = function (post) {
  posts.push(post);
  console.log('this is the new posts array' + posts)
  renderBoard()
}
//removes all post and comments when hiting the word remove and removes from posts array
var removeAndComment = function(){
$('.btn-remove').on('click', function (){
    var postArrayIndex = $(this).closest(".post").index()
    $(this).closest(".post").remove()
    posts.splice(postArrayIndex, 1);
});
//reveals the comment form when users presses the comment button
//TODO
$('.btn-comment').on('click',function(){
  $(this).closest(".comment").toggleClass(' show')
  console.log('comment button clicks')
})
}
//renders the post at the start
renderBoard();
