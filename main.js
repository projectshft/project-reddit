//this is an array of objects containing the posts information

var posts = [];
// var posts = [
//   //the text of the post
//   {
//     userMessage: 'userMessage',
//     // the name of the poster
//     userName: 'userName',
//     //
//     userComment: [{
//       commenterMessage: 'commenterMessage',
//       commenterName: 'commenterName'
//     }]
//   }
// ]
//the addPost function pushes new posts into the post array

//
// var post = $(this).closest('.post').data();
// addPost(post);
// console.log(posts);

//addPosts
var addPost = $('.btn-primary').click(function() {
  //creates a new remove button
  // var remove = $('<input class="remove" type="text" id="remove" value="remove"/>');
  //appends the remove button to the post
  $('.post').append('<p>' + 'remove' + '</p>').addClass('remove');
  //posts user button
  var userMessage = $('#message').val();
  //appends the user message to the post
  $('.post').append('<p>' + userMessage + '</p>');
  //posted user Names
  var userName = $('#name').val();
  //appends the user name to the post
  $('.post').append('<p>' + ' Posted By:' + '</p>' + '<p> <strong>' + userName + '</strong> </p>');

  //deletes the post when the remove button is clicked
  //TODO!! make it not delete every post when clicked
  //TODO!! make it text that when clicked deletes the entire post
  $('.remove').on('click', function() {
    $(this).closest('.post').remove();
  });

  //pushes new posts in Posts array
  posts.push({
    name: userName,
    message: userMessage,
    comment: null
  });
  console.log(posts);
});
