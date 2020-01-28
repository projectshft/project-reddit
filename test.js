//this is an array of objects containing the posts information
//empty array where we push in the objects
var postsArray = [];


//add Posts to Array
var addToPostsArrays = function() {
  //takes the values from the input field on the forum
  var userMessage = $('#message').val();
  var userName = $('#name').val();

  //pushes the values into Posts array
  postsArray.push({
    name: userName,
    message: userMessage,
    comment: [],

  });

};

var addCommentsToPostsArray = function() {
  //
  var $userCommentName = $('#commentname').val();
  var $userCommentText = $('#commentname').val();
  //shouldn't be postsArray.length-1 should somehow access each of the array indexes
  postsArray[i].comment.push({
    commenttext: $userCommentText,
    commentname: $userCommentName,
  });

};

//when you press both the post and the post message button
//it adds the input values to the postsArray
//TODO!!! could call by id and be separate
$('#submit').click(function() {
  addToPostsArrays();
  renderPost();
});

//the render function does x
var renderPost = function() {
  //empties posts when you render the page
  $('.posts').empty();
  //looping through the array to find stuff
  for (var i = 0; i < postsArray.length; i++) {
    //loops through the array to posts info
    var commentsElement = addPostToPage(postsArray[i], i);
  };
  console.log(postsArray);
};

//this function adds the posts to the webpage by creating new divs
//and the nested comment posts
var addPostToPage = function(post, i) {
  //creates a new div in the posts div for posts
  var $postDiv = $('<div class ="post"' + i + '>' + '</div>');
  //adds a remove and comment button to the post
  $postDiv.append('<a class="removepost" type ="link" id="removepost"> remove </a>');
  //
  $postDiv.append('<a class=comments type="link" id="comments"> comment(s) </a>');
  //adds the userInput (message + name ) to the post
  $postDiv.append('<p class="userinput" id="postmessage">' + post.message + '<p>' + '<p class="userinput" id="postname">' + ' Posted By: ' + '<strong>' + post.name + '</strong></p>' + '<hr>');

  $postDiv.append('<div class ="comment">' + '</div>');

  $('.posts').append($postDiv);

  $('.comment').append('<button class="btn btn commentinput" type="submit" id="deletecomment"> X </button>');
  $('.comment').append('<input id="commenttext" class="commentinput" type="Text" placeholder="Comment Text">' + '</input>');
  $('.comment').append('<input id="commentname" class="commentinput" type="Text" placeholder="User Name">' + '</input>');
  $('.comment').append('<button class="btn btn-primary commentinput" type="submit" id="postcomment"> Post Comment</button>');


  //take in the loop index

};

$('#postcomment').on('click', function() {
  console.log('what is happening in the post comments?')
  addCommentsToPostsArray();
});


//when the remove button is clicked it removes the post
$('.removepost').on('click', function() {
  $(this).closest('.post').remove();
});
