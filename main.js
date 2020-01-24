
//Template for adding comments
//var templateForComments = '<p>' + <userComment> + 'by:<strong>' + userName + '</strong></p>'

//Template for adding posts
//var templateForPost =
//'<div class="post form-group"><div><p class="remove">remove</p><p class="comment-button">comments </p><p>' + postedMessage + '</p></div><div class="enter-comment"><div class="form-group"><input id="commenters-name" type="text" class="form-control comment" placeholder="User Name"></input></div><div class="form-group"><input id="message" type="text" class="form-control comment" placeholder="Comment Text" </input></div><button type="submit" class="btn btn-comment">Post Comment</button></div><p>Posted by: <strong>' + postedMessageUserName + '</strong></p></div>'


//removes all post and comments when hiting the word remove
var removePost = $('.remove').on('click', function (){
 $(this).closest(".post").remove()
 console.log('hi')
});

//reveals the comment form when users presses the comment button
//TODO
var showComment = $('.comment-button').click(function(){
  $(this).closest(".post").closest('.enter-comment').remove()
})

//post button is clicked and then the input data goes into an object.
//then calls add post function to push it into my empty array
$('.btn-primary').on('click', function () {
  var postedMessageUserName = $('#post-name').val()
  var postedMessage = $('#post-message').val()
  var post = {
    name:postedMessageUserName,
    message:postedMessage
  }
  console.log('this is the post' + post)
  addPost(post);
});






//Get user input from main post and stores in variables


var posts = [
{name: 'Hannah', message:'Is the moon landing real?'},
{name:'April', message:'Hello'}
];


//addends the new html
var renderBoard = function () {
  $('.posts').empty();

  for (var i = 0; i < posts.length; i++) {
    var newPost = posts[i];

    $('.posts').append('<div class = post> <p class = remove>Remove</p><p class = comment>Comment</p><p>'+ newPost.message + '</p><p>Posted by:<strong>' + newPost.name + '</strong></p>');
  }
};
//pushes the posts into the posts array. Then calls the renderBoard function to post to screen
var addPost = function (post) {
  posts.push(post);
  console.log('this is the new posts array' + posts)
  renderBoard()
}
//clears the post to rerender it
/*var clearPostBoard = function () {
  posts = [];
  updatePostBoard();
}*/

renderBoard();
