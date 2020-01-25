//this is an array of objects containing the posts information
//empty array where we push in the objects
var postsArray = [];
var order = 1;


//addPosts

var addToPostArrays = function() {
  //takes the values from the input field on the forum
  var userMessage = $('#message').val();
  var userName = $('#name').val();
  var postComment = $()
  var postNumber = $()
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

//the render function where does x
var renderPost = function() {
  //
  $('.posts').empty();

  //looping through the array to find stuff
  for (var i = 0; i < postsArray.length; i++) {
    //
    addPost(postsArray[i]);
  };
};

var addPost = function(post) {
  var comments = $()
  //creates a new remove button
  var remove = $('<input class="remove" type="button" id="removeButton" value="remove"/>');
  // //appends the remove button to the post
  $('.posts').append(remove);

  //posts user button
  //appends the user message to the post
  $('.posts').append('<div class="post" >' + post.message + '</div>')
    //appends the user message to the post and bolds the user name
  $('.posts').append('<div class="post" >' + 'Posted By:' + '<strong>' + post.name + '</strong></div>' + '<hr>');

  //posted user Names
  //appends the user name to the post
  // $('.posts').append('<li>' + ' Posted By:' + '</li>' + '<li> <strong>' + post.name + '</strong> </li>');
  //pushes new posts in Posts array
};

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
