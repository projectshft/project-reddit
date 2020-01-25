//this is an array of objects containing the posts information
//empty array where we push in the objects
var postsArray = [];
var order = 1;


//addPosts

var addToPostArrays = function() {
  //takes the values from the input field on the forum
  var userMessage = $('#message').val();
  var userName = $('#name').val();
  var postComment = $('.comment').val();
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
    addPost(postsArray[i]);

  };
};

var addPost = function(post) {
  //creates a new div in the posts div for posts
  $('.posts').append('<div class ="post">' + '</div>');
  //adds a remove and comment button to the post
  $('.post').append('<button class="remove"> remove </button> ' + '<button class=comments>comments</button>');
  //adds the userInput (message + name ) to the post
  $('.post').append('<p class="userinput">' + post.message + '<p>' + '<p class="userinput">' + ' Posted By: ' + '<strong>' + post.name + '</strong></p>' + '<hr>');
  // adds text input values to the comment button
  $('.comment').append('<input class="commenttext" type="Text" placeholder="Comment Text">'+'</input>');
};

//when the post button is clicked it adds the values to the PostArray


//when the remove button is clicked it removes the post
$('.posts').on('click', '.remove', function() {
  $(this).closest('.post').remove();
});

$( ".comments" ).click(function() {
  $( ".commentinputvalues" ).toggle(swing);
});
// $('.comments').on('click', function () {
//       $(this).next('.post').toggle(swing);

// $(".comment").click(function () {
// var text = $(this).text();
// $("input").val(text);
// $('.comments').on('click', function() {
//   $('.comments').toggleClass('show');
// });
