//this is an array of objects containing the posts information
//empty array where we push in the objects
var postsArray = [];
var order = 1;
var commentnumber = 1;

//add Posts to Array
var addToPostsArrays = function() {
  //takes the values from the input field on the forum
  var userMessage = $('#message').val();
  var userName = $('#name').val();
  // var userCommentText = $('#commenttext').val();
  // var userCommentName = $('#commentname').val();
  //pushes the values into Posts array
  postsArray.push({
    name: userName,
    message: userMessage,
    comment: [

    ],
    order: order++
  });
  renderPost();
};

//when you press both the post and the post message button
//it adds the input values to the postsArray
//TODO!!! could call by id and be separate
$('#submit').click(function() {
  addToPostsArrays();
});

$('#postcomment').click(function() {
  // addToPostsArrays();
  console.log("where do i put this info for post comment?")
});

//the render function does x
var renderPost = function() {
  //
  $('.posts').empty();
  // $('.commentinput').empty();

  //looping through the array to find stuff
  for (var i = 0; i < postsArray.length; i++) {
    var newPost = postsArray[i];
      $('.posts').append(newPost);
    for (var j = 0; j < postsArray[i].comment.length; j++) {
      var newComment = postsArray[i].comment[j];
    };
  };
};


var $post = $('<div id="parent">0</div>');
$post.append('<div id="child1">1</div>');
$post.append('<div id="child2">2</div>');
$post.append('<div id="child3">3</div>');
$('.posts').append($post);

//   var addPostToPage = function(post) {
//     //creates a new div in the posts div for posts
//     var postElement = $('.posts').append('<div class ="post">' + '</div>');
//     //adds a remove and comment button to the post
//     postElement.append('<a class="removepost" type ="link" id="removepost"> remove </a>');
//     //
//     var $commentsElement = $postElement.append('<a class="comments"  type="link" id="comments"> comment(s) </a>');
//     //adds the userInput (message + name ) to the post
//     postElement.append('<p class="userinput" id="postmessage">' + post.message + '<p>' + '<p class="userinput" id="postname">' + ' Posted By: ' + '<strong>' + post.name + '</strong></p>' + '<hr>');
//     //
//     return $commentsElement;
//
//     //take in the loop index
//   };
//
// var addCommentToPage = function(commentsElement){
//
// $commentsElement.append('<input id="commenttext" class="commentinput form-control" type="Text" placeholder="Comment Text">' + '</input>');
// $commentsElement.append('<input id="commentname" class="commentinput form-control" type="Text" placeholder="User Name">' + '</input>');
// $commentsElement.append('<button class="btn btn-primary commentinput" type="submit" id="postcomment"> Post Comment </button>');
//
// };



//when the remove button is clicked it removes the post
$('.posts').on('click', '.removepost', function() {
  $(this).closest('.post').remove();
});

//when you click on the link comments(s) it should display the hidden comments or .commentinfo

// $('.post').on('click', '.commentlink', function () {
//   $(this).closest('.comments').toggleClass('show');
// });
//
// $( ".commentlink" ).click(function() {
//   $( ".comments" ).toggle( "slow", function() {
//     // Animation complete.
//   });
// });
//
// $( "#commentlink" ).toggle('display');
