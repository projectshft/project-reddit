//this is an array of objects containing the posts information
//empty array where we push in the objects
var postsArray = [];
var order = 0;


//addPosts

var addToPostArrays = function() {
  //takes the values from the input field on the forum
  var userMessage = $('#message').val();
  var userName = $('#name').val();
  var postComment = $()
  var postNumber =$()
  //pushes the values into Posts array
  postsArray.push({
    name: userName,
    message: userMessage,
    comment: [],
    order: order++
  });
  renderPost();
};


$('.btn-primary').click(function() {
  addToPostArrays();
});

var renderPost = function() {
  $('.posts').empty();

  var posts = '';
  //looping through the array to find stuff
  for (var i = 0; i < postsArray.length; i++) {
    addPost(posts[i]);
    $('.posts').append(posts);
  };
};

var addPost = function(post) {
  //creates a new remove button
  // var remove = $('<input class="remove" type="button" id="removeButton" value="remove"/>');
  // //appends the remove button to the post
  // $('.post').append(remove);
  // $('.post').append('<p>' + 'remove' + '</p>').addClass('remove');
  //posts user button
  //appends the user message to the post
  $('.post').append('<p>' + userMessage + '</p>');
  //posted user Names
  //appends the user name to the post
  $('.post').append('<p>' + ' Posted By:' + '</p>' + '<p> <strong>' + userName + '</strong> </p>');
  //pushes new posts in Posts array
};

console.log(addPost());
console.log(postsArray);
//
//
//   //deletes the post when the remove button is clicked
//   //TODO!! make it not delete every post when clicked
//   //TODO!! make it text that when clicked deletes the entire post
//   $('.remove').on('click', function() {
//     $(this).closest('.zzzpost').remove();
//   });
//take as input this array objects
//using
// var toogleComments = $('.view-cart').on('click', function () {
//   $('.shopping-cart').toggleClass('show');
// });
